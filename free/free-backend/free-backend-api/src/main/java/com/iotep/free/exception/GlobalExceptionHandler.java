package com.iotep.free.exception;

import com.iotep.free.entity.ErrorMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

/**
 * @ControllerAdvice
 * @ResponseBody
 */
@ControllerAdvice
public class GlobalExceptionHandler {
    private final static Logger log = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @ExceptionHandler(SessionNotFoundException.class)
    @ResponseBody
    public ErrorMessage<String> sessionNotFoundExceptionHandler(HttpServletRequest request, SessionNotFoundException exception) throws Exception {
        return handleErrorInfo(request, exception.getMessage(), exception);
    }

    @ExceptionHandler(NullOrEmptyException.class)
    @ResponseBody
    public ErrorMessage<String> nullOrEmptyExceptionHandler(HttpServletRequest request, NullOrEmptyException exception) throws Exception {
        return handleErrorInfo(request, exception.getMessage(), exception);
    }

    @ExceptionHandler(IllegalPropertiesException.class)
    @ResponseBody
    public ErrorMessage<String> illegalPropExceptionHandler(HttpServletRequest request, IllegalPropertiesException exception) throws Exception {
        return handleErrorInfo(request, exception.getMessage(), exception);
    }

    @ExceptionHandler(Exception.class)
    @ResponseBody
    public ErrorMessage<String> exceptionHandler(HttpServletRequest request, Exception exception) throws Exception {
        return handleErrorInfo(request, exception.getMessage(), exception);
    }

    private ErrorMessage<String> handleErrorInfo(HttpServletRequest request, String message, Exception exception) {
        ErrorMessage<String> errorMessage = new ErrorMessage<>();
        errorMessage.setMessage(message);
        errorMessage.setCode(ErrorMessage.ERROR);
        errorMessage.setData(message);
        errorMessage.setUrl(request.getRequestURL().toString());
        return errorMessage;
    }
}