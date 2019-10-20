import { User } from '../../models/user/user';
import { UserActions, UserActionTypes, GetUserComplete, UpdateUserComplete } from './user.actions';

export interface UserState extends User {
    
}

export function userReducer(state: UserState = {}, action: UserActions): UserState {
    switch (action.type) {
        case UserActionTypes.GetUserComplete:
            const getUser = action as GetUserComplete;
            const newState = { ...state, ...getUser.user };
            return newState;
        case UserActionTypes.UpdateUserComplete:
            const updateUser = action as UpdateUserComplete;
            return { ...state, ...updateUser.user };
        default:
            return state;
    }
}