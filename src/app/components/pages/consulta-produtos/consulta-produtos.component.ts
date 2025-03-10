import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-produtos',
  imports: [
    CommonModule
  ],

  templateUrl: './consulta-produtos.component.html',
  styleUrl: './consulta-produtos.component.css'
})
export class ConsultaProdutosComponent implements OnInit {

  produtos: any[] = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.httpClient.get('http://localhost:8081/api/produtos')
      .subscribe({
        next: (data) => {
          this.produtos = data as any[];
        },
        error: (e) => {
          console.log(e.error);

        }
      })
  }
}
