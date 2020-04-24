import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppUrl } from './models/app-url.enum';

const routes: Routes = [
  {
    path: AppUrl.Landing,
    loadChildren: () => import('./routes/landing/landing.module').then((c) => c.LandingModule),
  },
  {
    path: AppUrl.Demo,
    loadChildren: () => import('./routes/landing/landing.module').then((c) => c.LandingModule),
  },
  {
    path: AppUrl.Feature,
    loadChildren: () => import('./routes/feature/feature.module').then((c) => c.FeatureModule),
  },
  {
    path: AppUrl.Package,
    loadChildren: () => import('./routes/package/package.module').then((c) => c.PackageModule),
  },
  {
    path: AppUrl.SignUp,
    loadChildren: () => import('./routes/sign-up/sign-up.module').then((c) => c.SignUpModule),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
