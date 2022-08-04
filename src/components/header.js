import * as React from "react"
import {useEffect, useState} from "react"
import {Link} from "gatsby"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faMagnifyingGlass, faMoon, faSun} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [theme, setTheme] = useState(document.documentElement.getAttribute("color-theme") || "light");
  const [logoColor, setLogoColor] = useState("fff");
  const [isToggledNav, setToggleNav] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute("color-theme", theme === `0` ? "light" : theme)
    setLogoColor(theme === "dark" ? "fff" : "000")
  }, [theme])

  const clickEvent = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const toggleNav = () => {
    setToggleNav(!isToggledNav);
  }

  return (
    <div className={`header-wrapper`}>
      <header>
        <Link to='/'>
          <svg height="2em" viewBox="0 0 346.88 74.08" xmlns="http://www.w3.org/2000/svg">
            <g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt"
               stroke={`#${logoColor}`} strokeWidth="0.25mm" fill={`#${logoColor}`}>
              <path d="M 37.76 57.12 L 0 36.48 L 0 31.28 L 37.76 11.36 L 37.76 15.92 L 4.24 33.68 L 4.24 34.16 L 37.76 52.56 L 37.76 57.12 Z" id="0" vector-effect="non-scaling-stroke"/>
              <path d="M 50.16 57.12 L 50.16 1.12 L 54.8 1.12 L 54.8 27.12 L 85.2 27.12 L 85.2 1.12 L 89.84 1.12 L 89.84 57.12 L 85.2 57.12 L 85.2 31.28 L 54.8 31.28 L 54.8 57.12 L 50.16 57.12 Z" id="1" vector-effect="non-scaling-stroke"/>
              <path d="M 108 57.12 L 101.84 50.96 L 101.84 40.48 L 108 34.48 L 129.6 34.48 L 129.6 25.6 L 125.2 21.2 L 111.12 21.2 L 106.64 25.6 L 106.64 29.2 L 102.16 29.2 L 102.16 24.24 L 109.12 17.28 L 127.12 17.28 L 134.08 24.24 L 134.08 57.12 L 129.68 57.12 L 129.68 49.36 L 121.68 57.12 L 108 57.12 Z M 109.84 53.12 L 120.64 53.12 L 129.6 44.32 L 129.6 38.48 L 109.84 38.48 L 106.32 41.84 L 106.32 49.68 L 109.84 53.12 Z" id="2" vector-effect="non-scaling-stroke"/>
              <path d="M 146.48 74.08 L 146.48 17.28 L 150.88 17.28 L 150.88 24.96 L 158.56 17.28 L 173.28 17.28 L 180.24 24.24 L 180.24 50.16 L 173.28 57.12 L 158 57.12 L 150.96 50.88 L 150.96 74.08 L 146.48 74.08 Z M 159.04 53.04 L 171.36 53.04 L 175.76 48.72 L 175.76 25.68 L 171.36 21.28 L 159.92 21.28 L 150.96 30.24 L 150.96 45.68 L 159.04 53.04 Z" id="3" vector-effect="non-scaling-stroke"/>
              <path d="M 192.24 74.08 L 192.24 17.28 L 196.64 17.28 L 196.64 24.96 L 204.32 17.28 L 219.04 17.28 L 226 24.24 L 226 50.16 L 219.04 57.12 L 203.76 57.12 L 196.72 50.88 L 196.72 74.08 L 192.24 74.08 Z M 204.8 53.04 L 217.12 53.04 L 221.52 48.72 L 221.52 25.68 L 217.12 21.28 L 205.68 21.28 L 196.72 30.24 L 196.72 45.68 L 204.8 53.04 Z" id="4" vector-effect="non-scaling-stroke"/>
              <path d="M 238.4 57.12 L 238.4 0 L 242.88 0 L 242.88 57.12 L 238.4 57.12 Z" id="5" vector-effect="non-scaling-stroke"/>
              <path d="M 268.56 57.12 L 299.6 0.96 L 304.32 0.96 L 273.36 57.12 L 268.56 57.12 Z" id="7" vector-effect="non-scaling-stroke"/>
              <path d="M 309.12 57.12 L 309.12 52.56 L 342.64 34.16 L 342.64 33.68 L 309.12 15.92 L 309.12 11.36 L 346.88 31.28 L 346.88 36.48 L 309.12 57.12 Z" id="8" vector-effect="non-scaling-stroke"/>
            </g>
          </svg>
        </Link>
        <nav className={ isToggledNav ? 'active' : '' }>
          <ul>
            <li>
              <Link to='/' activeClassName={`active`}>Posts</Link>
            </li>
            <li>
              <Link to='/'>Series</Link>
            </li>
            <li>
              <Link to='/'>Tags</Link>
            </li>
            <li>
              <Link to='/'>About</Link>
            </li>
          </ul>
        </nav>
        <div>
          <button onClick={clickEvent}>
            <FontAwesomeIcon size={`lg`} icon={theme === 'dark' ? faMoon : faSun}/>
          </button>
          <button>
            <FontAwesomeIcon size={`lg`} icon={faMagnifyingGlass}/>
          </button>
          <button onClick={toggleNav}>
            <FontAwesomeIcon size={`lg`} icon={faBars}/>
          </button>
        </div>
      </header>
    </div>
  )
}

export default Header
