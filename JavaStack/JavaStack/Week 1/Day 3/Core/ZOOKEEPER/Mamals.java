class Mamals{
    // create int for energy
    private int energy;
    // constractor
    public Mamals(){
        // set energy 100
        this.energy=100;
    }
    // Display 
    public int Display(){
        System.out.println(this.energy);
        return this.energy;
    }
    // getters and setters 
    public int getEnergy() {
        return energy;
    }
    //====================
    public void setEnergy(int energy) {
        this.energy = energy;
    }
}