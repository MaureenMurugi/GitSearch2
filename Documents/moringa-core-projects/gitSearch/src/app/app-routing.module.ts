import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent},
  { path: 'search', component: SearchComponent},
  { path: '', redirectTo:"/profile", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
