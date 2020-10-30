import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Sobre = () => {
  return (
    <div>
      <PageTitle title='Sobre' />
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </div>
    </div>

  )
}

export default Sobre