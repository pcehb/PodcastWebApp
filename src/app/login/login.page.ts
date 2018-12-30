import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;
  public loading: HTMLIonLoadingElement;

  constructor(public loadingCtrl: LoadingController,
    public alertCtrl: AlertController, public authService: AuthService, private router: Router,
    private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['',
        Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ]
    });
  }

  goToResetPassword() {
    this.router.navigate(['/ResetPassword']);
  }

  createAccount() {
    this.router.navigate(['/Signup']);
  }

  async loginUser(loginForm: FormGroup): Promise<void> {
    console.log(loginForm);
    if (!loginForm.valid) {
      console.log('Form is not valid yet, current value:', loginForm.value);
    } else {
      console.log("FORM READ OK");
      const email = loginForm.value.email;
      console.log(email);
      const password = loginForm.value.password;
      console.log(password);
      this.authService.loginUser(email, password).then(
        () => {
          this.loading.dismiss().then(() => {
            console.log("GOING HOME");
            this.router.navigate(['/']);
          });
        },
        error => {
          this.loading.dismiss().then(async () => {
            console.log("ERROR");
            const alert = await this.alertCtrl.create({
              message: error.message,
              buttons: [{ text: 'Ok', role: 'cancel' }],
            });
            await alert.present();
          });
        }
      );
      this.loading = await this.loadingCtrl.create();
      await this.loading.present();
    }
  }

  ngOnInit() {
  }

}
