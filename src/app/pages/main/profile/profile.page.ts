import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
// import { Product } from 'src/app/models/product.model';
import { User } from'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  ngOnInit() {
  }

  //Traer datos de usuario
  user(): User {
    return this.utilsSvc.getFromLocalStorage('user');
  }

  // //Tomar imagen
  // async takeImage() {
  //   const dataUrl = (await this.utilsSvc.takePicture('Imagen de perfil')).dataUrl;
  // }

}
