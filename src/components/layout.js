import React from "react"

import Header from "./header"
import Footer from "./footer"

export default ({ children }) => (
  <div className="container mx-auto">
    <Header />
    <main className="mb-4">{children}</main>
    <Footer />
  </div>
)
