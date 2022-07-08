/* Como podemos melhorar o esse código ? 

let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "Atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Enfermeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
let pessoa5 = {
    nome = "",
    idade = 19,
    profissao = "padeiro"
}
let pessoa6 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
*/

enum Profession {
    Actor,
    Doctor,
    Policeman,
    Writer,
    Lawyer,
}

type Human = {
    name: string,
    age: number,
    profession: Profession,
}

let person1: Human = {
    name: 'Lygia',
    age: 29,
    profession: Profession .Lawyer
};

let person2: Human = {
    name: 'Robert',
    age: 19,
    profession: Profession.Doctor
};

let person3: Human = {
    name: 'Hanna',
    age: 32,
    profession: Profession.Writer
};

let person4: Human = {
    name: "Carl",
    age: 19,
    profession: Profession.Actor
};

let person5: Human = {
        name: "James",
        age: 19,
        profession: Profession.Writer
  };

let person6: Human = {
        name: "Suzie",
        age: 19,
        profession: Profession.Policeman
  }