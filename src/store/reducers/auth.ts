import {Auth} from "../types";
import {AuthTypes} from "../actions/auth";

const authReducer = (state: Auth, action: AuthTypes) => {
    switch (action.type) {
        case 'SIGN_IN':
            return !state;
    }
}

export default authReducer;