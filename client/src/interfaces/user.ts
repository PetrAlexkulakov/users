export interface User {
    id: string;
    name: string;
    email: string;
    lastLoginTime: string;
    createdAt: string;
    status: "active" | "blocked";
}