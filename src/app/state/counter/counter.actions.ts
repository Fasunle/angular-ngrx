import { createAction } from '@ngrx/store';

const enum COUNTER_ACTION_TYPES {
  INCREMENT = '[COUNTER -> INCREMENT]',
  DECREMENT = '[COUNTER -> DECREMENT]',
  RESET = '[COUNTER -> RESET]',
}

export const counterIncrementAction = createAction(
  COUNTER_ACTION_TYPES.INCREMENT
);
export const counterDecrementAction = createAction(
  COUNTER_ACTION_TYPES.DECREMENT
);
export const counterResetAction = createAction(COUNTER_ACTION_TYPES.RESET);
