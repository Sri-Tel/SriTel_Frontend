import { jwtDecode } from "jwt-decode";
import NextAuth, { AuthOptions } from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";
import { encrypt } from "@/utils/encryption";

export const authOptions: AuthOptions = {
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT_ID || "",
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET || "",
      issuer: process.env.KEYCLOAK_ISSUER || "",
    }),
  ],

  callbacks: {
    async jwt({ token, account}) {

        const nowTime = Math.floor(Date.now() / 1000);
      if (account) {
   
     token.decoded = jwtDecode(account.access_token);
     token.accessToken = account.access_token;
     token.id_token = account.id_token;
     token.refreshToken = account.refresh_token;
     token.expiresAt = account.expires_at;

     return token;
      } else
      if (nowTime < token.expiresAt) {
        return token;
      }else{
        console.log("Token expired");
        return {
          ...token,
          accessToken: null,
          id_token: null,
          refreshToken: null,
          expiresAt: null,
          decoded: null,
        };
      }
    },


    async session({ session, token }) {
   

        if (token) {
       
            session.accessToken = encrypt(token.accessToken);
            session.id_token = encrypt(token.id_token);
            session.user = {
            id: token.decoded.sub,
            name: token.decoded.name,
            email: token.decoded.email,
            roles: token.decoded.realm_access.roles,
            };
        }
      return session;
    },
  },


  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt", 
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET, // Use the same secret for JWT
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
