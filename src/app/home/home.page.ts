import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  public resultado: String = "Resultado"
  Alcool:string
  Gasolina:string


  calcular() {

    //Validar
    if(this.Alcool && this.Gasolina){
      
      var pAlcool = parseFloat(this.Alcool)
      var pGasolina = parseFloat(this.Gasolina)

      var res = pAlcool / pGasolina

      if(res >= 0.7){
        this.resultado = "Melhor utilizar Gasolina"
      } else{
        this.resultado = "Melhor utilizar Álcool"
      }

    } else{
      this.resultado = "Preencha corretamente os campos"
    }
  }

}