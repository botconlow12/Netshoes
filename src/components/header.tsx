import Image from 'next/image'
import Logo from '../../public/logo.svg'
import Link from 'next/link'

export default function Header() {
  return (
    <Link
      href="/descontos-exclusivos"
      className="w-full relative flex justify-center p-6 bg-[#6900cc]"
    >
      <Image src={Logo} alt="logo" quality={100} className="z-20" />
    </Link>
  )
}
