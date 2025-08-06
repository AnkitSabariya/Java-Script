class parent {
    constructor(name) {
        this.name = name
    }
    display1(){
        console.log(`parent name is  : ${this.name}`);
        
    }
}
class child1 extends parent{
    display2(){
        console.log(`child1 name is  : ${this.name}`);
    }
}
class child2 extends child1{
    display3(){
        console.log(`child2 name is  : ${this.name}`);
    }
}
let a = new child2("Hiren")
a.display3()