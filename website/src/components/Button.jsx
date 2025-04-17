export default function Button({ children, href, variant = "green" }) {
    const colors =
      variant === "green"
        ? "bg-green-600 hover:bg-green-700"
        : "bg-blue-600 hover:bg-blue-700";
  
    return (
      <a
        href={href}
        className={`text-white py-3 px-6 rounded-full shadow-lg transition ${colors}`}
      >
        {children}
      </a>
    );
  }
  