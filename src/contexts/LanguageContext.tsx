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
    'publications.link.text': 'Zur Veröffentlichung'
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
    'consortium.profile': 'Brief Profile',
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
    'footer.impressum': 'Legal Notice',
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
    'publications.link.text': 'To Publication'
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('de');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
