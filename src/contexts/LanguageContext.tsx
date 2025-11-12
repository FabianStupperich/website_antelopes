import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  de: {
    'nav.project': 'Projekt',
    'nav.consortium': 'Konsortium',
    'nav.publications': 'Publikationen',
    'nav.contact': 'Kontakt',
    'nav.news': 'News',
    'hero.title': 'KIVi Antelopes',
    'project.title': 'Das Projekt',
    'project.challenge.title': 'Die Herausforderung',
    'project.challenge.content': 'Die Bewertung der Versorgungssicherheit mit Elektrizität wird durch die Energiewende zunehmend komplexer. Hochkomplexe Simulationsmodelle, die alle relevanten Systemkomponenten wie erneuerbare Energien, Speicher und Sektorenkopplung berücksichtigen, benötigen für eine einzige Szenarioberechnung bis zu 8 Stunden. Diese extremen Rechenzeiten begrenzen die Anzahl untersuchbarer Szenarien drastisch und verhindern umfassende Analysen verschiedener Zukunftspfade. Gleichzeitig steigen die Anforderungen der europäischen Regulierungsbehörden an die Versorgungssicherheitsbewertung stetig – ein Dilemma zwischen Modellkomplexität und verfügbaren Rechenressourcen.',
    'project.solution.title': 'Der Lösungsansatz',
    'project.solution.content': 'KIVi Antelopes entwickelt KI-basierte Metamodelle, die komplexe Versorgungssicherheitsmodelle um mehrere Zehnerpotenzen beschleunigen können. Diese intelligenten Algorithmen lernen das Verhalten der ursprünglichen Simulationsmodelle und können deren Ergebnisse in Millisekunden mit hoher Genauigkeit vorhersagen. Durch die Kombination von maschinellem Lernen mit statistischen Methoden wie Design of Experiments und aktivem Lernen entstehen effiziente Tools, die den europäischen ERAA-Standard erfüllen. Das Ergebnis: Tausende von Szenarien können statt weniger Einzelfälle analysiert werden.',
    'project.goals.title': 'Projektziele',
    'project.goals.content': 'Das Projekt verfolgt vier zentrale Ziele: Erstens die radikale Beschleunigung aktueller Optimierungsmodelle für die Versorgungssicherheitsbewertung durch innovative Metamodellierung. Zweitens die Entwicklung ressourceneffizienter Trainings- und Validierungsverfahren für KI-basierte Modelle. Drittens die kontinuierliche Verbesserung der Metamodelle durch Algorithmen des aktiven Lernens für nachhaltigen Praxiseinsatz. Viertens die Bereitstellung einer webbasierten Analyseplattform sowie eines Open-Source-Frameworks mit Praxisleitfaden, um die entwickelten Methoden direkt für Netzbetreiber, Regulierungsbehörden und die Wissenschaft nutzbar zu machen.',
    'project.impact.title': 'Bedeutung für die Energiewende',
    'project.impact.content': 'Die Projektergebnisse ermöglichen eine deutlich robustere Planung des zukünftigen Energiesystems. Durch die drastische Beschleunigung der Modellrechnungen können erstmals umfassende Unsicherheitsanalysen und Sensitivitätsstudien durchgeführt werden, die für eine verlässliche Bewertung der Versorgungssicherheit in einem von erneuerbaren Energien geprägten System unerlässlich sind. Dies unterstützt fundierte Entscheidungen zum Ausbau von Kraftwerkskapazitäten, Speichern und Übertragungsnetzen. Gleichzeitig werden Black-Swan-Ereignisse und Klimawandeleffekte besser analysierbar, was die Resilienz des Stromversorgungssystems stärkt und die Energiewende beschleunigt.',
    'consortium.title': 'Konsortium',
    'consortium.profile': 'Kurzprofil',
    'consortium.role': 'Projektrolle',
    'consortium.partner1.profile': 'Der Lehrstuhl für Energiesystemökonomik (FCN-ESE, Leitung: Prof. Dr.-Ing. Aaron Praktiknjo) der RWTH Aachen University beschäftigt sich mit energiesystemischen Fragestellungen an der Schnittstelle zwischen Energieökonomik, Energiepolitik und Energietechnik. Die Wissenschaftler:innen des Lehrstuhls arbeiten an Fragestellungen zu den Themenkomplexen Wirtschaftlichkeit, Versorgungssicherheit und Umweltverträglichkeit. Als Werkzeuge zur Untersuchung solcher Fragestellungen bedienen sie sich aus einem breiten Portfolio an Methoden und Modellen der Energiesystemanalyse (Simulations- und Optimierungsmodelle, Input-Output-Modelle, stochastische Prognosemodelle, KI-basierte Methoden, Lebenszyklusanalysen, u.a.). ',
    'consortium.partner1.role': 'Der Lehrstuhl für Energiesystemökonomik übernimmt als Verbundkoordinator die wissenschaftliche Projektleitung und fokussiert sich auf die komplexitätsgerechte Versorgungssicherheitsbewertung sektorengekoppelter Energiesysteme. Als universitäre Forschungseinrichtung mit Expertise in der Modellierung hochkomplexer Energiesysteme entwickelt sie probabilistische Modelle basierend auf der ERAA-Methodik und führt modellvergleichende Fallstudien durch. Die RWTH verantwortet zudem das Projektmanagement, die Koordination der Arbeiten sowie die Durchführung von Stakeholder-Interviews zur Anforderungserhebung.',
    'consortium.partner2.profile': 'Das Forschungsinstitut Zentrum für Innovative Energiesysteme (ZIES, Leitung: Prof. Dr.-Ing. Mario Adam) an der Hochschule Düsseldorf beschäftigt sich seit 2016 verstärkt mit der Anwendung von KI-Methoden aus dem Bereich des maschinellen Lernens zur Optimierung von Energieversorgungsystemen. Der Fokus der Forschungs- und Entwicklungsarbeiten kann in die nachfolgenden Bereiche eingeteilt werden: Prognose von zeitlich aufgelösten Simulationseingangsgrößen (Time Series Forecasting), Reduzierung von Simulationsmodelllaufzeiten über Metamodellierung in Kombination mit Versuchsplanungsmethoden (Metamodeling & Design of Experiments), Optimierung der Struktur und Dimensionierung von Energieversorgungssystemen bei Planung bzw. Auslegung im Spannungsfeld von ökonomischen und ökologischen Zielgrößen (multikriterielle Optimierung) sowie die praxisnahe Entwicklung und Erprobung von intelligenten Optimierungs- und Regelungsverfahren im Online-Betrieb multivarianter Energiesysteme.',
    'consortium.partner2.role': 'Das Zentrum für Innovative Energiesysteme der HSD leitet die technische Entwicklung und Validierung der KI-basierten Metamodelle. Mit ihrer spezialisierten Expertise in maschinellem Lernen und Metamodellierung entwickelt die HSD maßgeschneiderte Lösungsansätze für die Approximation von ERAA-Modellen. Sie erprobt verschiedene methodische Ansätze zur teil- oder ganzheitlichen Approximation und integriert Design of Experiments sowie Algorithmen des aktiven Lernens in die Metamodellierung.',
    'consortium.partner3.profile': 'Die Volatile GmbH ist eine Ausgründung aus dem Lehrstuhl für Energiesystemökonomik an der RWTH Aachen University. Volatile entwickelt Software as a Service (SaaS)-Anwendungen für Energiedatenplattformen und Energiesystemanalysen und kombiniert dabei die Vorteile von Automatisierung und künstlicher Intelligenz mit State of the Art Methoden aus der energiesystemanalytischen Forschung. Mit dem volatile Data Hub wird Kunden aus den Bereichen Energiewirtschaft, energieintensive Industrie sowie Energieberatung eine Energiedatenplattform zu historischen und zukünftigen Entwicklungen im Energiesystem bereitgestellt. Mit den volatile On-Demand-Anwendungen wird ein niederschwelliger Zugang zu komplexen energiesystemanalytischen Werkzeugen angeboten. ',
    'consortium.partner3.role': 'Die Volatile GmbH fungiert als Brücke zwischen Forschung und Praxis. Das Unternehmen verantwortet den praxisorientierten Aufbau der Daten- und Plattforminfrastrukturen, stellt die benötigten Rechenressourcen bereit und entwickelt das webbasierte Anwendungstool. Als universitäres Spin-off arbeitet Volatile daran, dass die entwickelten Methoden in marktfähige Lösungen überführt werden können, wodurch ein nachhaltiger Transfer von der Theorie in die Praxis gewährleistet wird.',
    'news.title': 'Neuigkeiten',
    'news.all': 'Alle Neuigkeiten',
    'contact.title': 'KONTAKT',
    'contact.subtitle': 'Haben Sie Fragen zum Projekt KIVi-Antelopes oder möchten Sie mehr über unsere Forschungsarbeit erfahren? Wir freuen uns darauf, von Ihnen zu hören. Kontaktieren Sie uns gerne über die nachstehenden Kanäle und wir melden uns zeitnah bei Ihnen zurück.',
    'contact.heading': 'Kontakt',
    'contact.person': 'Ansprechpartner: Marius Tillmanns',
    'contact.phone': 'Telefon',
    'contact.email': 'E-Mail',
    'footer.home': 'Home',
    'footer.project': 'Das Projekt',
    'footer.impressum': 'Impressum',
    'footer.datenschutz': 'Datenschutz',
    'funding.program': 'Förderprogramm:',
    'funding.program.text': '8. Energieforschungsprogramms im Förderschwerpunkt Energiesystemanalyse, sektorübergreifende Systemmodellierung und -planung',
    'funding.code': 'Förderkennzeichen:',
    'publications.title': 'Publikationen',
    'publications.kivi.antelopes': 'KIVi Antelopes',
    'publications.kivi.01': 'KIVi 01',
    'publications.kivi.01.subtitle': 'Publikationen aus dem Vorgängerprojekt',
    'publications.nr': 'Nr.',
    'publications.title.column': 'Titel',
    'publications.authors': 'Autoren',
    'publications.date': 'Datum',
    'publications.link': 'Link',
    'publications.link.text': 'Zur Veröffentlichung',
    'publications.antelopes.1.title': 'Künstliche Intelligenz bei der Untersuchung der Versorgungssicherheit mit Elektrizität: Angewandte Metamodellierung für die robuste Optimierung der Resilienz und Adäquanz sektorengekoppelter hochkomplexer Energiesysteme (KIVi Antelopes)',
    'publications.antelopes.1.authors': 'Lehrstuhl für Energiesystemökonomik (FCN-ESE) - RWTH Aachen University',
    'publications.antelopes.1.date': ' September 2025',
    'publications.kivi01.1.title': 'Uplifting the Complexity of Analysis for Probabilistic Security of Electricity Supply Assessments using Artificial Neural Networks, Energy and AI, 100401.',
    'publications.kivi01.1.authors': 'Münch, J., Priesmann, J., Reich, M., Tillmanns, M., Praktiknjo, A., Adam, M.',
    'publications.kivi01.1.date': '2024',
    'publications.kivi01.2.title': 'Artificial intelligence and design of experiments for resource adequacy assessment in power systems, Energy Strategy Reviews, 53, 101368.',
    'publications.kivi01.2.authors': 'Priesmann, J., Münch, J., Tillmanns, M., Ridha, E., Spiegel, T., Reich, M., Adam, M., Nolting, L., Praktiknjo, A.',
    'publications.kivi01.2.date': '2024',
    'publications.kivi01.3.title': 'The Potential of Deep Learning to Reduce Complexity in Energy System Modeling, International Journal of Energy Research.',
    'publications.kivi01.3.authors': 'Köhnen, C. S., Priesmann, J., Nolting, L., Kotzur, L., Robinius, M., Praktiknjo, A.',
    'publications.kivi01.3.date': '2021',
    'publications.kivi01.4.title': 'The complexity dilemma – Insights from security of electricity supply assessments. Energy, 122522.',
    'publications.kivi01.4.authors': 'Nolting, L., Praktiknjo, A.',
    'publications.kivi01.4.date': '2021',
    'publications.kivi01.5.title': 'How to Model European Electricity Load Profiles using Artificial Neural Networks, Applied Energy, 277, 115564.',
    'publications.kivi01.5.authors': 'Behm, C., Nolting, L., Praktiknjo, A.',
    'publications.kivi01.5.date': '2020',
    'publications.kivi01.6.title': 'Can Energy System Modeling Benefit from Artificial Neural Networks? Application of Two-stage Metamodels to Reduce Computation of Security of Supply Assessments, Computers & Industrial Engineering, 142.',
    'publications.kivi01.6.authors': 'Nolting, L., Spiegel, T., Reich, M., Adam, M., Praktiknjo, A.',
    'publications.kivi01.6.date': '2020'
  }, 
  en: {
    'nav.project': 'Project',
    'nav.consortium': 'Consortium',
    'nav.publications': 'Publications',
    'nav.contact': 'Contact',
    'nav.news': 'News',
    'hero.title': 'KIVi Antelopes',
    'project.title': 'The Project',
    'project.challenge.title': 'The Challenge',
    'project.challenge.content': 'Assessing electricity security of supply is becoming increasingly complex due to the energy transition. Highly complex simulation models that consider all relevant system components such as renewable energies, storage and sector coupling require up to 8 hours for a single scenario calculation. These extreme computing times drastically limit the number of scenarios that can be investigated and prevent comprehensive analyses of different future pathways. At the same time, the requirements of European regulatory authorities for security of supply assessment are constantly increasing – a dilemma between model complexity and available computing resources.',
    'project.solution.title': 'The Solution Approach',
    'project.solution.content': 'KIVi Antelopes develops AI-based metamodels that can accelerate complex security of supply models by several orders of magnitude. These intelligent algorithms learn the behavior of the original simulation models and can predict their results in milliseconds with high accuracy. By combining machine learning with statistical methods such as Design of Experiments and active learning, efficient tools are created that meet the European ERAA standard. The result: thousands of scenarios can be analyzed instead of just a few individual cases.',
    'project.goals.title': 'Project Goals',
    'project.goals.content': 'The project pursues four central objectives: First, the radical acceleration of current optimization models for security of supply assessment through innovative metamodeling. Second, the development of resource-efficient training and validation procedures for AI-based models. Third, the continuous improvement of metamodels through active learning algorithms for sustainable practical use. Fourth, the provision of a web-based analysis platform and an open-source framework with practical guidelines to make the developed methods directly usable for grid operators, regulatory authorities and the scientific community.',
    'project.impact.title': 'Significance for the Energy Transition',
    'project.impact.content': 'The project results enable significantly more robust planning of the future energy system. The drastic acceleration of model calculations makes it possible for the first time to carry out comprehensive uncertainty analyses and sensitivity studies that are essential for a reliable assessment of security of supply in a system characterized by renewable energies. This supports well-founded decisions on the expansion of power plant capacities, storage facilities and transmission networks. At the same time, black swan events and climate change effects can be better analyzed, which strengthens the resilience of the electricity supply system and accelerates the energy transition.',
    'consortium.title': 'Consortium',
    'consortium.profile': 'Profile',
    'consortium.role': 'Project Role',
    'consortium.partner1.profile': 'The Chair of Energy Systems Economics (FCN-ESE, Director: Prof. Dr.-Ing. Aaron Praktiknjo) at RWTH Aachen University focuses on energy system issues at the interface between energy economics, energy policy and energy technology. The researchers at the chair work on issues related to economic efficiency, security of supply and environmental compatibility. As tools for investigating such questions, they draw on a broad portfolio of methods and models for energy system analysis (simulation and optimization models, input-output models, stochastic forecast models, AI-based methods, life cycle analyses, etc.).',
    'consortium.partner1.role': 'As consortium coordinator, the Chair of Energy Systems Economics assumes scientific project leadership and focuses on the complexity-appropriate security of supply assessment of sector-coupled energy systems. As a university research institution with expertise in modeling highly complex energy systems, it develops probabilistic models based on the ERAA methodology and conducts model-comparative case studies. RWTH is also responsible for project management, coordination of work and conducting stakeholder interviews for requirements gathering.',
    'consortium.partner2.profile': 'The research institute Center for Innovative Energy Systems (ZIES, Director: Prof. Dr.-Ing. Mario Adam) at Düsseldorf University of Applied Sciences has been increasingly focusing on the application of AI methods from the field of machine learning for optimizing energy supply systems since 2016. The focus of research and development work can be divided into the following areas: forecasting of time-resolved simulation input variables (time series forecasting), reduction of simulation model running times through metamodeling in combination with design of experiments methods (Metamodeling & Design of Experiments), optimization of the structure and dimensioning of energy supply systems during planning or design in the field of tension between economic and ecological objectives (multi-criteria optimization) as well as the practice-oriented development and testing of intelligent optimization and control procedures in online operation of multivariate energy systems.',
    'consortium.partner2.role': 'The Center for Innovative Energy Systems at HSD leads the technical development and validation of AI-based metamodels. With their specialized expertise in machine learning and metamodeling, HSD develops customized solution approaches for approximating ERAA models. They test various methodological approaches for partial or holistic approximation and integrate Design of Experiments and active learning algorithms into metamodeling.',
    'consortium.partner3.profile': 'Volatile GmbH is a spin-off from the Chair of Energy Systems Economics at RWTH Aachen University. Volatile develops Software as a Service (SaaS) applications for energy data platforms and energy system analyses, combining the advantages of automation and artificial intelligence with state-of-the-art methods from energy system analytical research. With the volatile Data Hub, customers from the energy industry, energy-intensive industry and energy consulting are provided with an energy data platform for historical and future developments in the energy system. With the volatile on-demand applications, low-threshold access to complex energy system analytical tools is offered.',
    'consortium.partner3.role': 'Volatile GmbH acts as a bridge between research and practice. The company is responsible for the practice-oriented development of data and platform infrastructures, provides the necessary computing resources and develops the web-based application tool. As a university spin-off, Volatile works to ensure that the developed methods can be transferred into marketable solutions, thus guaranteeing sustainable transfer from theory to practice.',
    'news.title': 'News',
    'news.all': 'All News',
    'contact.title': 'CONTACT',
    'contact.subtitle': 'Do you have questions about the KIVi-Antelopes project or would you like to learn more about our research work? We look forward to hearing from you. Please contact us via the channels below and we will get back to you promptly.',
    'contact.heading': 'Contact',
    'contact.person': 'Contact Person: Marius Tillmanns',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'footer.home': 'Home',
    'footer.project': 'The Project',
    'footer.impressum': 'Imprint',
    'footer.datenschutz': 'Privacy Policy',
    'funding.program': 'Funding Program:',
    'funding.program.text': '8th Energy Research Program in the priority area Energy System Analysis, cross-sectoral system modeling and planning',
    'funding.code': 'Funding Code:',
    'publications.title': 'Publications',
    'publications.kivi.antelopes': 'KIVi Antelopes',
    'publications.kivi.01': 'KIVi 01',
    'publications.kivi.01.subtitle': 'Publications from the predecessor project',
    'publications.nr': 'No.',
    'publications.title.column': 'Title',
    'publications.authors': 'Authors',
    'publications.date': 'Date',
    'publications.link': 'Link',
    'publications.link.text': 'To Publication',
    'publications.antelopes.1.title': 'Artificial intelligence in the investigation of electricity supply security: Applied metamodeling for the robust optimization of the resilience and adequacy of highly complex, sector-coupled energy systems (KIVi Antelopes)',
    'publications.antelopes.1.authors': 'Chair for Energy Systems Economics (FCN-ESE) - RWTH Aachen University',
    'publications.antelopes.1.date': 'September 2025',
    'publications.kivi01.1.title': 'Münch, J., Priesmann, J., Reich, M., Tillmanns, M., Praktiknjo, A., Adam, M. (2024). Uplifting the Complexity of Analysis for Probabilistic Security of Electricity Supply Assessments using Artificial Neural Networks, Energy and AI, 100401.',
    'publications.kivi01.1.authors': 'Münch, J., Priesmann, J., Reich, M., Tillmanns, M., Praktiknjo, A., Adam, M.',
    'publications.kivi01.1.date': '2024',
    'publications.kivi01.2.title': 'Priesmann, J., Münch, J., Tillmanns, M., Ridha, E., Spiegel, T., Reich, M., Adam, M., Nolting, L., Praktiknjo, A. (2024). Artificial intelligence and design of experiments for resource adequacy assessment in power systems, Energy Strategy Reviews, 53, 101368.',
    'publications.kivi01.2.authors': 'Priesmann, J., Münch, J., Tillmanns, M., Ridha, E., Spiegel, T., Reich, M., Adam, M., Nolting, L., Praktiknjo, A.',
    'publications.kivi01.2.date': '2024',
    'publications.kivi01.3.title': 'Köhnen, C. S., Priesmann, J., Nolting, L., Kotzur, L., Robinius, M., Praktiknjo, A. (2021). The Potential of Deep Learning to Reduce Complexity in Energy System Modeling, International Journal of Energy Research.',
    'publications.kivi01.3.authors': 'Köhnen, C. S., Priesmann, J., Nolting, L., Kotzur, L., Robinius, M., Praktiknjo, A.',
    'publications.kivi01.3.date': '2021',
    'publications.kivi01.4.title': 'Nolting, L., Praktiknjo, A. (2021). The complexity dilemma – Insights from security of electricity supply assessments. Energy, 122522.',
    'publications.kivi01.4.authors': 'Nolting, L., Praktiknjo, A.',
    'publications.kivi01.4.date': '2021',
    'publications.kivi01.5.title': 'Behm, C., Nolting, L., Praktiknjo, A. (2020). How to Model European Electricity Load Profiles using Artificial Neural Networks, Applied Energy, 277, 115564.',
    'publications.kivi01.5.authors': 'Behm, C., Nolting, L., Praktiknjo, A.',
    'publications.kivi01.5.date': '2020',
    'publications.kivi01.6.title': 'Nolting, L., Spiegel, T., Reich, M., Adam, M., Praktiknjo, A. (2020). Can Energy System Modeling Benefit from Artificial Neural Networks? Application of Two-stage Metamodels to Reduce Computation of Security of Supply Assessments, Computers & Industrial Engineering, 142.',
    'publications.kivi01.6.authors': 'Nolting, L., Spiegel, T., Reich, M., Adam, M., Praktiknjo, A.',
    'publications.kivi01.6.date': '2020'
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'en' || saved === 'de') ? saved : 'de';
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
