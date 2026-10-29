import { Injectable, signal, computed } from "@angular/core";

@Injectable({ providedIn:'root'})
export class UiStore {

    isLoading = signal(false);
    successMessage = signal<string | null>(null);
    errorMessage = signal<string | null>(null);

    private loadingStartedAt = 0;
    private readonly minLoadingDuration = 1500;

    hasMessage = computed(
        () => this.successMessage() !== null || this.errorMessage() !== null,
    );

    startLoading(){
        this.loadingStartedAt = Date.now();
        this.isLoading.set(true);
    }

    stopLoading(): Promise<void> {
        const elapsed = Date.now() - this.loadingStartedAt;
        const remaining = Math.max(0, this.minLoadingDuration - elapsed);

        return new Promise((resolve) => {
            setTimeout(() => {
            this.isLoading.set(false);
            resolve();
            }, remaining);
        });
    }

    showSuccess(message: string) {
        this.successMessage.set(message);
        setTimeout(() => {
            this.successMessage.set(null);
        }, 3800);
    }

    showError(message: string) {
        this.errorMessage.set(message);
        setTimeout(() => {
            this.errorMessage.set(null);
        }, 3800);
    }

    clearMessage(){
        this.successMessage.set(null);
        this.errorMessage.set(null);
    }
}