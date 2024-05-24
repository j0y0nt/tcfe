import { Routes } from '@angular/router';
import { DesignTacosComponent } from './design-tacos/design-tacos.component';
import { RecentTacosComponent } from './recent-tacos/recent-tacos.component';

export const routes: Routes = [{
    path:   '',
    component: RecentTacosComponent,
    title: 'Recent Tacos'
    },{
    path:   'design',
    component: DesignTacosComponent,
    title: 'Design Tacos'
}];
