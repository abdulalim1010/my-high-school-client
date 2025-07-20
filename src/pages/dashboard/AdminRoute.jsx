import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";

const AdminRoute = ({ children }) => {
  const { user, Loading } = UseAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkingAdmin, setCheckingAdmin] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/users/admin/${user.email}`)
        .then(res => res.json())
        .then(data => {
          setIsAdmin(data.isAdmin);
          setCheckingAdmin(false);
        })
        .catch(() => {
          setIsAdmin(false);
          setCheckingAdmin(false);
        });
    } else {
      setIsAdmin(false);
      setCheckingAdmin(false);
    }
  }, [user]);

  if (Loading || checkingAdmin) return <div>Loading...</div>;

  if (!user) return <Navigate to="/login" replace />;

  if (!isAdmin) return <Navigate to="/" replace />;

  return children;
};

export default AdminRoute;
