import { Navigate } from "react-router-dom";

export default function Protected(props) {

    if (!localStorage.getItem('jwt')) return <Navigate to="/" replace />

    return props.children;
  }