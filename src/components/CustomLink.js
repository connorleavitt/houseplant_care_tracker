import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function CustomLink({ toggle, to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li
      className={isActive ? "active" : ""}
      onClick={(e) => {
        e.stopPropagation();
        toggle();
      }}
    >
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
