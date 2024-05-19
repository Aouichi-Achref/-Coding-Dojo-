class Bat extends Mamals{
    // cunstractor
    // private int energy;
    public Bat(){
        // this.energy=300;
        setEnergy(getEnergy()+200);
    }
    // 
    public void eatHumans(){
        System.out.println("Bat eatHumans ");
        this.setEnergy(getEnergy()+25);
    }
    //
    public void attackTown(){
        System.out.println("Bat attackTown");
        this.setEnergy(getEnergy()-100);
    } 
    // 
    public void fly(){
        System.out.println("Bat fly");
        this.setEnergy(getEnergy()-50);
    }
    // 
}

