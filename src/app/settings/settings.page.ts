import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage implements OnInit{
  constructor(private authService: AuthService, private alertCtrl: AlertController, private router: Router) {
    }
    logoutUser(): void {
        this.authService.logoutUser().then(
    async () => {
      const alert = await this.alertCtrl.create({
        message: 'You have been logged out',
        buttons: [
          {
            text: 'Ok',
            role: 'cancel',
            handler: () => {
              this.router.navigate(['/login']);
            },
          },
        ],
      });
      await alert.present();
    },
    async error => {
      const errorAlert = await this.alertCtrl.create({
        message: error.message,
        buttons: [{ text: 'Ok', role: 'cancel' }],
      });
      await errorAlert.present();
    }
  );
}

goToResetPassword() {
  this.router.navigate(['/resetpassword']);
}
  ngOnInit() {
  }

}
