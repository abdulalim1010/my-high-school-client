import { Link, Outlet } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";

const DashboardLayout = () => {
  const { user, logout } = UseAuth();

  return (
    <div className="drawer lg:drawer-open">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="drawer-content flex flex-col bg-gray-100">
        {/* Page Content */}
        <div className="w-full p-4">
          {/* Drawer toggle button for mobile */}
          <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden mb-4">
            Open Menu
          </label>
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <aside className="w-64 bg-blue-700 text-white flex flex-col justify-between h-full">
          <div>
            <div className="p-4 text-xl font-bold border-b border-blue-500">Admin Panel</div>
            <ul className="menu p-4 space-y-2">
              <li><Link to="/dashboard">Dashboard Home</Link></li>
              <li><Link to="/dashboard/manage-users">Manage Users</Link></li>
              <li><Link to="/dashboard/manage-content">Manage Content</Link></li>
              <li><Link to="/dashboard/add-teacher">Add Teacher</Link></li>
            </ul>
          </div>

          <div className="p-4 border-t border-blue-500">
            {user && (
              <div className="flex items-center space-x-2">
                <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="user" />
                <button className="btn btn-sm btn-outline" onClick={logout}>Logout</button>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;
