import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent }  from './user-add/user-add.component';

const routes: Routes = [
	{ path: 'adduser', component: UserAddComponent },
];

@NgModule({
	exports: [ RouterModule ],
	imports : [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
