package com.iotep.free.aspect;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;

@Configuration
@Aspect
public class SecurityAspect {
    Logger logger = LoggerFactory.getLogger(SecurityAspect.class);

    @Around("@annotation(com.iotep.free.annotation.SecurityVerify)")
    public Object verify(ProceedingJoinPoint point) throws Throwable {
        ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        HttpServletRequest request = requestAttributes.getRequest();
        String a = request.getParameter("a");
        logger.info("a================="+a);
        return point.proceed();
    }
}