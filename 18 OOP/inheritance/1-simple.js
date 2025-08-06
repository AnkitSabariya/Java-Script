class teacher {
    constructor(name) {
        this.name = name
    }
    display1(){
        console.log(`Teacher name is  : ${this.name}`);
        
    }
}
class student extends teacher{
    display2(){
        console.log(`Student name is  : ${this.name}`);
    }
}
let a = new student("ladies")
a.display1() 