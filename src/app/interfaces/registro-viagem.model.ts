import { Funcionario } from "./funcionario.model";
import { Veiculo } from "./veiculo.model";

export interface RegistroViagem {
    id: string;
    veiculo: Veiculo;
    motorista: Funcionario;
    destino: string;
    dataSaida: string;
    status: RegistroViagemStatus;
    dataRetorno?: string;
    passageiros: string;
    criadoEm: string;
    atualizadoEm?: string;
}

export interface CriarRegistroViagem {
    placaVeiculo: string;
    funcionarioMotoristaId: string;
    destino: string;
    passageiros: string;
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