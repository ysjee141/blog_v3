import * as React from "react"
import {Link} from "gatsby"
import Header from "./header";

const Layout = ({location, title, children}) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  document.documentElement.setAttribute('color-theme', 'dark')

  const clickEvent = () => {
    const mode = document.documentElement.getAttribute("color-theme");
    document.documentElement.setAttribute("color-theme", mode === "dark" ? "light": "dark")
  }

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <button onClick={clickEvent}>모드</button>
      {/*<header className="global-header">{header}</header>*/}
      <Header/>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
