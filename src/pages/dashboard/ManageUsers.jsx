import { useEffect, useState } from "react";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [roleFilter, setRoleFilter] = useState("all");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:3000/users");
    const data = await res.json();
    setUsers(data);
    setLoading(false);
  };

  const handleMakeAdmin = async (userId) => {
    const res = await fetch(`http://localhost:3000/users/admin/${userId}`, {
      method: "PATCH",
    });
    if (res.ok) fetchUsers();
  };

  const handleBlockUser = async (userId) => {
    const res = await fetch(`http://localhost:3000/users/block/${userId}`, {
      method: "PATCH",
    });
    if (res.ok) fetchUsers();
  };

  const handleDeleteUser = async (userId) => {
    if (confirm("Are you sure you want to delete this user?")) {
      const res = await fetch(`http://localhost:3000/users/${userId}`, {
        method: "DELETE",
      });
      if (res.ok) fetchUsers();
    }
  };

  const filteredUsers =
    roleFilter === "all"
      ? users
      : users.filter((u) => (u.role || "user") === roleFilter);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>

      {/* Filter */}
      <div className="mb-4">
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="select select-bordered"
        >
          <option value="all">All</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="blocked">Blocked</option>
        </select>
      </div>

      {loading ? (
        <p>Loading users...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((u, idx) => (
                <tr key={u._id}>
                  <td>{idx + 1}</td>
                  <td>{u.name || "N/A"}</td>
                  <td>{u.email}</td>
                  <td>{u.role || "user"}</td>
                  <td>{u.status || "active"}</td>
                  <td className="text-right space-x-2">
                    {u.role !== "admin" && (
                      <button
                        onClick={() => handleMakeAdmin(u._id)}
                        className="btn btn-xs bg-green-600 text-white"
                      >
                        Make Admin
                      </button>
                    )}
                    <button
                      onClick={() => handleBlockUser(u._id)}
                      className="btn btn-xs bg-yellow-500 text-white"
                    >
                      {u.status === "blocked" ? "Unblock" : "Block"}
                    </button>
                    <button
                      onClick={() => handleDeleteUser(u._id)}
                      className="btn btn-xs bg-red-600 text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
