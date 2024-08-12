import Header from '@/components/header'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Netshoes</title>
        <meta
          name="description"
          content="Participe do nosso quiz sobre esportes e ajude a arrecadar dinheiro para doações. 50% do valor gerado será destinado a causas sociais!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          async
          defer
        ></script>
      </Head>
      <main
        className={`w-full min-h-screen flex flex-col items-center justify-start gap-12 ${inter.className}`}
      >
        <Header />
        <div className="w-[95%] flex flex-col justify-center items-center text-center py-8 px-5 bg-white rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold underline text-[#30006b] mb-5">
            Desafio Aniversário Netshoes!
          </h1>
          <p className="text-lg text-black mb-4">
            <u>Participe</u> do nosso <b>emocionante desafio</b> sobre{' '}
            <b>esportes</b> e ganhe acesso a <b>descontos exclusivos</b>!
          </p>
          <p className="text-lg text-black mb-4">
            <b>Ao completar o desafio com sucesso,</b> você terá acesso a{' '}
            <b>descontos exclusivos</b> em nossos <u>produtos</u> e ajudará a
            arrecadar{' '}
            <u>
              dinheiro para <b>doações</b>.
            </u>
          </p>
          <p className="text-lg text-black mb-4">
            <b>50% do valor gerado</b> com as vendas será destinado a{' '}
            <b>causas sociais</b>.
          </p>

          <a
            href="/quiz"
            className="w-full px-6 py-3 bg-[#30006b] text-xl text-white text-center font-semibold rounded hover:bg-[#200048] transition-colors"
          >
            COMEÇAR DESAFIO!
          </a>
        </div>
      </main>
    </>
  )
}
