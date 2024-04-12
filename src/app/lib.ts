import { SessionOptions } from "iron-session";

export interface SessionData {
    userId?: string;
    username?: string;
    img?: string;
    isPro?: boolean
}

export const sessionOptions: SessionOptions = {
    password: process.env.SECRET_KAY!,
    cookieName: "session",
    cookieOptions: {
        httpOnly : true,
        secure: process.env.NODE_ENV === "production"
    }
}