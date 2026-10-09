export interface CurrentUserResponse {
    id: number;
    username: string;
    email: string;
    role: "USER" | "ADMIN";
}