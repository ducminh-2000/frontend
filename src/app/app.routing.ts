import { CongtyComponent } from './views/congty/congty.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { CreateComponent } from './views/congty/create/create.component';
import { UpdateComponent } from './views/congty/update/update.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'congty',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'congty',
        data: {
          title: 'CongTy'
        },
        children: [
          {
            path: '',
            data: {
              title: 'CongTy'
            },
            component: CongtyComponent,
          },
          {
            path: 'create',
            component: CreateComponent,
            data: {
              title: 'Create'
            }
          },
          {
            path: 'update/:id',
            component: UpdateComponent,
            data: {
              title: 'Update'
            }
          }
        ]
      },
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
