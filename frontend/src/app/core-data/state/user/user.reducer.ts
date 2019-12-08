import { UserActions, UserActionTypes, LoginComplete, LogoutComplete, LoadUserComplete, } from './user.actions';
import { User } from '../../models/user/user';
import { Auth } from '../../models/user/auth';

export interface UserState {
    loggedIn: boolean;
    auth?: Auth;
    user?: User;
}

export function userReducer(state: UserState = { loggedIn: false }, action: UserActions): UserState {
    switch (action.type) {
        case UserActionTypes.LoginComplete: {
            const loginAction = action as LoginComplete;
            return { ...state,
                loggedIn: true, 
                user: loginAction.user, 
                auth: loginAction.auth 
            };
        }

        case UserActionTypes.LogoutComplete: {
            return { loggedIn: false }
        }

        case UserActionTypes.LoadUserComplete: {
            const loadAction = action as LoadUserComplete;
            return { ...state, ...loadAction.userData, loggedIn: true }
        }

        default:
            return state;
    }
}