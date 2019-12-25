package org.spring_annotation;

import org.springframework.beans.factory.annotation.Value;

public class SwimCouch implements Couch {

    IDependency iDependency;

    @Value("${foo.email}")
    private String email;

    @Value("${foo.name}")
    private String name;

    public SwimCouch(IDependency iDependency) {
        this.iDependency = iDependency;
    }


    public String getDailyWorkout() {
        return this.iDependency.getFortuneService();
    }

    public String getFortuneService() {
        return this.name + " " + this.email;
    }

    public String getSetterFortuneService() {
        return null;
    }
}
