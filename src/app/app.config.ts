import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import Material from '@primeng/themes/material';


import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideHttpClient(),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      ripple: true,
      theme: {
        preset: Material,
        options: {
          darkModeSelector: '.my-app-dark',
        }
      },
      translation: {
        accept: 'Aceitar',
        reject: 'Rejeitar',
        after: 'Depois',
        before: 'Antes',
        cancel: 'Cancelar',
        am: 'AM',
        pm: 'PM',
        clear: 'Limpar',
        choose: 'Escolher',
        apply: 'Aplicar',
        chooseDate: 'Escolher Data',
        chooseMonth: 'Escolher Mês',
        chooseYear: 'Escolher Ano',
        contains: 'Contém',
        dateAfter: 'Data Depois',
        dateBefore: 'Data Antes',
        dateFormat: 'dd/mm/yy',
        dateIs: 'Data é',
        dateIsNot: 'Data não é',
        dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
        dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
        dayNamesShort: [],
        emptyFilterMessage: 'Nenhum resultado encontrado',
        emptyMessage: 'Nenhum item encontrado',
        emptySearchMessage: 'Nenhum resultado encontrado',
        emptySelectionMessage: 'Nenhum item selecionado',
        endsWith: 'Termina com',
        equals: 'Igual a',
        fileChosenMessage: 'Arquivo escolhido',
        fileSizeTypes: ['B', 'KB', 'MB', 'GB', 'TB'],
        firstDayOfWeek: 0,
        gt: 'Maior que',
        gte: 'Maior ou igual a',
        is: 'É',
        isNot: 'Não é',
        lt: 'Menor que',
        lte: 'Menor ou igual a',
        matchAll: 'Combinar Todos',
        matchAny: 'Combinar Qualquer',
        medium: 'dd/mm/yy',
        monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        nextDecade: 'Próxima Década',
        nextHour: 'Próxima Hora',
        nextMinute: 'Próximo Minuto',
        nextMonth: 'Próximo Mês',
        nextSecond: 'Próximo Segundo',
        nextYear: 'Próximo Ano',
        noFileChosenMessage: 'Nenhum arquivo escolhido',
        noFilter: 'Sem filtro',
        notContains: 'Não contém',
        notEquals: 'Não é igual a',
        passwordPrompt: 'Digite a senha',
        pending: 'Pendente',
        prevDecade: 'Década Anterior',
        prevHour: 'Hora Anterior',
        prevMinute: 'Minuto Anterior',
        prevMonth: 'Mês Anterior',
        prevSecond: 'Segundo Anterior',
        prevYear: 'Ano Anterior',
        removeRule: 'Remover Regra',
        searchMessage: 'Procurar',
        selectionMessage: 'Seleção',
        startsWith: 'Começa com',
        strong: 'Forte',
        today: 'Hoje',
        upload: 'Enviar',
        weak: 'Fraco',
        weekHeader: 'Sem',
        addRule: 'Adicionar Regra',
      }
    })
  ]
};
