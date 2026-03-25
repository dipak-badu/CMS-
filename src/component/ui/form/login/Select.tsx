export default function SelectOPtion() {
  return (
    <select className="border border-gray-300 w-full p-2 rounded-md shadow bg-white text-gray-600">
      <option value="">--Select your role--</option>
      <option value="admin">Admin</option>
      <option value="user">User</option>
    </select>
  );
}
