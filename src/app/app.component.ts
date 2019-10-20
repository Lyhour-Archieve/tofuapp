import { Component, OnInit } from '@angular/core';
import { UserFacade } from './core-data/state/user/user.facade';
import { Observable } from 'rxjs';
import { UserState } from './core-data/state/user/user.reducer';
import { ShoppingListFacade } from './core-data/state/shopping-list/shopping-list.facade';
import { AppState } from './core-data/state';
import { Store, select } from '@ngrx/store';
import { RecipeFacade } from './core-data/state/recipe/recipes.facade';
import { map, filter } from 'rxjs/operators';
import { Actions } from '@ngrx/effects';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tofu';
  $user: Observable<UserState>;
  selectedList$: Observable<string>;
  listSelected$: Observable<boolean>;

  constructor(
    private readonly userFacade: UserFacade,
    private readonly listFacade: ShoppingListFacade,
    private readonly recipeFacade: RecipeFacade,
    private readonly route: Router) {
  }

  ngOnInit(): void {
    this.$user = this.userFacade.user$;
    this.userFacade.getUser('sam');

    this.selectedList$ = this.listFacade.currentList$.pipe(
      map(list => list ? `lists/${list.id}` : `lists`));

    this.listSelected$ = this.route.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map((end: NavigationEnd) => end.url.includes('/lists'))
    );

    this.listFacade.getAllShoppingLists();
    this.recipeFacade.getAllRecipes();

    // this.store.subscribe(console.log);
    // this.actions$.subscribe(console.log);
    
  }

}
