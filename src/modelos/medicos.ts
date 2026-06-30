import { v4 as uuidv4 } from 'uuid'

type TMedicos = {
    nome: string
    especialidade: string
 }


export default class Medicos {
   readonly id: string
    nome: string
    especialidade: string

    constructor(medicos: TMedicos){
        this.id = this.gerarId()
        this.nome = medicos.nome
        this.especialidade =  medicos.especialidade
    }

    private gerarId(): string{
        return uuidv4()

    }

}

