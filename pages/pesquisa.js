import React from 'react'
import Link from 'next/link'

const Pesquisa = () => {
  return (
    <div>
      <h1>Página de pesquisa</h1>
      <div>
        <Link href='/'>
          <a>
            Home
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Pesquisa