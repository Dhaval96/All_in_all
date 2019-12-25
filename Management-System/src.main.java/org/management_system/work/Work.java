package org.management_system.work;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedNativeQueries;
import javax.persistence.NamedNativeQuery;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * @author dhaval
 *
 */
@Entity

@NamedNativeQueries({ @NamedNativeQuery(name = "ff", query = "select * from work", resultSetMapping = "result") })
public class Work implements Serializable {

	private static final long serialVersionUID = 1l;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // because use by mysql
	private Long id;

	@Column(nullable = false)
	private String workName;

	@Column(nullable = false)
	private String address;

	private String discription;

	@Column(nullable = false)
	private Boolean status;

	@Column(nullable = false)
	private Boolean isCompleted;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(nullable = false)
	private Date createddate;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(nullable = false)
	private Date updateddate;

	private Long userId;

	private Long amount;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getWorkName() {
		return workName;
	}

	public void setWorkName(String workName) {
		this.workName = workName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getDiscription() {
		return discription;
	}

	public void setDiscription(String discription) {
		this.discription = discription;
	}

	public Boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	public Boolean getIsCompleted() {
		return isCompleted;
	}

	public void setIsCompleted(Boolean isCompleted) {
		this.isCompleted = isCompleted;
	}

	public Date getCreateddate() {
		return createddate;
	}

	public void setCreateddate(Date createddate) {
		this.createddate = createddate;
	}

	public Date getUpdateddate() {
		return updateddate;
	}

	public void setUpdateddate(Date updateddate) {
		this.updateddate = updateddate;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Long getAmount() {
		return amount;
	}

	public void setAmount(Long amount) {
		this.amount = amount;
	}

	@Override
	public String toString() {
		return "Work [id=" + id + ", workName=" + workName + ", address=" + address + ", discription=" + discription
				+ ", status=" + status + ", isCompleted=" + isCompleted + ", createddate=" + createddate
				+ ", updateddate=" + updateddate + ", userId=" + userId + ", amount=" + amount + "]";
	}

}
