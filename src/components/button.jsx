const Button = ({ children, onClick, type = 'button' }) => (
  <button
    type={type}
    onClick={onClick}
    className="w-full bg-indigo-600 text-white font-medium py-2 rounded-xl shadow hover:bg-indigo-900 transition"
  >
    {children}
  </button>
);

export default Button;  