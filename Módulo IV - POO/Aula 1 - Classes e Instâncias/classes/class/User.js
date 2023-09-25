class User {

    constructor(fullname, email, password){
      this.fullname = fullname;
      this.email = email;
      this.password = password;
    }
  
    login(email, password){
      console.log(email == this.email && password == this.password ? "Login bem-sucedido" : "E-mail e/ou Senha incorreto(s)");
    }
  }

  module.exports = User;