import { createReducer, on } from '@ngrx/store';
import {
  counterDecrementAction, 
  counterIncrementAction, 
  counterResetAction
} from './counter.actions';

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(counterDecrementAction, (state, payload) => (state = state - 1)),
  on(counterIncrementAction, (state, payload) => (state = state + 1)),
  on(counterResetAction, (state, payload) => (state = initialState))
);
