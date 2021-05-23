import {Redirect, Route, RouteProps} from 'react-router';
import store from "../../store/store";
import userIsLogged from "../../services/auth/userStatus";

export type ProtectedRouteProps = {
    authenticationPath: string;
} & RouteProps;

export default function ProtectedRoute({authenticationPath, ...routeProps}: ProtectedRouteProps) {
    if (userIsLogged()) {
        return <Route {...routeProps} />;
    } else {
        return <Redirect to={{pathname: authenticationPath}}/>;
    }
};