class parent1 {
    constructor(name) {
        this.name = name
    }
    display1(){
        console.log(`parent1 name is  : ${this.name}`);
        
    }
}
class parent2 {
    constructor(name) {
        this.name = name
    }
    display2(){
        console.log(`parent2 name is  : ${this.name}`);
        
    }
}
class child extends parent1{
    display3(){
        console.log(`child name is  : ${this.name}`);
    }
}
let p1 = new child("Hiren")
p1.display1()