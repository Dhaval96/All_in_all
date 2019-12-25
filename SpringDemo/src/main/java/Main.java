import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {

    public static void main(String[] args) {
        System.out.println("Dhaval!!");

        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("spring-config.xml");
        Couch myCouch = context.getBean("myCouch", Couch.class);
        System.out.println(myCouch.getBaseballCouchName());
        System.out.println("DI ex of constructor:" + myCouch.getConstructorBasedData());

        System.out.println("DI ex of SetterMEthod" + myCouch.getSetterBasedData());
        System.out.println(myCouch.getName());

        System.out.println(myCouch.getEmail());
    }
}
