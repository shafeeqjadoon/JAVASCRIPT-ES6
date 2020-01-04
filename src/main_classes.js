
                                  /////////////////
                                  //    classes  //
                                  /////////////////





class User{
  constructor(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
    //this.register();                 //can call a function from another function within the class
  }
  static countUsers(){                 //static method can be used without instantiating
    console.log("the most users registered can be upto 50");//the class;same old concept of c++
  }
  register(){
    console.log(this.username + "is now registered");
  }
}

//let bob = new User("bob","bob@email.com","12345");
//bob.register();


//User.countUsers();
class Member extends User{
  constructor(username, email, password, memberPackage){
    super(username,email,password);
    this.memberPackage = memberPackage;
  }
  getPackage(){
    console.log(this.username + " is subscribed to "+this.memberPackage+" package");
  }
}

let mike = new Member("bob","bob@email.com","12345","standart");
mike.register();
mike.getPackage();
