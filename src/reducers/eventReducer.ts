import { ActionType } from '../action-types';
import { EventAction } from '../actions';

export interface InitialEventStateType {
  id: string;
}

const InitialEventState = {
  id: '',
};

const eventReducer = (state = InitialEventState, action: EventAction): InitialEventStateType => {
  switch (action.type) {
    case ActionType.SHOW_EVENT:
      return action.payload;
    default:
      return state;
  }
};

export default eventReducer;
