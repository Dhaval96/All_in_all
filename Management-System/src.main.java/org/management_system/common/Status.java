package org.management_system.common;

public class Status {

	private int status;
	private String message;
	private Long timeStamp;
	private Object data;

	public Status() {
	}

	public Status(int status, String message, Long timeStamp) {
		super();
		this.status = status;
		this.message = message;
		this.timeStamp = timeStamp;
	}

	public Status(int status, String message, Long timeStamp, Object data) {
		super();
		this.status = status;
		this.message = message;
		this.timeStamp = timeStamp;
		this.data = data;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Long getTimeStamp() {
		return timeStamp;
	}

	public void setTimeStamp(Long timeStamp) {
		this.timeStamp = timeStamp;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}

}
