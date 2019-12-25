package org.ecommerce.configuration;

import static org.hibernate.cfg.AvailableSettings.C3P0_ACQUIRE_INCREMENT;
import static org.hibernate.cfg.AvailableSettings.C3P0_MAX_SIZE;
import static org.hibernate.cfg.AvailableSettings.C3P0_MAX_STATEMENTS;
import static org.hibernate.cfg.AvailableSettings.C3P0_MIN_SIZE;
import static org.hibernate.cfg.AvailableSettings.C3P0_TIMEOUT;
import static org.hibernate.cfg.AvailableSettings.DRIVER;
import static org.hibernate.cfg.AvailableSettings.HBM2DDL_AUTO;
import static org.hibernate.cfg.AvailableSettings.PASS;
import static org.hibernate.cfg.AvailableSettings.SHOW_SQL;
import static org.hibernate.cfg.AvailableSettings.URL;
import static org.hibernate.cfg.AvailableSettings.USER;

import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ComponentScans;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@PropertySource("classpath:db.properties")
@EnableTransactionManagement
@ComponentScans(value = { @ComponentScan("org.ecommerce") })
public class AppConfig {

	@Autowired
	private Environment env;

	@Bean
	public LocalSessionFactoryBean getSessionFactory() {
		LocalSessionFactoryBean factoryBean = new LocalSessionFactoryBean();
		Properties properties = new Properties();
		// setting jdbc properties
		properties.put(DRIVER, env.getProperty("mysql.driver"));
		properties.put(USER, env.getProperty("mysql.user"));
		properties.put(URL, env.getProperty("mysql.url"));
		properties.put(PASS, env.getProperty("mysql.password"));

		/* hibernate */
		properties.put(SHOW_SQL, env.getProperty("hibernate.show_sql"));
		properties.put(HBM2DDL_AUTO, env.getProperty("hibernate.hbm2ddl.auto"));

		properties.put(C3P0_MIN_SIZE, env.getProperty("hibernate.c3p0.min_size"));
		properties.put(C3P0_MAX_SIZE, env.getProperty("hibernate.c3p0.max_size"));
		properties.put(C3P0_ACQUIRE_INCREMENT, env.getProperty("hibernate.c3p0.acquire_increment"));
		properties.put(C3P0_TIMEOUT, env.getProperty("hibernate.c3p0.timeout"));
		properties.put(C3P0_MAX_STATEMENTS, env.getProperty("hibernate.c3p0.max_statements"));

		factoryBean.setHibernateProperties(properties);
		factoryBean.setPackagesToScan("org.ecommerce");
		return factoryBean;
	}

	@Bean
	public HibernateTransactionManager getTransactionManager() {
		HibernateTransactionManager transactionManager = new HibernateTransactionManager();
		transactionManager.setSessionFactory(getSessionFactory().getObject());
		return transactionManager;
	}

}
