import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './task/task.component';


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path:'', redirectTo:'NOT-alvin-task', pathMatch: 'full' },
      { path: "NOT-alvin-task", component: TaskComponent },
    ])
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
