import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Import Containers
import { DefaultLayoutComponent } from "./containers";

import { P404Component } from "./views/error/404.component";

import { StockComponent } from "./views/stock/stock.component";
import { AdviseComponent } from "./views/advise/advise.component";
import { IndustryComponent } from "./views/industry/industry.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "stock",
    pathMatch: "full",
  },
  {
    path: "",
    component: DefaultLayoutComponent,
    data: {
      title: "Home",
    },
    children: [
      {
        path: "stock",
        data: {
          title: "Stock",
        },
        children: [
          {
            path: "",
            data: {
              title: "Stock",
            },
            component: AdviseComponent,
          },
          {
            path: "market",
            data: {
              title: "Danh sách mã",
            },
            component: StockComponent,
          },
          {
            path: "industry",
            data: {
              title: "Danh sách ngành",
            },
            component: IndustryComponent,
          },
        ],
      },
    ],
  },
  { path: "**", component: P404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
