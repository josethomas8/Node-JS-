var Person={name:"Jose Thomas",palce:"kozhikode",age:10,
display: function(){
    console.log(this.name)
}}

for(x in Person){
    console.log(Person[x])
}
Person.dob="8-4-2003"

Person.displayAge=function(){
    console.log(this.age)
}



console.log(Person.displayAge())