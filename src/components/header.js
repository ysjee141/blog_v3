import * as React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <a href="https://www.naver.com">Logo</a>
      <nav>
        <ul>
          <li>Posts</li>
          <li>Series</li>
          <li>Tags</li>
          <li>About</li>
        </ul>
      </nav>
      <div>
        <button>모드</button>
        <a>
          <FontAwesomeIcon icon={faMagnifyingGlass}/>
        </a>
      </div>
    </header>
  )
}

export default Header
