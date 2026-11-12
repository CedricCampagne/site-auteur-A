package com.cedriccampagne.siteauteur.users.exception;

public class AdminAccountProtectedException extends RuntimeException {
    public AdminAccountProtectedException(String message) {
        super(message);
    }
}
