import { ActionType } from '../action-types';
import { EventModel } from '../models';

interface SHOW_EVENT {
  type: ActionType;
  payload: EventModel;
}

export type EventAction = SHOW_EVENT;
