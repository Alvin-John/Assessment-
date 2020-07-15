import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './task/task.component';


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path:'', redirectTo:'Alvin/Task', pathMatch: 'full' },
      { path: "Alvin/Task", component: TaskComponent },
      
    ])
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
