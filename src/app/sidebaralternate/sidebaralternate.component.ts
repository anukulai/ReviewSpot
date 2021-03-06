import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Home',  icon: 'ti-layout-grid2', class: '' },
    { path: 'user', title: 'User Profile',  icon:'ti-user', class: '' },
    { path: 'icons', title: 'List Of Investors',  icon:'ti-view-list-alt', class: '' },
     { path: 'maps', title: 'Investor Portfolio',  icon:'ti-map', class: '' },
    { path: 'table', title: 'List of Companies',  icon:'ti-view-list-alt', class: '' },
    { path: 'typography', title: 'Company Portfolio',  icon:'ti-map', class: '' },
    
    { path: 'notifications', title: 'LeaderBoard',  icon:'ti-cup', class: '' },
    // { path: 'upgrade', title: 'navigate',  icon:'ti-export', class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebaralternate.component.html',
})

export class SidebaralternateComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

}
