package org.ecommerce.module;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class SubModule {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String subModule;
	private String routerLink;
	private String icon;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSubModule() {
		return subModule;
	}

	public void setSubModule(String subModule) {
		this.subModule = subModule;
	}

	public String getRouterLink() {
		return routerLink;
	}

	public void setRouterLink(String routerLink) {
		this.routerLink = routerLink;
	}

	public String getIcon() {
		return icon;
	}

	public void setIcon(String icon) {
		this.icon = icon;
	}

	@Override
	public String toString() {
		return "SubModule [id=" + id + ", subModule=" + subModule + ", routerLink=" + routerLink + ", icon=" + icon
				+ "]";
	}

}
