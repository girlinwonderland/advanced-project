import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserAuth } from 'entities/User';
import { RoutPath } from 'shared/config/routeConfig';

export const ProtectedRoute = ({ children }: { children: JSX.Element}) => {
    const auth = useSelector(getUserAuth);
    const location = useLocation();
    if (!auth) {
        return <Navigate to={RoutPath.main} state={{ from: location }} replace />;
    }
    return children;
};
