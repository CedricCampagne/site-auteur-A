export interface AdminChronicleCreateRequest {
        title: string;
        quote: string;
        summary: string;
        content: string;
        coverUrl: string;    
        publishedAt: string | null;
        isActive: boolean;
}