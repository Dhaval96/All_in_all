package org.management_system.auth;

import java.util.List;

public interface UserService {

	public User save(User user) throws Exception;

	public List<User> Authentication(String username, String password) throws Exception;

	public Boolean Authentication(String username) throws Exception;

	public List<User> getAll() throws Exception;

	public void update(boolean status, Integer userId) throws Exception;
}
