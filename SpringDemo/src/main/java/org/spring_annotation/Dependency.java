package org.spring_annotation;

import org.springframework.stereotype.Component;

@Component
public class Dependency implements IDependency {
    public String getFortuneService() {
        return "The fortuneService is implements!!";
    }

    public String getSetterFortuneService() {
        return " getSetterFortuneService :> executed!!";
    }
}
