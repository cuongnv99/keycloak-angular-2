import {NgModule, APP_INITIALIZER} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {PrimeNGModule} from '../../shared/primeng/primeng.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { KeycloakVTLimexService } from '../../services/auth/keycloak-vtlimex.service';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { environment } from '../../../environments/environment';

// export function kcFactory(keycloakService: KeycloakVTLimexService): () => void {
//   return () => keycloakService.init();
// }

// export function kcFactory(keycloak: KeycloakService): () => Promise<any> {
//
//   return (): Promise<any> => {
//       return new Promise(async (resolve, reject) => {
//         try {
//           await keycloak.init({
//               config: {
//                   url: environment.keycloak.issuer,
//                   realm: environment.keycloak.realm,
//                   clientId: environment.keycloak.clientId
//               },
//             loadUserProfileAtStartUp: false,
//             initOptions: {
//               onLoad: 'login-required',
//               checkLoginIframe: true
//             },
//             bearerExcludedUrls: []
//           });
//           resolve(true);
//         } catch (error) {
//           reject(error);
//         }
//       });
//     };
// }

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PrimeNGModule,
    FormsModule,
    ReactiveFormsModule,
    // KeycloakAngularModule
  ],
  providers: [
    // KeycloakVTLimexService,
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: kcFactory,
    //   deps: [KeycloakService],
    //   multi: true
    // }
  ],
})
export class AuthModule {
}
