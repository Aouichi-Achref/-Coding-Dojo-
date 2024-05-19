class Phone extends Devices {
    public Phone(){
    }
    //!
    public void call(){
        System.out.println("you make a call ");
        setBattery(getBattery()-5);
        //! if battery become less than 10 send warning message
        if(this.getBattery()<=10){
            System.out.println("battery critical message Battery remaining: "+ this.getBattery());
        }else{
            Display();
        }
    }
    //!play
    public void play(){
        if(getBattery()>=25){
            //! if batterey more than 25 he will be able to play
            System.out.println("you play a game ");
            setBattery(getBattery()-20);
            //! if battery become less than 10 send warning message
            if(this.getBattery()<=10){
                System.out.println("battery critical message Battery remaining: "+ this.getBattery());
            }else{
                Display();
            }
        }else{
            System.out.println("you cant play battery less than 25");
            System.out.println("Go Charge Your Phone");

        }
    }
    //!charge
    public void charge(){
        System.out.println("phone charging");
        setBattery(getBattery()+50);
        Display();
    }
}
