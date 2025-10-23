export default function Hero() {
  return (
    <section id="home" className="relative min-h-[70vh] sm:h-[85vh] flex items-center justify-center overflow-hidden bg-white sm:bg-transparent">
      <div className="absolute inset-0 hidden sm:block">
        <div
          className="absolute inset-0 bg-[url('/wires-7997980.jpg')] bg-contain bg-center bg-no-repeat"
          style={{ backgroundSize: '100%' }}
        ></div>
      </div>

      <div className="relative z-10 w-full h-full flex items-end pb-16 sm:pb-20 md:pb-24">
        <div
          className="pl-4 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20 animate-[fadeInUp_1s_ease-out]"
          style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
        >
          <img src="/KIVi_Antelopes_Logo.svg" alt="KIVI Antelopes Logo" className="h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56 max-w-full" />
        </div>
      </div>

    </section>
  );
}
