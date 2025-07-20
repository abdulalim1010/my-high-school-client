import { Link, Outlet } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";


const DashboardLayout = () => {
  const { user, logout } = UseAuth() // must provide context for this

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-blue-700 text-white flex flex-col justify-between">
        <div>
          <div className="p-4 text-xl font-bold border-b border-blue-500">Admin Panel</div>
          <ul className="p-4 space-y-2">
  <li><Link to="/dashboard">Dashboard Home</Link></li>
  <li><Link to="/dashboard/manage-users">Manage Users</Link></li>
  <li><Link to="/dashboard/manage-content">Manage Content</Link></li>
  <li><Link to="/dashboard/add-teacher">Add Teacher</Link></li>  {/* <-- New link */}
</ul>
        </div>
        <div className="p-4">
          {user && (
            <div className="flex items-center space-x-2">
              <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="user" />
              <button className="btn btn-sm btn-outline" onClick={logout}>Logout</button>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 overflow-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
