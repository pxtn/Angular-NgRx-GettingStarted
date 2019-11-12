import * as fromRoot from '../../state/app.state';
import {User} from '../user';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface State extends fromRoot.State {
  users: UserState;
}

export interface UserState {
  maskUserName: boolean;
  currentUser: User;
}

const initialUserState: UserState = {
  maskUserName: false,
  currentUser: null
};

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
  getUserFeatureState,
  state => state.maskUserName
);

export const getCurrentUser = createSelector(
  getUserFeatureState,
  state => state.currentUser
);

export function reducer(state: UserState = initialUserState, action): UserState {
  switch (action.type) {
    case 'MASK_USER_NAME': {
      return {
        ...state,
        maskUserName: action.payload
      };
    }
    default:
      return state;
  }
}
