package org.spring_annotation;

public class SadDependency implements IDependency {


    public String getFortuneService() {
        return "Today taskt to hit 1000 puch'up!";
    }

    public String getSetterFortuneService() {
        return null;
    }
}
