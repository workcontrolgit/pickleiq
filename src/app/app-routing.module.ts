import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { ShouldLoginComponent } from './should-login.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'admin',
      loadChildren: () => import('./features/admin/admin.module').then((m) => m.AdminModule),
      //data: {role: 'Manager'},
    },
    {
      path: 'about',
      loadChildren: () => import('./about/about.module').then((m) => m.AboutModule),
    },
    {
      path: 'shop',
      loadChildren: () => import('./features/shop/shop.module').then((m) => m.ShopModule),
    },
    {
      path: 'rating',
      loadChildren: () => import('./features/rating/rating.module').then((m) => m.RatingModule),
    },
    {
      path: 'training',
      loadChildren: () => import('./features/training/training.module').then((m) => m.TraininghModule),
    },
    {
      path: 'position',
      loadChildren: () => import('./features/position/position.module').then((m) => m.PositionModule),
    },
  ]),

  { path: 'should-login', component: ShouldLoginComponent },
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, paramsInheritanceStrategy: 'always' }),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
