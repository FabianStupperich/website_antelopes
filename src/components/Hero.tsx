export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-white sm:bg-transparent">
      <div className="absolute inset-0 hidden sm:block">
        <div
          className="absolute inset-0 bg-[url('/wires-7997980.jpg')] bg-cover sm:bg-contain bg-center bg-no-repeat"
        ></div>
      </div>

      <div className="relative z-10 w-full h-full flex items-end pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div
          className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 animate-[fadeInUp_1s_ease-out]"
          style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
        >
          <img
            src="/KIVi_Antelopes_Logo.svg"
            alt="KIVI Antelopes Logo"
            className="w-auto h-20 sm:h-28 md:h-36 lg:h-44 xl:h-52 2xl:h-56 max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]"
          />
        </div>
      </div>

    </section>
  );
}
