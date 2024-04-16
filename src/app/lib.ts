import { SessionOptions } from "iron-session";

export interface SessionData {
  userId?: string;
  username?: string;
  password?: string
  img?: string;
  isPro?: boolean;
  isLoggedIn: boolean;
}

export const defaultSession = {
  isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
  password: process.env.SECRET_KAY!,
  cookieName: "session",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
};
