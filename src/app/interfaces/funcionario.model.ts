export interface Funcionario {
    id: string;
    nome: string;
    cnh: string;
    criadoEm: string;
    atualizadoEm?: string;
}

export interface CriarFuncionario {
    nome: string;
    cnh: string;
}

export interface AtualizarFuncionario {
    nome?: string;
    cnh?: string;
}