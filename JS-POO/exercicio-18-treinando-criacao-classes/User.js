class User {
  constructor(fullname, email, password){
    this.fullname = fullname
    this.email = email
    this.password = password
  }

  login(email, password){
    if (this.email === email && this.password === password){
      console.log("Login realizado com sucesso!")
    } else{
      console.log("Falha ao fazer login! Email ou senha incorretos")
    }
  }
}

const bioca = new User("Bioca Pirez", "bioca@gmail.com", "12345")

bioca.login("bioca@gmail.com", "12345")