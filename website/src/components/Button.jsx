import { Link } from "react-router-dom";

export default function Button({ to, children, href, variant = "green" }) {
    const colors =
      variant === "green"
        ? "bg-green-600 hover:bg-green-700"
        : "bg-blue-600 hover:bg-blue-700";
  
    return to ? (
      <Link
        to={to}
        className={`text-white py-3 px-6 rounded-full shadow-lg transition ${colors}`}
      >
        {children}
      </Link>
    ) : (
      <a
        href={href}
        className={`text-white py-3 px-6 rounded-full shadow-lg transition ${colors}`}
      >
        {children}
      </a>
    );
  }
  

// Button.jsx
// import { Link } from "react-router-dom";

// export default function Button({ to, children, ...props }) {
//   const className = "text-white py-3 px-6 rounded-full shadow-lg bg-green-600 hover:bg-green-700 transition";

//   return to ? (
//     <Link to={to} className={className} {...props}>
//       {children}
//     </Link>
//   ) : (
//     <button className={className} {...props}>
//       {children}
//     </button>
//   );
// }
