import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-feed',
    templateUrl: 'feed.html',
})
export class FeedPage {
    public nome_usuario: string = "Wellison";
    // public numero1: number = 10;
    // public numero2: number = 10;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    public soma_numeros(numero1: number, numero2: number): void {

        // public resultado = numero1 + numero2;
        alert(numero1 + numero2);

    }

    ionViewDidLoad() {
        // this.soma_numeros(10, 20);
        // console.log('ionViewDidLoad FeedPage');
    }

}
