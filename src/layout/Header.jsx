import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="px-4 flex justify-between items-center border-b">
      <Link to="/">
        <h1 className="text-2xl font-extrabold">RevColor</h1>
      </Link>
      <Link to="/login">
        <p className="hover:text-blue-600 hover:underline">Login</p>
      </Link>
    </header>
  );
}

export default Header;
