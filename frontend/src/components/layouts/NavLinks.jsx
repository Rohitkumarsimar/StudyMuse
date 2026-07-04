import { NavLink } from "react-router-dom";

const links = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/tasks", label: "Tasks" },
  { to: "/profile", label: "Profile" },
  { to: "/chat", label: "Chat AI" },
];

export default function NavLinks({ onNavigate }) {
  return (
    <>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          onClick={onNavigate}
          className={({ isActive }) =>
            `md:rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
              isActive
                ? "bg-indigo-500 text-white shadow-sm"
                : "text-gray-600 hover:bg-white hover:text-gray-900"
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </>
  );
}