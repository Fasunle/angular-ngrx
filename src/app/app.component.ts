import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  counterDecrementAction,
  counterIncrementAction,
  counterResetAction,
} from './state/counter/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  ngOnInit(): void {
    console.log('Rerenders...');
  }

  increment() {
    this.store.dispatch(counterIncrementAction());
  }
  decrement() {
    this.store.dispatch(counterDecrementAction());
  }
  reset() {
    this.store.dispatch(counterResetAction());
  }
}
