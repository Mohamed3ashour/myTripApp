import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { ErrorHandelComponent } from './error-handel/error-handel.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{path:"" , component : HomeComponent },
{path:"home" , component : HomeComponent },
{path:"create" , component : CreateComponent },
{path:"edit" , component : EditComponent },
{path:"delete" , component : DeleteComponent },
{path:"**" , component : ErrorHandelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
