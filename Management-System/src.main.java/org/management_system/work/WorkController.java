package org.management_system.work;

import java.util.logging.Logger;

import javax.json.JsonObject;
import javax.servlet.http.HttpServletRequest;

import org.management_system.common.Status;
import org.management_system.common.UtilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

@RestController
@RequestMapping("work")
@CrossOrigin(origins = "*")
public class WorkController {

	@Autowired
	WorkService workservice;

	ObjectMapper mapper = new ObjectMapper();
	Gson gson = new Gson();

	private static final Logger LOGGER = Logger.getLogger(WorkController.class.getName());

	@RequestMapping(value = "save", method = RequestMethod.POST)
	public Status save(HttpServletRequest request) {

		try {
			JsonObject json = UtilityService.convertHttpToJSON(request);
			Object result = null;
			if (!json.isEmpty()) {
				Work work = gson.fromJson(json.toString(), Work.class);
				System.out.println(work);
				result = this.workservice.save(work);
			}
			return new Status(HttpStatus.OK.value(), "save successfully", System.currentTimeMillis(), result);

		} catch (Exception e1) {
			// TODO Auto-generated catch block
			return new Status(HttpStatus.CONFLICT.value(), "Error", System.currentTimeMillis(), null);
		}

	}

	@RequestMapping(value = "update", method = RequestMethod.PUT)
	public Status update(HttpServletRequest request) {
		Object result = null;
		try {
			JsonObject json = UtilityService.convertHttpToJSON(request);

			if (!json.isEmpty()) {
				// .. not empty continue
				Work updatedData = this.gson.fromJson(json.toString(), Work.class);

				System.out.println(updatedData);
				result = this.workservice.update(updatedData);

			}

			return new Status(HttpStatus.OK.value(), "Updated Successfully", System.currentTimeMillis(), result);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			result = null;
			e.printStackTrace();
			return new Status(HttpStatus.CONFLICT.value(), "Updated Unsuccessfully", System.currentTimeMillis(),
					result);

		}
	}

	@RequestMapping(value = "getAll", method = RequestMethod.POST)
	public Status getAll(HttpServletRequest request) {
		Object result = null;
		try {

			JsonObject json = UtilityService.convertHttpToJSON(request);
			Integer userId = json.getInt("userId");
			if (userId != null) {
				result = this.workservice.getAll(userId);
				return new Status(HttpStatus.PARTIAL_CONTENT.value(), "GetALL", System.currentTimeMillis(), result);
			} else {
				return new Status(HttpStatus.PARTIAL_CONTENT.value(), "GetALL", System.currentTimeMillis());
			}

			// result = this.workservice.getAll()
		} catch (Exception e) {
			e.printStackTrace();
			result = null;
			return new Status(HttpStatus.CONFLICT.value(), "GetALL", System.currentTimeMillis(), result);
		}

	}

	@RequestMapping(value = "get", method = RequestMethod.POST)
	public Status getWork(HttpServletRequest request) {
		Object result = null;

		try {
			JsonObject json = UtilityService.convertHttpToJSON(request);
			result = this.workservice.get(json.getInt("workId"));

			return new Status(HttpStatus.PARTIAL_CONTENT.value(), "GetALL", System.currentTimeMillis(), result);
		} catch (Exception e) {
			e.printStackTrace();
			result = null;
			return new Status(HttpStatus.CONFLICT.value(), "GetALL", System.currentTimeMillis(), result);
		}

	}

	@GetMapping("test")
	public String test(Work work1) {

		try {
			return "<h1>Hello</h1>";
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return "<h1>Erro</h1>";
		}
	}

	@RequestMapping(value = "getDashboard", method = RequestMethod.POST)
	public Status getDashBoardData(HttpServletRequest request) {
		LOGGER.info("List<Work> getAll()");
		Object result = null;
		try {

			JsonObject json = UtilityService.convertHttpToJSON(request);
			Integer userId = json.getInt("userId");
			if (userId != null) {
				result = this.workservice.getDashboarddata(userId);
				return new Status(HttpStatus.PARTIAL_CONTENT.value(), "GetALL", System.currentTimeMillis(), result);
			} else {
				return new Status(HttpStatus.PARTIAL_CONTENT.value(), "GetALL", System.currentTimeMillis());
			}

			// result = this.workservice.getAll()
		} catch (Exception e) {
			e.printStackTrace();
			result = null;
			return new Status(HttpStatus.CONFLICT.value(), "GetALL", System.currentTimeMillis(), result);
		}

	}

}
