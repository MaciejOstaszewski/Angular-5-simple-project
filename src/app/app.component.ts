import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {DataStorageService} from './shared/data-storage.service';
import {AuthService} from './auth/auth.service';

/*
TODO
You can of course improve this app even more. Some ideas:

Check if a token is present at application startup
  (check the localStorage manually or use the Firebase SDK to
  do so - just make sure that you somehow wait for the SDK to
  finish its initialization)
Redirect the user if he want to
  access a protected route (right now, nothing happens)
   - inject the router and call this.router.navigate(...) to do so
Redirect the user on logout so that
  he's not able to stay on pages which are
  reserved for authenticated users - you can simply
  inject the router and call this.router.navigate(...) in the logout() method



TODO
What if you want to use route protection (canActivate  to be precise) on lazily loaded routes?

You can add canActivate to the lazy loaded routes but that of course means, that you might
load code which in the end can't get accessed anyways. It would be better to check that BEFORE loading the code.

You can enforce this behavior by adding the canLoad  guard to the route which points to the lazily loaded module:

{ path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule', canLoad: [AuthGuard] }

In this example, the AuthGuard  should implement the CanLoad interface.

TODO
leave form warning
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDugDYb0GQPDQzU6ABPwFqPwjTeuU1d7_8',
      authDomain: 'bg-recipe-book-d020e.firebaseapp.com'
    });

  }


}
