export interface Veiculo {
    id: string;
    placa: string;
    modelo: string;
    status: VeiculoStatus;
    criadoEm: String;
    atualizadoEm?: String;
}

export interface CriarVeiculo {
    placa: string;
    modelo: string;
}

export interface AtualizarVeiculo {
    placa: string;
}


export enum VeiculoStatus {
    NO_PATIO = 'NO_PATIO',
    EM_VIAGEM = 'EM_VIAGEM',
}

export const veiculoStatusLabels: Record<VeiculoStatus, string> = {
    [VeiculoStatus.NO_PATIO]: 'No Pátio',
    [VeiculoStatus.EM_VIAGEM]: 'Em Viagem',
};

export interface RespostaPaginadaVeiculos {
    content: Veiculo[];
    page: {
        size: number;
        number: number;
        totalElements: number;
        totalPages: number;
    }
}