package org.spring_annotation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

@Component("myCouch")
@Scope("singleton") // use to define the scope of the bean
public class BaseBallCouch implements Couch {


    @Autowired
    @Qualifier("dependency")
    IDependency iDependency;

    public BaseBallCouch() {
    }

    // Contructor injection
//    @Autowired
//    public BaseBallCouch(IDependency iDependency) {
//        this.iDependency = iDependency;
//    }

    // Setter injection !!
//    @Autowired
//    public void setiDependency(IDependency iDependency) {
//        this.iDependency = iDependency;
//    }

    public String getDailyWorkout() {
        return "Today schudule to run 10km";
    }

    public String getFortuneService() {
        return this.iDependency.getFortuneService();
    }

    public String getSetterFortuneService() {
//        System.out.println();
        return this.iDependency.getSetterFortuneService();
    }


    @PostConstruct
    public void doMyStartUpStuff() {
        System.out.println("doMyStuff is execute!!");
    }

    @PreDestroy
    public void doMyDestroyStuff() {
        System.out.println("doMyDestroyStuff()");
    }
}
