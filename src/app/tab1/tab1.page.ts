import { IFilme } from '../models/filme.models';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Videos App';
  listaVideos: IFilme[] =  [
    {
      nome:'Lobo Guerreiro 2 (2017)',
      lancameto: '27/07/2017',
      duracao: '2h 4m',
      classificacao: 76,
      cartaz:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/nJ8V8eOLWEKnZjvRZkyI8BRMKDf.jpg',
      generos:['Guerra', 'Ação', 'Drama']

    },
    {
      nome:'Pagando Bem, Que Mal Tem? (2008)',
      lancameto:'18/09/2008',
      duracao:'1h 42m',
      classificacao:76 ,
      cartaz:'https://www.themoviedb.org/t/p/w220_and_h330_face/2gL5KB4GV51O6rH9HTeDGeTy0XX.jpg',
      generos:['Comedia']
    }


  ];

  constructor(public alertController: AlertController, public toastController: ToastController ) {}
  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({

      header: 'Alerta!',
      message: 'Deseja realmente <strong>favoritar</strong> o filme?!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim favoritar',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adcionado aos avoritos.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

}
