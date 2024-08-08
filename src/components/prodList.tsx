import Image from 'next/image'
import Link from 'next/link'
import productsData from '../pages/products/products.json'

export default function ProdList() {
  return (
    <div className="w-full grid grid-cols-2 gap-4">
      {productsData.products.map((product) => {
        // Define a cor de fundo e o texto com base na quantidade
        const statusColor =
          product.stock === 0
            ? 'bg-[#ffdcdc] text-[#ff2e2e]' // Esgotado
            : product.stock <= 4
              ? 'bg-[#ffdcdc] text-[#ff2e2e]' // Vermelho para 1 a 4 unidades
              : product.stock <= 7
                ? 'bg-[#ffffc7] text-[#847900]' // Amarelo para 5 a 7 unidades
                : 'bg-[#d4f1d4] text-[#2e8b57]' // Verde para acima de 7 unidades

        const availabilityText =
          product.stock === 0 ? 'Esgotado' : `Restam ${product.stock} unidades`

        return (
          <Link
            key={product.id} // Use o id do produto como chave
            href={product.productPage || '/caixas-brancas'} // Valor padrão caso product.href seja undefined
            className="w-full h-[320px] flex flex-col items-center gap-2"
          >
            <div
              className="h-full flex flex-col justify-center gap-2 p-3 rounded-xl bg-white text-[#333]" // Fundo branco para o componente
              style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
            >
              <Image
                alt={product.title}
                src={product.bannerImg} // Corrigido para usar bannerImg
                quality={100}
                className="w-full h-auto rounded-md"
                width={640} // Largura para a imagem
                height={640} // Altura para a imagem
              />
              <h1 className="text-xs text-center font-bold text-[#333]">
                {product.title}
              </h1>
              <p
                className={`text-xs py-[3px] px-[8px] rounded-xl ${statusColor}`} // Ajuste de cor para o texto de disponibilidade
              >
                {availabilityText}
              </p>
              <div className="flex justify-between items-center">
                <p className="w-full text-left text-sm text-[#333] line-through">
                  R${product.price}
                </p>
                <h1 className="w-full text-left text-lg text-[#333] font-bold">
                  R${product.discount}
                </h1>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
