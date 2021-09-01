import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  private dados: any = [];

  constructor() { }

  guradarDados(index: string, dados: any): boolean{
    if(index){
      this.dados[index] = dados;
      return true;
    }else{
      return false;
    }
  }

  deletarDados(index: string): boolean{
    return delete this.dados[index];
  }

  pegarDados(index: string): any{
    if(index){
      return this.dados[index];
    }else{
      return null;
    }
  }
}
