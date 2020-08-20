

class sample{
    samplehello(){
        console.log('This is sample Hello')
    }
}




class hello extends sample {
    constructor(num1,num2){
        super()
        this.num1=num1
        this.num2=num2

    }
    hello(){
        console.log("Hello Friends: "+(this.num1+this.num2))
    }
}

let hey=new hello(10,20)
hey.hello()
hey.samplehello()