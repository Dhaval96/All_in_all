package org.spring_annotation;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class noXmlSpring_Application {

    public static void main(String[] args) {

        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(noXmlSpringConfig.class);

        // Couch myCouch = context.getBean("myCouch", Couch.class);
        Couch mySwim = context.getBean("mySwimCouch", Couch.class);

        System.out.println(mySwim.getDailyWorkout());

        System.out.println(mySwim.getFortuneService());
//        System.out.println(myCouch.getDailyWorkout());
    }

}
