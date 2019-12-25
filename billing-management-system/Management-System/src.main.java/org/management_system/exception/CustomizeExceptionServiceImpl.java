package org.management_system.exception;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public class CustomizeExceptionServiceImpl implements CustomizeExceptionService {

	@Autowired
	SessionFactory sf;

	@Transactional
	public void save(CustomizeException exception) throws Exception {
		// TODO Auto-generated method stub

		Session session = sf.getCurrentSession();
		session.save(exception);
	}

}
