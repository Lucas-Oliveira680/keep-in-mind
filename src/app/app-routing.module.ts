import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesListComponent } from './notes-list/notes-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/my-notes', pathMatch: 'full' },
  { path: 'my-notes', component: NotesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
