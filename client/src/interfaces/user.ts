export interface User {
    id: string;
    name: string;
    email: string;
    lastLoginTime: string;
    registrationTime: string;
    status: "active" | "blocked";
}