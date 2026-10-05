package com.cedriccampagne.siteauteur.users.exception;

public class EmailAllreadyUsedException extends RuntimeException {
    public EmailAllreadyUsedException(String message) {
        super(message);
    }
}
