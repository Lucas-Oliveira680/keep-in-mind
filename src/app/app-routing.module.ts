import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesListComponent } from './notes-list/notes-list.component';
import { InfoComponent } from './info/info.component';
import { SourceComponent } from './info/source/source.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/my-notes', pathMatch: 'full' },
  { path: 'my-notes', component: NotesListComponent },
  { path: 'about', component: InfoComponent },
  { path: 'source', component: SourceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
