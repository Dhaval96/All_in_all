package org.spring_annotation;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
//@ComponentScan("org.spring_annotation")
// this is pure way to congfig the spring...
@PropertySource("classpath:spring.properties")
public class noXmlSpringConfig {

    // defining  a method for our sad fortune service.
    @Bean
    public IDependency sadFortuneService() {
        return new SadDependency();
    }

    // define a method for a swim couch And inject dependency

    @Bean
    public Couch mySwimCouch() {
        return new SwimCouch(sadFortuneService());
    }
}
