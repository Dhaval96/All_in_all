package org.ecommerce.configuration;

import java.util.List;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.GsonHttpMessageConverter;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = { "org.ecommerce" })
public class WebConfig implements WebMvcConfigurer {

	public void configureMessageConverters(List<HttpMessageConverter<?>> converter) {
		// This is method is not mandatory for converting the data into json.
		GsonHttpMessageConverter messageConverter = new GsonHttpMessageConverter();
		Gson gson = new GsonBuilder().setPrettyPrinting().create();
		messageConverter.setGson(gson);
		converter.add(messageConverter);

	}
}
