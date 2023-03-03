type FooterProps = {
  name: string
  href: string
}
const navigation: FooterProps[] = [
  { name: '@2022 Xnapper.com', href: '#' },
  { name: 'Twitter:@XnapperLCC', href: '#' },
  { name: 'License Manager', href: '#' },
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms Of Service', href: '#' },
  { name: 'Well Of Love', href: '#' },
]


export default function Footer() {
  return (
    <footer className="w-full bottom-00 bg-cyan-900">
      <div className="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mt-8 mb-20 xl:mt-0">
          <h3 className="text-2xl font-semibold text-white">Get notified on our new update </h3>
          <form className="mt-4 sm:flex sm:max-w-md">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className="w-full min-w-0 px-4 py-2 text-base text-gray-900 placeholder-gray-800 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-indigo-500"
              placeholder="sam@example.com"
            />
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md bg-violet-600 hover:bg-violet-600 focus:ring-2 focus:bg-violet-600 focus:ring-offset-2"
              >
                Subscribe
              </button>
            </div>
          </form>
          <p className="mt-1 text-base text-gray-400">
            The latest news sent to your inbox weekly.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center -mx-5 -my-2" aria-label="Footer">
          {navigation.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a href={item.href} className="text-base text-gray-400 hover:text-gray-300">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-2 text-base text-center text-gray-400">Sl cow:: support@Xnapper.com</p>
      </div>
    </footer>
  )
}
