import { UserState } from "../interfaces/context.interface";

export const initialState: UserState = {
    isLogged: false,
    token: undefined,
}