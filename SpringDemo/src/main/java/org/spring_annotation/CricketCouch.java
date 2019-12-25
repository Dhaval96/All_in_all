package org.spring_annotation;

import org.springframework.stereotype.Component;

@Component
public class CricketCouch implements Couch {

    public String getDailyWorkout() {
        return "10 hook shots!";
    }

    public String getFortuneService() {
        return null;
    }

    public String getSetterFortuneService() {
        return null;
    }
}
