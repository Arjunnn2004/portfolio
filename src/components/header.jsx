import { NavLink,Link} from 'react-router';
import Logo from "./Arjun.gif"

function Header({ currentTheme, setCurrentTheme }) {
  const changeTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setCurrentTheme(newTheme);
  };

  const isDark = currentTheme === 'dark';

  return (
    <div className={`flex items-center justify-between p-4 shadow-md transition-colors duration-500 ${isDark ? 'bg-slate-900' : 'bg-gray-100'}`}>
      <div className="flex items-center space-x-4">
        <Link to="/"><img src={Logo} alt="Logo" className="h-24 w-24 mx-auto transition-all duration-500" /></Link>
      </div>
      <nav className="space-x-4">
        <NavLink to="/" className={`hover:text-gray-600 transition-colors duration-500 ${isDark ? 'text-white' : 'text-gray-800'}`}>Home</NavLink>
        <NavLink to="/contact" className={`hover:text-gray-600 transition-colors duration-500 ${isDark ? 'text-white' : 'text-gray-800'}`}>Contact</NavLink>
        <label className="inline-flex items-center cursor-pointer">
          <input
            id="Toggle"
            type="checkbox"
            checked={isDark}
            onChange={changeTheme}
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600 m-6 transition-colors duration-500"></div>
        </label>
      </nav>
    </div>
  );
}

export default Header;
