package org.management_system.common;

import java.io.BufferedReader;
import java.io.InputStreamReader;

import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonReader;
import javax.servlet.http.HttpServletRequest;

public class UtilityService {

	public static JsonObject convertHttpToJSON(HttpServletRequest request) throws Exception {
//
		BufferedReader in = new BufferedReader(new InputStreamReader(request.getInputStream()));
		JsonReader reader = Json.createReader(in);
		return reader.readObject();

//		final StringBuilder builder = new StringBuilder();
//		BufferedReader reader = request.getReader();
//		try {
//			if (reader == null) {
//				// logger.debug("Request body could not be read because it's empty.");
//				return null;
//			}
//			String line;
//			while ((line = reader.readLine()) != null) {
//				builder.append(line);
//			}
//			return builder.toString();
//		} catch (final Exception e) {
//			// logger.trace("Could not obtain the saml request body from the http request",
//			// e);
//			return null;
//		}
	}
}
