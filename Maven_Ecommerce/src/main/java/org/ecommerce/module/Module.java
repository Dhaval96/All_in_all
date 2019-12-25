package org.ecommerce.module;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Module {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String moduleName;
	private Boolean toggleIcon = false;
	private String icon;

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private Collection<SubModule> subModules = new ArrayList<SubModule>();

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getModuleName() {
		return moduleName;
	}

	public void setModuleName(String moduleName) {
		this.moduleName = moduleName;
	}

	public Boolean getToggleIcon() {
		return toggleIcon;
	}

	public void setToggleIcon(Boolean toggleIcon) {
		this.toggleIcon = toggleIcon;
	}

	public String getIcon() {
		return icon;
	}

	public void setIcon(String icon) {
		this.icon = icon;
	}

	public Collection<SubModule> getSubModules() {
		return subModules;
	}

	public void setSubModules(Collection<SubModule> subModules) {
		this.subModules = subModules;
	}

	@Override
	public String toString() {
		return "Module [id=" + id + ", moduleName=" + moduleName + ", toggleIcon=" + toggleIcon + ", icon=" + icon
				+ ", subModules=" + subModules + "]";
	}

}
