import {v4} from 'uuid'

type TPacientes = {
    nome: string
    idade: number
    cpf: number
    endereço: string
    telefone: number
}

export default class Pacientes{
    readonly id: string
    nome: string
    idade: number
    cpf: number
    endereço:string
    telefone: number

    constructor(pacientes: TPacientes){

    this.id = this.gerarId()
    this.nome = pacientes.nome
    this.idade = pacientes.idade
    this.cpf = pacientes.cpf
    this.endereço = pacientes.endereço
    this.telefone = pacientes.telefone


    }

    private gerarId(): string{
        return v4()
    }

}



