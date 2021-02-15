import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'all-lots',
    loadChildren: () => import('./pages/all-lots/all-lots.module').then( m => m.AllLotsPageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./pages/favorites/favorites.module').then( m => m.FavoritesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'analytics',
    loadChildren: () => import('./pages/analytics/analytics.module').then( m => m.AnalyticsPageModule)
  },
  {
    path: 'available-lots',
    loadChildren: () => import('./pages/available-lots/available-lots.module').then( m => m.AvailableLotsPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'manage-passes',
    loadChildren: () => import('./pages/manage-passes/manage-passes.module').then( m => m.ManagePassesPageModule)
  },
  {
    path: 'testing-ui',
    loadChildren: () => import('./pages/testing-ui/testing-ui.module').then( m => m.TestingUiPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'lot-detail/:name', // I have zero clue why ':name' is needed here. src: https://www.youtube.com/watch?v=DZrWzoW4_4M
    loadChildren: () => import('./pages/lot-detail/lot-detail.module').then( m => m.LotDetailPageModule)
  },
  {
    path: 'verify',
    loadChildren: () => import('./pages/verify/verify.module').then( m => m.VerifyPageModule)
  },
  {
    path: 'purchase-a-pass-select',
    loadChildren: () => import('./purchase-a-pass-select/purchase-a-pass-select.module').then( m => m.PurchaseAPassSelectPageModule)
  },
  {
    path: 'purchase-a-pass-payment',
    loadChildren: () => import('./purchase-a-pass-payment/purchase-a-pass-payment.module').then( m => m.PurchaseAPassPaymentPageModule)
  },
  {
    path: 'purchase-a-pass-review',
    loadChildren: () => import('./purchase-a-pass-review/purchase-a-pass-review.module').then( m => m.PurchaseAPassReviewPageModule)
  },
  {
    path: 'purchase-a-pass-shipping',
    loadChildren: () => import('./purchase-a-pass-shipping/purchase-a-pass-shipping.module').then( m => m.PurchaseAPassShippingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
