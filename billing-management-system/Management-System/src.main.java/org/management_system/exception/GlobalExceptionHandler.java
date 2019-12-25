package org.management_system.exception;

import org.management_system.common.Status;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

	@Autowired
	CustomizeExceptionService service;

	@ExceptionHandler
	public ResponseEntity<Status> handleException(Exception exe) {

		Status status = new Status();

		status.setStatus(HttpStatus.CONFLICT.value());
		status.setMessage(exe.getMessage());
		status.setTimeStamp(System.currentTimeMillis());
		status.setData(null);

		try {
			this.service.save(new CustomizeException(status.getStatus(), status.getMessage(), status.getTimeStamp()));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return new ResponseEntity<Status>(status, HttpStatus.CONFLICT);

	}
}
