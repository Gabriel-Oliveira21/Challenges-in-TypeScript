/* Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 674312;
employee.name = "Steve";
*/

// Resposta 1
const funcionario = {
    code: 674312,
    name: 'Steve'
};

// Resposta 2
const funcionario2: {code: number, name: string} = {
    code: 674312,
    name: 'Steve'
}

// Respostas 3 e 4
interface Funcionario {  
    code: number,
    name: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.code = 674312;
funcionarioObj.name = 'Steve';

const funcionarioObj2: Funcionario = {
    code: 674312,
    name: 'Steve'
}
