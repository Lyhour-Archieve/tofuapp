import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ShoppingList } from 'src/app/core-data/models/shopping-list/shopping-list';
import { ShoppingListFacade } from 'src/app/core-data/state/shopping-list/shopping-list.facade';
import { debounceTime, filter, skip, map, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-save-list',
  templateUrl: './save-list.component.html',
  styleUrls: ['./save-list.component.css']
})
export class SaveListComponent implements OnInit {
  saveListForm = new FormGroup({
    name: new FormControl('')
  });
  constructor(
    private readonly listFacade: ShoppingListFacade
  ) { }

  ngOnInit() {
    this.listFacade.currentList$.pipe(
      filter(list => list !== null && list !== undefined)
    )
      .subscribe(list => {
      const name = list.name;
      if (this.saveListForm.value.name !== name) {
        this.saveListForm.setValue({ name });
      }
    });

    const nameInput$ = this.saveListForm.valueChanges.pipe(
      debounceTime(1000),
      map(form => form.name)
    );

    nameInput$.pipe(withLatestFrom(this.listFacade.currentList$))
      .subscribe(([name, list]) => {
        if (name !== list.name) {
          this.listFacade.updateShoppingList({ ...list, name })          
        }
      });

  }

  createNewList() {
    this.listFacade.createNewDefaultList();
  }

}
