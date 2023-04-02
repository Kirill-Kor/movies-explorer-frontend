import { Navigate, useLocation } from "react-router-dom";

export default function Protected(props) {
  const location = useLocation();

  if (!localStorage.getItem('jwt') && (location.pathname !== '/signin' && location.pathname !== '/signup')) return <Navigate to="/" replace />;
  if (localStorage.getItem('jwt') && (location.pathname === '/signin' || location.pathname === '/signup')) return <Navigate to="/" replace />;


  return props.children;
}