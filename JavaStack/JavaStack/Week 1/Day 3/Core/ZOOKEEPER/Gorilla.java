class Gorilla extends Mamals{
    // constractor
    public Gorilla(){
    }
    //throwSomething()decrease the Gorilla's energy by 5 and print out a message indicating that the Gorilla has thrown something
    public void throwSomething(){
        System.out.println("a message indicating that the Gorilla has thrown something");
        this.setEnergy(getEnergy()-5);
    }
    // climb() - decrease the Gorilla's energy by 10 and print out a message indicating the Gorilla has climbed a tree
    public void climb(){
        System.out.println("a message indicating that the Gorilla has climbed a tree");
        this.setEnergy(getEnergy()-10);
    }
    // eatBananas() - increase the Gorilla's energy by 10 and print out a message indicating the Gorilla's satisfaction
    public void eatBananas(){
        System.out.println("a message indicating the Gorilla satisfaction");
        this.setEnergy(getEnergy()+10);
    }
}
