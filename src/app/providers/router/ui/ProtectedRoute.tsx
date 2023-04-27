import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserAuth, getUserRoles, UserRole } from 'entities/User';
import { getRouteMain, getRouteForbidden } from 'shared/const';

export const ProtectedRoute = ({ children, roles }: { children: JSX.Element, roles?: UserRole[]}) => {
    const auth = useSelector(getUserAuth);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((requiredRole) => {
            const hasRole = userRoles?.includes(requiredRole);
            return hasRole;
        });
    }, [roles, userRoles]);
    if (!auth) {
        return <Navigate to={getRouteMain()} state={{ from: location }} replace />;
    }
    if (!hasRequiredRoles) {
        return <Navigate to={getRouteForbidden()} state={{ from: location }} replace />;
    }
    return children;
};
