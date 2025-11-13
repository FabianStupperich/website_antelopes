export default function Hero() {
  return (
    <section id="home" className="relative flex items-center justify-center overflow-hidden max-h-[65vh]">
      <div className="relative w-full hidden md:block">
        <img
          src="/hero.png"
          alt="Hero background"
          className="w-full h-auto max-h-[65vh] object-contain"
          style={{ filter: 'brightness(0.75)' }}
        />
        <div className="absolute inset-0 flex items-end justify-start">
          <div
            className="animate-[fadeInUp_1s_ease-out] pl-[4vw] pb-[5vh]"
            style={{
              animationDelay: '0.2s',
              animationFillMode: 'both'
            }}
          >
            <img
              src="/Antelopes_Logo_neu.svg"
              alt="KIVI Antelopes Logo"
              style={{ height: '14vh' }}
              className="max-w-full"
            />
          </div>
        </div>
      </div>

      <div className="md:hidden relative z-10 w-full min-h-[85vh] flex items-center justify-center">
        <div
          className="animate-[fadeInUp_1s_ease-out]"
          style={{
            animationDelay: '0.2s',
            animationFillMode: 'both'
          }}
        >
          <img
            src="/Antelopes_Logo_neu.svg"
            alt="KIVI Antelopes Logo"
            style={{ height: '14vh' }}
            className="max-w-full"
          />
        </div>
      </div>

    </section>
  );
}
