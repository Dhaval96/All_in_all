public class BaseBallCouch implements Couch {

    private IDependencyInjection iDependencyInjection;
    private IDependencyInjection iDependencyInjection_1;

    private String name;

    private String email;

    public BaseBallCouch(IDependencyInjection iDependencyInjection) {
        this.iDependencyInjection = iDependencyInjection;
    }


    public void setSetterDemo(IDependencyInjection iDependencyInjection) {
        System.out.println("The setter example!!");
        this.iDependencyInjection_1 = iDependencyInjection;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getBaseballCouchName() {
        return "Hey this is Dhaval!!";
    }

    public String getConstructorBasedData() {
        return this.iDependencyInjection.getDataUsingConstructor();
    }

    public String getSetterBasedData() {
        return this.iDependencyInjection_1.getDataUsingSetter();
    }

    public String getName() {
        return this.name;
    }

    public String getEmail() {
        return this.email;
    }

    public void doMyStartUpStuff() {
        System.out.println("DoStartUpMethod is executed!!");
    }

    public void doMyDestroyStuff() {
        System.out.println("DoMyDestroyStuff is executed!!");
    }
}
