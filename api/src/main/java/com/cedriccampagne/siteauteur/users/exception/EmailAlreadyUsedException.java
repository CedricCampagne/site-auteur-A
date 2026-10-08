package com.cedriccampagne.siteauteur.users.exception;

public class EmailAlreadyUsedException extends RuntimeException {
    public EmailAlreadyUsedException(String message) {
        super(message);
    }
}
