import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserAuth, getUserRoles, UserRole } from 'entities/User';
import { RoutPath } from 'shared/config/routeConfig';

export const ProtectedRoute = ({ children, roles }: { children: JSX.Element, roles?: UserRole[]}) => {
    const auth = useSelector(getUserAuth);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const noAccess = useMemo(() => {
        return !!userRoles?.filter((role) => !roles?.includes(role)).length;
    }, [roles, userRoles]);
    if (!auth) {
        return <Navigate to={RoutPath.main} state={{ from: location }} replace />;
    }
    if (noAccess) {
        return <Navigate to={RoutPath.forbidden} state={{ from: location }} replace />;
    }
    return children;
};
