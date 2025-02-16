import { User } from "./types";

declare global {
    interface CustomJWTSessionClaims extends User {}
}