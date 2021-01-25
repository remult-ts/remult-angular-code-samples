import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RouteHelperService } from '@remult/angular';
import { StringColumn } from '@remult/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router,
    private routeHelper: RouteHelperService) { }
  searchString = new StringColumn("Search");

  ngOnInit() {

  }
  shouldDisplayRoute(route: Route) {
    if (this.searchString.value && !this.routeName(route).toLocaleLowerCase().includes(this.searchString.value.toLocaleLowerCase()))
      return false;
    if (!(route.path && route.path.indexOf(':') < 0 && route.path.indexOf('**') < 0 && route.path != 'Home'))
      return false;
    return this.routeHelper.canNavigateToRoute(route);
  }
  routeName(route: Route) {
    let name = route.path;
    if (route.data && route.data.name)
      name = route.data.name;
    return name;
  }
  navigate(route: Route) {
    this.router.navigate(['/' + route.path]);
  }


}

