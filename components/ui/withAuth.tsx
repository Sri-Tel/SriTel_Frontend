import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {jwtDecode} from "jwt-decode";

const withAuth = (Component) => {
  return function AuthenticatedComponent(props) {
    const { token, logout, loading } = useAuth(); // Use loading state from AuthContext
    const router = useRouter();

    useEffect(() => {
      if (!loading) {  // Only check token after loading completes
        if (!token) {
          // If no token, redirect to login
          router.push("/login");
          return;
        }

        // Decode token to get expiration time
        const decodedToken = jwtDecode<{ exp: number }>(token);
        const isTokenExpired = decodedToken.exp * 1000 < Date.now();

        if (isTokenExpired) {
          // If token is expired, log out and redirect to login
          logout();
          router.push("/login");
        }
      }
    }, [token, router, logout, loading]);

    // If still loading, show a spinner or placeholder
    if (loading) {
      return <div>Loading...</div>; // Placeholder or loading spinner
    }

    // If token is valid, render the wrapped component
    return <Component {...props} />;
  };
};

export default withAuth;
