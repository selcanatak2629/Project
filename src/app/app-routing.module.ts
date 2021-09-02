import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClientLayoutComponent } from './components/layouts/client/client-layout/client-layout.component';
import { HomepageComponent } from './pages/client/homepage/homepage.component';

const routes: Routes = [
  {
    path:'',
    component: ClientLayoutComponent,
    children:[
      {
        path:'',
        component:HomepageComponent
      },
      {
        path:'home',
        component:HomeComponent
      }
    ]
  
  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
