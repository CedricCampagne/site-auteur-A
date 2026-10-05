import { Injectable, signal, computed } from "@angular/core";

@Injectable({ providedIn:'root'})
export class UiStore {

    isLoading = signal(false);
    successMessage = signal<string | null>(null);
    errorMessage = signal<string | null>(null);

    hasMessage = computed(
        () => this.successMessage() !== null || this.errorMessage() !== null,
    );
    startLoading(){
        this.isLoading.set(true);
    }

    stopLoading(){
        this.isLoading.set(false);
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