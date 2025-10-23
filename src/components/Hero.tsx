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

    </section>
  );
}
