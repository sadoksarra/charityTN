import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WanttohelpComponent } from './wanttohelp/wanttohelp.component';
import { SnhComponent } from './snh/snh.component';
import { AboutComponent } from './about/about.component';
import { DonateComponent } from './donate/donate.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [

  {
     path: 'home', component: HomeComponent
  },
  {
     path: 'want to help', component: WanttohelpComponent
  },
  {
    path: 'someone need help', component: SnhComponent
 },
 {
  path: 'about', component: AboutComponent
 },
 {
   path: 'Donate', component: DonateComponent
  },
 
  { path: 'edit-post/:id', component: PostEditComponent },
  { path: 'post-list', component: PostListComponent } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,WanttohelpComponent,
                                  SnhComponent,AboutComponent,
                                  DonateComponent,PostEditComponent,
                                  PostListComponent]
