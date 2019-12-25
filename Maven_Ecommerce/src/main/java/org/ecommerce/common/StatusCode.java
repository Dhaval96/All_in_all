package org.ecommerce.common;

public class StatusCode {

	private int id;
	private Integer code;
	private String discription;
	private Object data;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Integer getCode() {
		return code;
	}

	public void setCode(Integer code) {
		this.code = code;
	}

	public String getDiscription() {
		return discription;
	}

	public void setDiscription(String discription) {
		this.discription = discription;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}

	@Override
	public String toString() {
		return "StatusCode [id=" + id + ", code=" + code + ", discription=" + discription + ", data=" + data + "]";
	}

	public StatusCode() {

	}

	public StatusCode(int id, Integer code, String discription, Object data) {
		super();
		this.id = id;
		this.code = code;
		this.discription = discription;
		this.data = data;
	}

}
