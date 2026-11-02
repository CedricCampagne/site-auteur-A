import { Injectable, signal, computed } from "@angular/core";

const MESSAGE_DURATION_MS = 3800;

@Injectable({ providedIn:'root'})
export class UiStore {

    isLoading = signal(false);
    successMessage = signal<string | null>(null);
    errorMessage = signal<string | null>(null);

    private successTimer: ReturnType<typeof setTimeout> | null = null;
    private errorTimer: ReturnType<typeof setTimeout> | null = null;

    hasMessage = computed(
        () => this.successMessage() !== null || this.errorMessage() !== null,
    );

    startLoading(): void{
        this.clearMessage();
        this.isLoading.set(true);
    }

    stopLoading(): void{
        this.isLoading.set(false);
    }

    showSuccess(message: string): void {
        if (this.successTimer) clearTimeout(this.successTimer);
        this.successMessage.set(message);
        this.successTimer = setTimeout(() => {
        this.successMessage.set(null);
        this.successTimer = null;
        }, MESSAGE_DURATION_MS);
    }

    showError(message: string): void {
        if (this.errorTimer) clearTimeout(this.errorTimer);
        this.errorMessage.set(message);
        this.errorTimer = setTimeout(() => {
        this.errorMessage.set(null);
        this.errorTimer = null;
        }, MESSAGE_DURATION_MS);
    }

    clearMessage(): void {
        if (this.successTimer) clearTimeout(this.successTimer);
        if (this.errorTimer) clearTimeout(this.errorTimer);
        this.successTimer = null;
        this.errorTimer = null;
        this.successMessage.set(null);
        this.errorMessage.set(null);
    }
}