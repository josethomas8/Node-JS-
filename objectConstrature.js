function Person(name,age,place){
    this.name=name
    this.age=age
    this.place=place
    this.display=function(){
        console.log("Name: "+this.name+" age: "+this.age+" place: "+this.place)
    }
}


var jose=new Person("Jose",20,"Calicut")
var thomas=new Person("Thomas",33,"Kozhikode")


jose.display()
thomas.display()