export default function Hero() {
  return (
    <section id="home" className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-white sm:bg-transparent">
      <div className="absolute inset-0 hidden sm:block">
        <div
          className="absolute inset-0 bg-[url('/wires-7997980.jpg')] bg-contain bg-center bg-no-repeat"
          style={{ backgroundSize: '100%' }}
        ></div>
      </div>

      <div className="relative z-10 w-full h-full flex items-end pb-20 sm:pb-24">
        <div
          className="pl-6 sm:pl-12 md:pl-16 lg:pl-20 animate-[fadeInUp_1s_ease-out]"
          style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
        >
          <img src="/KIVi_Antelopes_Logo.svg" alt="KIVI Antelopes Logo" className="h-28 sm:h-36 md:h-48 lg:h-56" />
        </div>
      </div>

      <div
        className="absolute bottom-4 sm:bottom-8 left-4 sm:left-6 right-4 sm:right-6 flex justify-center gap-4 sm:gap-8 text-gray-900 sm:text-black text-xs sm:text-sm animate-[fadeIn_1s_ease-out]"
        style={{ animationDelay: '1s', animationFillMode: 'both' }}
      >
        <a href="/impressum" className="hover:underline transition-all sm:hover:text-black">Impressum</a>
        <a href="/datenschutz" className="hover:underline transition-all  sm:hover:text-black">Datenschutz</a>
        <a href="#contact" className="hover:underline transition-all  sm:hover:text-black">Kontakt</a>
      </div>
    </section>
  );
}
