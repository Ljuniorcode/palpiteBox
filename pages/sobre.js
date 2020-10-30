import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Sobre = () => {
  return (
    <div>
      <PageTitle title='Sobre' />
      <div>
        <h2 className='text-center'>O palpite-box é um site feito para estabelecimentos que querem se aproximar mais
        dos seus clientes, sendo assim, ele consiste em coletar sugestões e críticas dos clientes e
          em troca, o cliente recebe um cupom de desconto! <br /><br />Todas as
          informações são armazenadas em uma planilha disponiblizada em tempo real ao
          dono do estabelecimento!</h2>
      </div>
    </div>

  )
}

export default Sobre