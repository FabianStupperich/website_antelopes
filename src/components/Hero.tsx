export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-white sm:bg-transparent">
      <div className="absolute inset-0 hidden sm:block">
        <div
          className="absolute inset-0 bg-[url('/wires-7997980.jpg')] bg-contain bg-center bg-no-repeat"
          style={{ backgroundSize: '100%' }}
        ></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 py-20 sm:py-32">
        <div
          className="mb-16 sm:mb-24 mt-8 sm:mt-12 flex justify-center sm:justify-start sm:ml-0 md:ml-32 lg:ml-64 animate-[fadeInUp_1s_ease-out]"
          style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
        >
          <img src="/VaeluesLogo.svg" alt="VAELUES Logo" className="h-24 sm:h-32 md:h-48 lg:h-56 sm:hidden" />
          <img src="/VaeluesLogoWeiss.svg" alt="VAELUES Logo" className="h-24 sm:h-32 md:h-48 lg:h-56 hidden sm:block" />
        </div>

        <div className="hidden sm:flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto">
          {[
            { logo: '/LOGO_ESE.png', url: 'https://www.fcn.eonerc.rwth-aachen.de/cms/~dndh/E-ON-ERC-FCN/' },
            { logo: '/LogoIAEW.png', url: 'https://www.iaew.rwth-aachen.de/' },
            { logo: '/MAON.png', url: 'https://www.maon.eu/' },
            { logo: '/volatile_white.svg', url: 'https://www.volatile.de/' }
          ].map((partner, index) => (
            <a
              key={partner.logo}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 sm:mb-4 mt-1 sm:mt-2 animate-[fadeInUp_1s_ease-out] hover:opacity-80 transition-opacity"
              style={{
                animationDelay: `${0.4 + index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              <img src={partner.logo} alt="Partner Logo" className="h-8 sm:h-10 md:h-12 lg:h-12" />
            </a>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-4 sm:bottom-8 left-4 sm:left-6 right-4 sm:right-6 flex justify-center gap-4 sm:gap-8 text-gray-900 sm:text-white text-xs sm:text-sm animate-[fadeIn_1s_ease-out]"
        style={{ animationDelay: '1s', animationFillMode: 'both' }}
      >
        <a href="/impressum" className="hover:underline transition-all hover:text-pink-600 sm:hover:text-pink-300">Impressum</a>
        <a href="/datenschutz" className="hover:underline transition-all hover:text-pink-600 sm:hover:text-pink-300">Datenschutz</a>
        <a href="#contact" className="hover:underline transition-all hover:text-pink-600 sm:hover:text-pink-300">Kontakt</a>
      </div>
    </section>
  );
}
