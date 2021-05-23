import {Redirect, Route, RouteProps} from 'react-router';
import store from "../../store/store";

export type ProtectedRouteProps = {
    authenticationPath: string;
} & RouteProps;

export default function ProtectedRoute({authenticationPath, ...routeProps}: ProtectedRouteProps) {
    const access_token = store.getState().token.access_token
    if (access_token !== '') {
        return <Route {...routeProps} />;
    } else {
        return <Redirect to={{pathname: authenticationPath}}/>;
    }
};