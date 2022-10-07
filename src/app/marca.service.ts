import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marca } from './marca';

@Injectable({
  providedIn: 'root'
})

export class MarcaService {

  private url = "http://localhost:8080/cmarca/marca";

  
  constructor(private httpClient: HttpClient) { }

  //Listar as marcas a partir da chamada do método da API Rest que está contida na URL especificada
  listarMarcas(): Observable<Marca[]>{
    return this.httpClient.get<Marca[]>(`${this.url}`);
  }

  //Consultar a marca a partir do ID informado
  consultarMarca(id: number): Observable<Marca>{
    return this.httpClient.get<Marca>(`${this.url}/${id}`);
  }

  //Método para incluir uma nova marca, a partir da chamada HTTP REST, tipo POST
  incluirMarca(marca: Marca): Observable<Object>{
    return this.httpClient.post(`${this.url}`, marca);
  }

  //Método para alterar uma marca, a partir da chamada HTTP REST, tipo PUT
  alterarMarca(id: number, marca: Marca): Observable<Object>{
    return this.httpClient.put(`${this.url}/${id}`, marca);
  }

  //Método para alterar uma marca, a partir da chamada HTTP REST, tipo DELETE
  excluirMarca(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.url}/${id}`);
  }

}
