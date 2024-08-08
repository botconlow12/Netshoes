import Image from 'next/image'
import Slider from 'react-slick'
import Banner1 from '../../public/banner1.webp'
import Banner2 from '../../public/banner2.webp'
import Banner3 from '../../public/banner3.webp'
import Dep from './dep'
import Dep1 from '../../public/dep1.webp'

export function Carroussel() {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1500,
    pauseOnHover: true,
    adaptiveHeight: true,
  }
  return (
    <Slider {...settings} className="w-full">
      <Image alt="banner" src={Banner1} quality={100} />
      <Image alt="banner" src={Banner2} quality={100} />
      <Image alt="banner" src={Banner3} quality={100} />
    </Slider>
  )
}

export function Carroussel2() {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1500,
    pauseOnHover: true,
    adaptiveHeight: true,
  }
  return (
    <Slider {...settings} className="w-full shadow-2xl rounded-xl mb-4">
      <Dep
        name="Juliano S."
        time="há 20 minutos"
        desc="Comprei esse tênis de corrida por aqui e estou muito satisfeito, o tênis é muito confortável mesmo. Valeu cada centavo!"
        picture={Dep1}
        ammount={47}
      />
      <Dep
        name="Beatriz L."
        time="há 3 horas"
        desc="Achei que a entrega seria demorada, mas chegou super rápido. O material das roupas é excelente. Estou muito contente!"
        ammount={76}
      />
      <Dep
        name="Ricardo F."
        time="há 1 hora"
        desc="Jurava que não ia chegar a tempo para minha competição, mas chegou sim."
        ammount={61}
      />
      <Dep
        name="Gustavo M."
        time="há 6 horas"
        desc="Comprei uma bola de futebol e um par de luvas, ambos de ótima qualidade super recomendo!"
        ammount={88}
      />
      <Dep
        name="Camila R."
        time="há 1 dia"
        desc="Comprei uma mochila aqui e adorei. A variedade de produtos é perfeita para quem ama se exercitar!"
        ammount={94}
      />
    </Slider>
  )
}
