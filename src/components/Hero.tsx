export default function Hero() {
  return (
    <section id="home" className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-[url('/wires-7997980.jpg')] bg-contain bg-center bg-no-repeat"
          style={{ backgroundSize: '100%' }}
        ></div>
      </div>

      <div className="relative z-10 w-full h-full flex items-end" style={{ paddingBottom: '5vh' }}>
        <div
          className="animate-[fadeInUp_1s_ease-out]"
          style={{
            animationDelay: '0.2s',
            animationFillMode: 'both',
            paddingLeft: '4vw'
          }}
        >
          <img
            src="/KIVi_Antelopes_Logo.svg"
            alt="KIVI Antelopes Logo"
            style={{ height: '14vh' }}
            className="max-w-full"
          />
        </div>
      </div>

    </section>
  );
}
