import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)], // Configure the router
  exports: [RouterModule],
})
export class AppRoutingModule {}