package org.management_system.auth;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.json.JsonObject;
import javax.servlet.http.HttpServletRequest;

import org.management_system.common.Status;
import org.management_system.common.UtilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

@RestController
@RequestMapping("api")
@CrossOrigin(origins = "*")
public class AuthController {

	Gson gson = new Gson();

	@Autowired
	UserService service;

	ObjectMapper objectMapper = new ObjectMapper();

	@RequestMapping(value = "signup", method = RequestMethod.POST)
	public Status signup(@RequestParam("file") MultipartFile file, @RequestParam("user") String user) {

		try {

			User userdata = this.objectMapper.readValue(user, User.class);

			if (userdata != null) {

				Boolean isauthenticated = this.service.Authentication(userdata.getUsername());

				if (isauthenticated) {
					byte[] bfile = file.getBytes();
					userdata.setExtension(file.getContentType());
					userdata.setProfile(bfile);
					this.service.save(userdata);
					return new Status(HttpStatus.OK.value(), "Signup successfully", System.currentTimeMillis());
				} else {
					return new Status(HttpStatus.CONFLICT.value(), "username already exist!",
							System.currentTimeMillis());
				}
			} else {
				return new Status(HttpStatus.CONFLICT.value(), "Please enter username and password",
						System.currentTimeMillis());
			}

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return new Status(HttpStatus.CONFLICT.value(), "Signup Unsuccessfully", System.currentTimeMillis());
		}

	}

	@RequestMapping(value = "login", method = RequestMethod.POST)
	public Status login(HttpServletRequest request) {

		try {
			JsonObject json = UtilityService.convertHttpToJSON(request);
			// this.service.save(user);

			if (!json.isEmpty()) {
				List<User> isauthenticated = this.service.Authentication(json.getString("username"),
						json.getString("password"));

				if (!isauthenticated.isEmpty()) {

					Map<String, Object> result = new HashMap<String, Object>();
					result.put("user", isauthenticated.get(0));
					result.put("allow", true);
					return new Status(HttpStatus.OK.value(), "Login successfully", System.currentTimeMillis(), result);
				} else {
					return new Status(HttpStatus.NON_AUTHORITATIVE_INFORMATION.value(),
							"Please provide valid username and password", System.currentTimeMillis());
				}
			} else {
				return new Status(HttpStatus.NOT_ACCEPTABLE.value(), "Please provide username and password",
						System.currentTimeMillis());
			}

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return new Status(HttpStatus.CONFLICT.value(), "Error", System.currentTimeMillis());
		}

	}

	@RequestMapping(value = "getAll", method = RequestMethod.GET)
	public Status getAllUsers() {

		Object result = null;
		try {
			result = this.service.getAll();
			return new Status(HttpStatus.PARTIAL_CONTENT.value(), "User data", System.currentTimeMillis(), result);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return new Status(HttpStatus.CONFLICT.value(), "Error", System.currentTimeMillis());
		}

	}

	@RequestMapping(value = "update", method = RequestMethod.POST)
	public Status update(HttpServletRequest request) {

		try {

			JsonObject json = UtilityService.convertHttpToJSON(request);

			;
			this.service.update(json.getBoolean("status"), json.getInt("userId"));

			return new Status(HttpStatus.PARTIAL_CONTENT.value(), "User data", System.currentTimeMillis());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return new Status(HttpStatus.CONFLICT.value(), "Error", System.currentTimeMillis());
		}

	}
}
