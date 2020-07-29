import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { ReplayComponent } from './replay/replay.component';


const routes: Routes = [
  { path: 'editor', component:EditorComponent },
  { path: 'replay', component:ReplayComponent },
  { path: '', redirectTo: '/editor', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
