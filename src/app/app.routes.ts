import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
    {
        path: "home-page",
        component: HomePageComponent,
    },
    {
        path: "sign-in",
        component: SignInComponent,
    },
    {
        path:"sign-up",
        component: SignUpComponent,
    },

    
];
