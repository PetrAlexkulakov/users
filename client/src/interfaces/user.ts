export interface User {
    id: string;
    name: string;
    email: string;
    lastLoginTime: string;
    createdAt: string;
    updatedAt: string;
    password: string;
    status: "active" | "blocked";
}