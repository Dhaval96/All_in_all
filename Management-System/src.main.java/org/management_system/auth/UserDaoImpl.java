package org.management_system.auth;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDaoImpl implements UserDao {

	@Autowired
	SessionFactory factory;

	public User save(User user) throws Exception {
		// TODO Auto-generated method stub
		Session session = factory.getCurrentSession();
		Long userId = (Long) session.save(user);

		return session.get(User.class, userId);

	}

	public List<User> Authentication(String username, String password) throws Exception {
		// TODO Auto-generated method stub
		Session session = factory.getCurrentSession();

		return session.createQuery("from User where username =:username and password =:password and status = 1")
				.setParameter("username", username).setParameter("password", password).getResultList();
	}

	public Boolean Authentication(String username) throws Exception {
		// TODO Auto-generated method stub
		Session session = factory.getCurrentSession();

		Query<User> query = session.createQuery("from User where username =:username ").setParameter("username",
				username);

		List<User> user = query.getResultList();

		if (user.isEmpty()) {
			return true;
		} else {
			return false;
		}

	}

	public List<User> getAll() throws Exception {
		// TODO Auto-generated method stub
		Session session = factory.getCurrentSession();

		return session.createQuery("from User where role=:role").setParameter("role", "user").getResultList();
	}

	public void update(boolean status, Integer userId) throws Exception {
		// TODO Auto-generated method stub
		Session session = factory.getCurrentSession();

		session.createQuery("update User set status =:status where id=:userId")
		.setParameter("status", status)
		.setParameter("userId", userId).executeUpdate();
		
		

	}
}
