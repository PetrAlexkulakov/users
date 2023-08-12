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

export interface NotLoggedUser {
    id: 'Not Logged'
    status: 'Not Logged'
}

export type AnyUser = User | NotLoggedUser