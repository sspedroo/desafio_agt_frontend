import { Funcionario } from "./funcionario.model";
import { Veiculo } from "./veiculo.model";

export interface RegistroViagem {
    id: string;
    veiculo: Veiculo;
    motorista: Funcionario;
    destino: String;
    dataSaida: String;
    status: RegistroViagemStatus;
    dataRetorno?: String;
    passageiros: String[];
    criadoEm: String;
    atualizadoEm?: String;
}

export interface CriarRegistroViagem {
    placaVeiculo: string;
    funcionarioMotoristaId: string;
    destino: String;
    passageiros: String[];
}

export interface FinalizarRegistroViagem {
    placaVeiculo: string;
}

export enum RegistroViagemStatus {
    ABERTO = 'ABERTO',
    FINALIZADO = 'FINALIZADO',
}

export const RegistroViagemStatusLabels: Record<RegistroViagemStatus, string> = {
    [RegistroViagemStatus.ABERTO]: 'Aberto',
    [RegistroViagemStatus.FINALIZADO]: 'Finalizado',
};