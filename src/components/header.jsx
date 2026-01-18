import { NavLink,Link} from 'react-router';
import Logo from "./Arjun.gif"

function Header({ currentTheme, setCurrentTheme }) {
  const changeTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setCurrentTheme(newTheme);
  };

  const isDark = currentTheme === 'dark';

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`mx-3 mt-3 rounded-2xl border transition-colors duration-500 backdrop-blur-xl ${
          isDark
            ? 'bg-slate-950/45 border-white/10'
            : 'bg-white/55 border-white/30'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Link to="/">
              <img
                src={Logo}
                alt="Logo"
                className="h-14 w-14 rounded-xl ring-1 ring-white/15 shadow-2xl shadow-black/30"
              />
            </Link>
            <div className="hidden sm:block">
              <div className={`text-sm tracking-widest uppercase ${isDark ? 'text-white/70' : 'text-slate-700'}`}>
                Arjun
              </div>
              <div className={`text-xs ${isDark ? 'text-white/50' : 'text-slate-600'}`}>
                Building modern web experiences
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isDark ? 'text-white/80' : 'text-slate-800'
                } hover:text-white transition-colors duration-300 ${
                  isActive ? 'font-semibold' : ''
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${
                  isDark ? 'text-white/80' : 'text-slate-800'
                } hover:text-white transition-colors duration-300 ${
                  isActive ? 'font-semibold' : ''
                }`
              }
            >
              Contact
            </NavLink>

            <label className="inline-flex items-center cursor-pointer">
              <input
                id="Toggle"
                type="checkbox"
                checked={isDark}
                onChange={changeTheme}
                className="sr-only peer"
              />
              <div className="relative w-12 h-7 bg-white/20 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300/30 rounded-full peer-checked:bg-cyan-500/40 ring-1 ring-white/15 transition-colors duration-500">
                <div className="absolute top-1 left-1 h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-500 peer-checked:translate-x-5" />
              </div>
            </label>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
