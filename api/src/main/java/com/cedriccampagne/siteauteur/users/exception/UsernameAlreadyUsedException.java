package com.cedriccampagne.siteauteur.users.exception;

public class UsernameAllreadyUsedException extends RuntimeException {
    public UsernameAllreadyUsedException(String message) {
        super(message);
    }
}
