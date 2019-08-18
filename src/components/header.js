import React from "react"

import { Link } from "gatsby"

import pages from "../data/nav"

const Header = props => {
  const nav = pages.map(link => {
    return (
      <li className="mx-4 font-bold">
        <Link to={link.link}>{link.text}</Link>
      </li>
    )
  })

  return (
    <header className="mb-4 flex border-b border-dotted border-gray-700">
      <h2 className="flex-grow text-4xl">
        <Link to="/">King Mob's Journal</Link>
      </h2>
      <ul className="flex flex-grow-0 justify-center items-center">{nav}</ul>
    </header>
  )
}

export default Header
