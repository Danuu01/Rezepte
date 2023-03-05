import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ //die Komponente werden eingebunden

//home soll nicht extra route haben sondern direkt aufgerufen werden
//http://localhost:4200
{
  path: " ",
  component: HomeComponent,
  pathMatch: 'full' //diese Route nur aufgerufen wird, wenn danach nichts weiter in der URL folgt
},
//http://localhost:4200/about
{
  path: "about",
  component: AboutComponent
},
//http://localhost:4200/login
{
  path: "login",
  component: LoginComponent
}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
