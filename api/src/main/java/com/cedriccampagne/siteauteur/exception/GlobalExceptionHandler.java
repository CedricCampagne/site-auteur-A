package com.cedriccampagne.siteauteur.exception;

import com.cedriccampagne.siteauteur.auth.exception.InvalidCredentialsException;
import com.cedriccampagne.siteauteur.books.exception.BookNotFoundException;

import com.cedriccampagne.siteauteur.chronicles.exception.ChronicleNotFoundException;
import com.cedriccampagne.siteauteur.users.exception.EmailAlreadyUsedException;
import com.cedriccampagne.siteauteur.users.exception.UsernameAlreadyUsedException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(BookNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleBookNotFound(BookNotFoundException exception){
        ErrorResponse error = new ErrorResponse(
                exception.getMessage(),
                HttpStatus.NOT_FOUND.value(),
                LocalDateTime.now(),
                null
        );

        return  ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }

    @ExceptionHandler(ChronicleNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleChronicleNotFoundException(ChronicleNotFoundException exception) {
        ErrorResponse error = new ErrorResponse(
                exception.getMessage(),
                HttpStatus.NOT_FOUND.value(),
                LocalDateTime.now(),
                null
        );

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }

    @ExceptionHandler(EmailAlreadyUsedException.class)
    public ResponseEntity<ErrorResponse> handleEmailAlreadyUsedException(
            EmailAlreadyUsedException exception
    ){
        ErrorResponse error = new ErrorResponse(
                exception.getMessage(),
                HttpStatus.CONFLICT.value(),
                LocalDateTime.now(),
                null
        );

        return  ResponseEntity.status(HttpStatus.CONFLICT).body(error);
    }

    @ExceptionHandler(UsernameAlreadyUsedException.class)
    public ResponseEntity<ErrorResponse> handleUsernameAlreadyUsedException(
            UsernameAlreadyUsedException exception
    ){
        ErrorResponse error = new ErrorResponse(
                exception.getMessage(),
                HttpStatus.CONFLICT.value(),
                LocalDateTime.now(),
                null
        );

        return  ResponseEntity.status(HttpStatus.CONFLICT).body(error);
    }

    @ExceptionHandler(InvalidCredentialsException.class)
    public ResponseEntity<ErrorResponse> handleInvalidCredentialsException(
            InvalidCredentialsException exception
    ) {
        ErrorResponse error = new ErrorResponse(
                exception.getMessage(),
                HttpStatus.UNAUTHORIZED.value(),
                LocalDateTime.now(),
                null
        );

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleMethodArgumentNotValid(
            MethodArgumentNotValidException exception
    ){
        System.out.println(">>> HANDLER VALIDATION APPELÉ");

        Map<String, List<String>> errors = exception.getBindingResult()
                .getFieldErrors()
                .stream()
                .collect(Collectors.groupingBy(
                        FieldError::getField,
                        Collectors.mapping(
                                FieldError::getDefaultMessage,
                                Collectors.toList()
                        )
                ));

                ErrorResponse error = new ErrorResponse(
                        "Données invalides",
                        HttpStatus.BAD_REQUEST.value(),
                        LocalDateTime.now(),
                        errors
                );

        return  ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
    }
}
