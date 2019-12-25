package org.management_system.auth;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	UserDao userDao;

	public User save(User user) throws Exception {
		// TODO Auto-generated method stub

		return this.userDao.save(user);

	}

	public List<User> Authentication(String username, String password) throws Exception {
		// TODO Auto-generated method stub
		return this.userDao.Authentication(username, password);
	}

	public Boolean Authentication(String username) throws Exception {
		// TODO Auto-generated method stub
		return this.userDao.Authentication(username);
	}

	public List<User> getAll() throws Exception {
		// TODO Auto-generated method stub
		return this.userDao.getAll();
	}

	public void update(boolean status, Integer userId) throws Exception {
		// TODO Auto-generated method stub
		this.userDao.update(status, userId);
	}

}
