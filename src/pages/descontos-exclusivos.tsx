import { useState } from 'react'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { Trophy } from 'phosphor-react'
import Header from '@/components/header'
import { Carroussel } from '@/components/carrousel'
import ProdList from '@/components/prodList'
import Footer from '@/components/footer'

// Define o tipo Gender compartilhado
type Gender = 'masculino' | 'feminino' | 'todos'

const inter = Inter({ subsets: ['latin'] })

export default function DescontosExclusivos() {
  const [selectedGender, setSelectedGender] = useState<Gender>('masculino')

  return (
    <>
      <Head>
        <title>Descontos Exclusivos - Netshoes</title>
        <meta name="Teste" content="Teste" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          async
          defer
        ></script>
      </Head>
      <main
        className={`w-full min-h-screen flex flex-col items-center justify-start text-center mx-auto bg-white ${inter.className}`}
      >
        <Header />
        <Carroussel />
        {/* Botões para selecionar o filtro */}
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => setSelectedGender('masculino')}
            className={`px-4 py-2 rounded ${
              selectedGender === 'masculino'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200'
            }`}
          >
            Masculino
          </button>
          <button
            onClick={() => setSelectedGender('feminino')}
            className={`px-4 py-2 rounded ${
              selectedGender === 'feminino'
                ? 'bg-pink-500 text-white'
                : 'bg-gray-200'
            }`}
          >
            Feminino
          </button>
          <button
            onClick={() => setSelectedGender('todos')}
            className={`px-4 py-2 rounded ${
              selectedGender === 'todos'
                ? 'bg-green-500 text-white'
                : 'bg-gray-200'
            }`}
          >
            Todos
          </button>
        </div>
        <div className="w-[90%] flex flex-col gap-4 mt-4">
          <div className="flex flex-col items-center">
            <Trophy size={32} color="#fc7a38" weight="fill" />
            <p className="text-sm">
              <u>Atenção:</u> Permitido apenas um pedido por CPF
            </p>
          </div>
          <ProdList selectedGender={selectedGender} />
        </div>
        <Footer />
      </main>
    </>
  )
}
