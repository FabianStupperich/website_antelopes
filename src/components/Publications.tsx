import Navbar from './Navbar';
import Footer from './Footer';
import { ExternalLink } from 'lucide-react';

export default function Publications() {
  const publications = [
    {
      id: 1,
      number: 1,
      title: 'Künstliche Intelligenz bei der Untersuchung der Versorgungssicherheit mit Elektrizität: Angewandte Metamodellierung für die robuste Optimierung der Resilienz und Adäquanz sektorengekoppelter hochkomplexer Energiesysteme (KIVi Antelopes)',
      authors: 'Lehrstuhl für Energiesystemökonomik (FCN-ESE) - RWTH Aachen University',
      date: ' September 2025',
      link: 'https://www.fcn.eonerc.rwth-aachen.de/cms/e-on-erc-fcn/forschung/forschungsprojekte/-neu-forschungsprojekte-fcn-ese/~bqeiri/kivi-antelopes/'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <div className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-5xl font-black text-gray-900 mb-16">Publikationen</h1>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-12 gap-6 p-6 bg-gray-50 border-b border-gray-200 font-semibold text-gray-600 text-sm">
              <div className="col-span-1">Nr.</div>
              <div className="col-span-4">Titel</div>
              <div className="col-span-3">Autoren</div>
              <div className="col-span-2">Datum</div>
              <div className="col-span-2">Link</div>
            </div>

            {publications.map((item) => (
              <div key={item.id} className="grid grid-cols-12 gap-6 p-6 items-center border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <div className="col-span-1 text-gray-900 font-medium">{item.number}</div>
                <div className="col-span-4 text-gray-900 font-semibold">{item.title}</div>
                <div className="col-span-3 text-gray-700">{item.authors}</div>
                <div className="col-span-2 text-gray-900 font-medium">{item.date}</div>
                <div className="col-span-2">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-medium transition-colors"
                  >
                    <span>Zur Veröffentlichung</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
