package org.ecommerce.module;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository

public class ModuleRepositoryImpl implements ModuleRepository {

	@Autowired
	SessionFactory sessionfactory;

	@Transactional
	public void save(Module module) throws Exception {
		// TODO Auto-generated method stub
		Session session = sessionfactory.openSession();
		session.beginTransaction();
		session.saveOrUpdate(module);
		session.getTransaction().commit();
		session.close();
	}

	public List<Module> getAll() throws Exception {

		Session session = sessionfactory.openSession();
		session.beginTransaction();

		Query<Module> query = session.createQuery("from Module");

		List<Module> modules = query.getResultList();
		session.getTransaction().commit();

		session.close();
		return modules;

	}

}
