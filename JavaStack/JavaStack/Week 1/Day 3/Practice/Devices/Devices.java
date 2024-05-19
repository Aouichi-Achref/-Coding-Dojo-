class Devices{
    private Double battery;
    public Devices(){
        this.battery=100.0;
    }
    public void Display(){
        System.out.println("Battery remaining: "+this.battery+"%");
    }
    //!getters and setters
    public Double getBattery() {
        return battery;
    }
    public void setBattery(Double battery) {
        this.battery = battery;
    }
}