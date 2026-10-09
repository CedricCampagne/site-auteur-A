export interface LoginResponse {
    id: number;
    username: string;
    email: string;
    role: "USER" | "ADMIN";
}