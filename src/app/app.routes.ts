import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from "app/people-list/people-list.component";

// Route config let's you map routes to components
const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'persons',
    component: PeopleListComponent,
  },
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/persons',
    pathMatch: 'full'
  },
];

export const appRouterModule = RouterModule.forRoot(routes);