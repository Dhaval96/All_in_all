package org.management_system.workers;

import javax.json.JsonObject;
import javax.servlet.http.HttpServletRequest;

import org.management_system.common.Status;
import org.management_system.common.UtilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

@RestController
@RequestMapping("api")
@CrossOrigin("*")
public class WorkerController {

	Gson gson = new Gson();

	@Autowired
	WorkerService workerService;

	@RequestMapping(value = "worker", method = RequestMethod.POST)
	public Status save(HttpServletRequest request) {

		try {
			JsonObject json = UtilityService.convertHttpToJSON(request);

			if (!json.isEmpty()) {

				Worker worker = gson.fromJson(json.get("worker").toString(), Worker.class);

				this.workerService.save(worker);

			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
//			return new Status(HttpStatus.CONFLICT.value(), "Unsuccessfully save", System.currentTimeMillis());
		}
		return new Status(HttpStatus.OK.value(), "Successfully save", System.currentTimeMillis());

	}

	@RequestMapping(value = "worker/getAll", method = RequestMethod.POST)
	public Status getAll(HttpServletRequest request) {

		Object result = null;
		try {
			JsonObject json = UtilityService.convertHttpToJSON(request);

			if (!json.isEmpty()) {

				Integer workId = json.getInt("workId");
				result = this.workerService.getAll(workId);

			}
			return new Status(HttpStatus.PARTIAL_CONTENT.value(), "GetALL", System.currentTimeMillis(), result);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return new Status(HttpStatus.CONFLICT.value(), "Unsuccessfully save", System.currentTimeMillis());
		}

	}

	@RequestMapping(value = "worker/getWorker", method = RequestMethod.POST)
	public Object getWorker(HttpServletRequest request) {

		Object result = null;

		JsonObject json;
		try {
			json = UtilityService.convertHttpToJSON(request);

			if (!json.isEmpty()) {
				Integer workerId = json.getInt("workerId");

				System.out.println(workerId);
				result = this.workerService.getWorker(workerId);
			}
			return new Status(HttpStatus.PARTIAL_CONTENT.value(), "GetALL", System.currentTimeMillis(), result);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return new Status(HttpStatus.CONFLICT.value(), "Unsuccessfully save", System.currentTimeMillis());
		}
	}
}
