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
    }

    showError(message: string) {
        this.errorMessage.set(message);
    }

    clearMessage(){
        this.successMessage.set(null);
        this.errorMessage.set(null);
    }
}