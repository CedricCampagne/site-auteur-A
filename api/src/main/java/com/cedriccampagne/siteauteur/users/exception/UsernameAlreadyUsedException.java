package com.cedriccampagne.siteauteur.users.exception;

public class UsernameAlreadyUsedException extends RuntimeException {
    public UsernameAlreadyUsedException(String message) {
        super(message);
    }
}
