import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css'],
})
export class ListarPensamentosComponent implements OnInit {
  listaPensamento = [
    {
      conteudo: 'Comunicação entre componentes :)',
      autoria: 'Angular',
      modelo: 'modelo3',
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Angular',
      modelo: 'modelo1',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
