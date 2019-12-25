package org.management_system.aspect;

import java.util.logging.Logger;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class Aspects_Of_Project {

	private static final Logger logger = Logger.getLogger(Aspects_Of_Project.class.getName());

	@Before("execution( * org.management_system.*.*(..))")
	public void executingBeforeEveryMethod(JoinPoint joinPoint) {

		String method = joinPoint.getSignature().toShortString();
		System.out.println("=>>> ");
	}

	
	
	
}
