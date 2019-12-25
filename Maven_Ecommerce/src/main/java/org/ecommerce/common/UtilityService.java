package org.ecommerce.common;

import java.io.BufferedReader;
import java.io.InputStreamReader;

import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonReader;
import javax.servlet.http.HttpServletRequest;

public class UtilityService {

	public static JsonObject convertHttpToJSON(HttpServletRequest request) throws Exception {

		BufferedReader in = new BufferedReader(new InputStreamReader(request.getInputStream()));
		JsonReader reader = Json.createReader(in);
		return reader.readObject();
	}

}
