import React from "react"
import "./Header.css"
import logoUrl from "../../assets/logo.svg"
import { Link } from "gatsby"

const Header = () => (
  <div className="header">
    <img src={logoUrl} alt="Tesla" />
    <button className="btnNameToTitle">
      <Link>Каталог</Link>
    </button>
  </div>
)

export default Header
