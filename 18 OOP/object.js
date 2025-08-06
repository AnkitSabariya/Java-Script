let object = {
    name  : "Ankit",
    surname  : "Sabariya",
    job : function temp(params) {
        console.log(`Im A ${this.name}`);
        
    }
  }
  object.job()