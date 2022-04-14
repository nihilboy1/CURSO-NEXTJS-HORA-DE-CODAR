import React from 'react'

import Link from 'next/link'

const Layout = props => {
  return (
    <div style={{
      backgroundColor: props.backgroundColor ?? "black"
    }}>
      <Link href={'/'}>To Home</Link>
      {props.children}
      <div
        style={{
          padding: props.padding ?? '5px'
        }}
      >
        aaaa
      </div>
    </div>
  )
}

export default Layout
