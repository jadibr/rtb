import { Routes } from '@angular/router'

import { HomePage } from './home-page/home.page'


export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'reports', loadChildren: () => import("./reports/reports-routing.module").then(m => m.ReportsRoutingModule) }
]
