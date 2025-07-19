import { Pipe, PipeTransform } from '@angular/core';
import { VeiculoStatus } from '../../interfaces/veiculo.model';

@Pipe({
  name: 'veiculoStatus'
})
export class VeiculoStatusPipe implements PipeTransform {

  transform(status: VeiculoStatus): string {
    if (status === VeiculoStatus.NO_PATIO) {
      return 'No Pátio';
    } else {
      return 'Em Viagem';
    }
  }

}
