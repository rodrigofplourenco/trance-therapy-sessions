const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg fixed z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>

          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="rounded" href="#hero">Inicio</a>
            </li>
            <li>
              <a className="rounded" href="#events">Eventos</a>
            </li>
            <li>
              <a className="rounded" href="#about-us">Sobre nós</a>
            </li>
          </ul>
        </div>

        <a className="normal-case text-xl">
          <img src="/assets/img/logo.png" alt="Logo" className="p-1 rounded-full" />
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a className="rounded" href="#hero">Inicio</a>
          </li>
          <li>
            <a className="rounded" href="#events">Eventos</a>
          </li>
          {/* <li>
            <a className="rounded" href="#about-us">Sobre nós</a>
          </li> */}
        </ul>
      </div>

      <div className="navbar-end">
        <button className="btn btn-primary hover:bg-white hover:text-green-500 border-none" disabled>
          Reservar pulseira
        </button>
      </div>
    </div>
  )
}

export default Header