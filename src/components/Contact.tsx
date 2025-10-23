export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">KONTAKT</h2>
            <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm">
              Haben Sie Fragen zum Projekt KIVi-Antelopes oder möchten Sie mehr über unsere Forschungsarbeit erfahren? Wir freuen uns darauf, von Ihnen zu hören. Kontaktieren Sie uns gerne über die nachstehenden Kanäle und wir melden uns zeitnah bei Ihnen zurück.
            </p>
          </div>

          <div className="bg-gray-50 p-4 sm:p-6 rounded">
            <h3 className="text-base font-bold text-gray-900 mb-3 sm:mb-4">Kontakt</h3>
            <div className="space-y-3 sm:space-y-4 text-sm">
              <div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">Lehrstuhl für Energiesystemökonomik (FCN-ESE)</h4>
                <h4 className="text-gray-900 mb-1 text-sm">E.ON Energy Research Center</h4>
                <h4 className="text-gray-900 mb-1 text-sm">RWTH Aachen University</h4> <br />
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">Ansprechpartner: Marius Tillmanns</h4> 
               </div>
              <div> 
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">Telefon</h4>
                <p className="text-gray-600 text-sm">
                  +49 241 80-49873
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">E-Mail</h4>
                <p className="text-gray-600 text-sm">
                  marius.tillmanns@eonerc.rwth-aachen.de
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
