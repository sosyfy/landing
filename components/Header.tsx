import Link from "next/link"

type NavProps = {
    name: string
    href: string 
}

const navigation: NavProps[] = [
    { name: 'Love', href: '#' },
    { name: 'iOS(Beta)', href: '#' },
    { name: 'Changelog', href: '#' },
    { name: 'Pricing', href: '#' },
  ]
  
  export default function Header() {
    return (
      <header className="bg-[#121A35]">
        <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" aria-label="Top">
          <div className="flex items-center justify-between w-full py-6 lg:border-none">
            <div className="flex items-center">
              <a href="#">
                <span className="sr-only">Your Company</span>
                <img className="w-auto h-10" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="" />
              </a>
            </div>
            <div className="flex items-center space-x-8">
              <div className="hidden space-x-8 lg:block">
                {navigation.map((link) => (
                  <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                    {link.name}
                  </a>
                ))}
              </div>
              <a
                href="#"
                className="inline-block px-4 py-2 text-base font-medium text-white bg-purple-500 border border-transparent rounded-md hover:bg-opacity-75"
              >
                Download App
              </a>
              
            </div>
          </div>
          <div className="flex flex-wrap justify-center py-4 space-x-6 lg:hidden">
            {navigation.map((link) => (
              <Link key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    )
  }
  