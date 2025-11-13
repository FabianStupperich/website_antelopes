export default function Hero() {
  return (
    <section id="home" className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hidden xl:block">
        <div
          className="absolute inset-0 bg-[url('/hero.png')] bg-contain bg-center bg-no-repeat"
          style={{ backgroundSize: '100%', filter: 'brightness(0.75)' }}
        ></div>
      </div>

      <div className="relative z-10 w-full h-full flex items-center md:items-end justify-center md:justify-start" style={{ paddingBottom: '0', paddingLeft: '0' }}>
        <div
          className="animate-[fadeInUp_1s_ease-out] md:pl-[4vw] md:pb-[5vh]"
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
