package org.spring_annotation;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class annotation_application {
    public static void main(String[] args) {
        // load the config xml file.
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("annotation_spring-config.xml");
        //
        Couch myCouch = context.getBean("myCouch", Couch.class);

        //  default way to get he component id;

        Couch defaultIdCouch = context.getBean("cricketCouch", Couch.class);

        System.out.println("Default Id  =>" + defaultIdCouch.getDailyWorkout());

        System.out.println("Coustomize id =>" + myCouch.getDailyWorkout());

        System.out.println(" Constructor Dependency =>" + myCouch.getFortuneService());

        System.out.println(" setter dependency => " + myCouch.getSetterFortuneService());

        context.close();
    }
}
