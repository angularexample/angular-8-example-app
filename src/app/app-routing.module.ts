import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {XxxHomePageComponent} from '@app/modules/xxx-home-page/xxx-home-page.component';
import {XxxHomePageModule} from '@app/modules/xxx-home-page/xxx-home-page.module';
import {XxxPageNotFoundPageComponent} from '@app/modules/xxx-page-not-found-page/xxx-page-not-found-page.component';
import {XxxPageNotFoundPageModule} from '@app/modules/xxx-page-not-found-page/xxx-page-not-found-page.module';

export const xxxAppRoutes: Routes = [
  {path: '', component: XxxHomePageComponent},
  {path: '**', component: XxxPageNotFoundPageComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    XxxHomePageModule,
    XxxPageNotFoundPageModule,
    RouterModule.forRoot(
        xxxAppRoutes
    )
  ]
})

export class AppRoutingModule {
}
