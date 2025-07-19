

import { Navigate } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";


const AdminRoute = ({ children }) => {
  const { user, loading, isAdmin } = UseAuth() // use custom logic or DB role check

  if (loading) return <div>Loading...</div>;
  if (user && isAdmin) return children;

  return <Navigate to="/login" />;
};

export default AdminRoute;
