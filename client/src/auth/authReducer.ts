import { Action, UserState } from "../interfaces/context.interface";
import { type } from "../types/type";

export const authReducer = (state: UserState, action: Action): UserState => {
    switch (action.type) {
        case type.LOGIN:
            return {
                ...state,
                token: action.payload?.token,
                user: action.payload?.user,
                isLogged: true,
            };
        case type.LOGOUT:
            return {
                ...state,
                token: undefined,
                user: undefined,
                isLogged: false,
            };
        default:
            return state;
    }
};
