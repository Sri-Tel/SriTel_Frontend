import Cryptr from "cryptr";

export const encrypt = (text: string) => {
    const secretKey = process.env.NEXTAUTH_SECRET;
    if (!secretKey) {
        throw new Error("NEXTAUTH_SECRET is not defined");
    }
    const cryptr = new Cryptr(secretKey);
    const encryptedString = cryptr.encrypt(text);
    return encryptedString;
}

export const decrypt = (encryptedString: string) => {
    const secretKey = process.env.NEXTAUTH_SECRET;
    if (!secretKey) {
        throw new Error("NEXTAUTH_SECRET is not defined");
    }
    const cryptr = new Cryptr(secretKey);
    const decryptedString = cryptr.decrypt(encryptedString);
    return decryptedString;
}