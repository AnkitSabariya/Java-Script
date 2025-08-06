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
class child2 extends parent{
    display3(){
        console.log(`child2 name is  : ${this.name}`);
    }
}
let p1 = new parent("Hiren")
p1.display1()

let c1 = new child1("chagan")
c1.display2()

let c1 = new child2("chagan")
c1.display3()
