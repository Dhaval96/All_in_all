package org.management_system.workers;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Worker implements Serializable {

	private static final long serialVersionUID = 2l;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false)
	private Long workId;

	@Column(nullable = false)
	private String workerName;

	@Column(nullable = false)
	private String workerAddress;

	@Column(nullable = false)
	private String workerType;

	@Column(nullable = false)
	private String phonenumber;

	@Column(nullable = false)
	private String gender;

	@Column(nullable = false)
	private Integer wage;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(nullable = false)
	private Date birthdate;

	private Integer lended_money;
	private String note;

	@Column(nullable = false)
	private Boolean status;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(nullable = false)
	private Date createdDate;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(nullable = false)
	private Date updatedDate;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getWorkId() {
		return workId;
	}

	public void setWorkId(Long workId) {
		this.workId = workId;
	}

	public String getWorkerName() {
		return workerName;
	}

	public void setWorkerName(String workerName) {
		this.workerName = workerName;
	}

	public String getWorkerAddress() {
		return workerAddress;
	}

	public void setWorkerAddress(String workerAddress) {
		this.workerAddress = workerAddress;
	}

	public String getWorkerType() {
		return workerType;
	}

	public void setWorkerType(String workerType) {
		this.workerType = workerType;
	}

	public String getPhonenumber() {
		return phonenumber;
	}

	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Integer getWage() {
		return wage;
	}

	public void setWage(Integer wage) {
		this.wage = wage;
	}

	public Date getBirthdate() {
		return birthdate;
	}

	public void setBirthdate(Date birthdate) {
		this.birthdate = birthdate;
	}

	public Integer getLended_money() {
		return lended_money;
	}

	public void setLended_money(Integer lended_money) {
		this.lended_money = lended_money;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public Boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Date getUpdatedDate() {
		return updatedDate;
	}

	public void setUpdatedDate(Date updatedDate) {
		this.updatedDate = updatedDate;
	}

	@Override
	public String toString() {
		return "Worker [id=" + id + ", workId=" + workId + ", workerName=" + workerName + ", workerAddress="
				+ workerAddress + ", workerType=" + workerType + ", phonenumber=" + phonenumber + ", gender=" + gender
				+ ", wage=" + wage + ", birthdate=" + birthdate + ", lended_money=" + lended_money + ", note=" + note
				+ ", status=" + status + ", createdDate=" + createdDate + ", updatedDate=" + updatedDate + "]";
	}

}
