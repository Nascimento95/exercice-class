class Car {
    constructor(brand, speed){
        this.brand = brand;
        this.speed = speed;
        
    }
    accelerate(num){
        this.speed += num;
    }
    brake (brakup){
        this.speed -= brakup
    }
    describe(){
        console.log(`${this.brand} running at ${this.speed}km/h`);
    }
}

const myCarFord = new Car("ford",0)
myCarFord.accelerate(50)
myCarFord.brake(20)
myCarFord.describe()
console.log(myCarFord);


const myCarMerco = new Car("mercedes",0)
myCarMerco.accelerate(150)
myCarMerco.brake(100)
myCarMerco.describe()
console.log(myCarMerco);


// class tv 
class Tv {
    constructor(brand, channel, volume){
        this.brand = brand;
        this.channel = channel;
        this.volume = volume;
    }
    volumUp(up){
        this.volume += up
        if(this.volume >= 100){
            this.volume  = 100
        }
        
    }
    volumDown (down){
        this.volume -= down
        if(this.volume <= 0){
            this.volume = 0
        } 
    }
    changeChannel(chan){
        this.channel = chan
        if(this.channel >= 50){
            this.channel = 50
        } else if(this.channel <= 0){
            this.channel = 0
        }
         
    }
    describeTv(){
        console.log(`la marque est ${this.brand} nous somme sur la chaine ${this.channel} et le volume est de ${this.volume}`);
    }
    reset(){
        this.channel = 1
        this.volume = 50
    }
}
const myTv = new Tv("Lg", 1, 50)
myTv.volumUp(50)
myTv.describeTv()
myTv.volumDown (20)
myTv.describeTv()
myTv.changeChannel(10)
myTv.describeTv()
// myTv.reset(channel,volum)
console.log(myTv)