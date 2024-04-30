import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutsModule } from './layouts/layouts.module';

import { AdminComponent } from './admin.component';
import { AdminPageNotFoundComponent } from './views/admin-page-not-found/admin-page-not-found.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { EventsComponent } from './views/events/events.component';
import { SettingsModule } from './views/settings/settings.module';
import { ElementsModule } from './views/elements/elements.module';
import { AdminService } from './services/admin.service';
import { DashboardCardComponent } from "../shared/components/dashboard-card/dashboard-card.component";
import { ListCardComponent } from "../shared/components/list-card/list-card.component";


@NgModule({
    declarations: [
        AdminComponent,
        DashboardComponent,
        AdminPageNotFoundComponent,
        EventsComponent,
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        LayoutsModule,
        SettingsModule,
        ElementsModule,
        DashboardCardComponent,
        ListCardComponent
    ]
})
export class AdminModule { }
