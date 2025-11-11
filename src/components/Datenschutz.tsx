import Navbar from './Navbar';
import Footer from './Footer';
import { useLanguage } from '../contexts/LanguageContext';

export default function Datenschutz() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">
            {language === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}
          </h1>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              {language === 'de' ? '1. Datenschutz auf einen Blick' : '1. Data Protection at a Glance'}
            </h2>

            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {language === 'de' ? 'Allgemeine Hinweise' : 'General Information'}
            </h3>
            <p className="mb-4">
              {language === 'de'
                ? 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.'
                : 'The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to identify you personally. Detailed information on data protection can be found in our privacy policy listed below this text.'}
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {language === 'de' ? 'Datenerfassung auf dieser Website' : 'Data Collection on this Website'}
            </h3>

            <h4 className="text-base sm:text-lg font-semibold mb-2">
              {language === 'de' ? 'Wer ist verantwortlich für die Datenerfassung auf dieser Website?' : 'Who is responsible for data collection on this website?'}
            </h4>
            <p className="mb-4">
              {language === 'de'
                ? 'Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.'
                : 'Data processing on this website is carried out by the website operator. Their contact details can be found in the section "Notice on the Responsible Party" in this privacy policy.'}
            </p>

            <h4 className="text-base sm:text-lg font-semibold mb-2">
              {language === 'de' ? 'Wie erfassen wir Ihre Daten?' : 'How do we collect your data?'}
            </h4>
            <p className="mb-4">
              {language === 'de'
                ? 'Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.'
                : 'Your data is collected on the one hand by you providing it to us. This may be data that you enter into a contact form, for example.'}
            </p>
            <p className="mb-4">
              {language === 'de'
                ? 'Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.'
                : 'Other data is collected automatically or with your consent when you visit the website by our IT systems. This is primarily technical data (e.g. internet browser, operating system or time of page access). This data is collected automatically as soon as you enter this website.'}
            </p>

            <h4 className="text-base sm:text-lg font-semibold mb-2">
              {language === 'de' ? 'Wofür nutzen wir Ihre Daten?' : 'What do we use your data for?'}
            </h4>
            <p className="mb-4">
              {language === 'de'
                ? 'Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet.'
                : 'Some of the data is collected to ensure error-free provision of the website. Other data may be used to analyze your user behavior. If contracts can be concluded or initiated via the website, the transmitted data will also be processed for contract offers, orders or other order requests.'}
            </p>

            <h4 className="text-base sm:text-lg font-semibold mb-2">
              {language === 'de' ? 'Welche Rechte haben Sie bezüglich Ihrer Daten?' : 'What rights do you have regarding your data?'}
            </h4>
            <p className="mb-4">
              {language === 'de'
                ? 'Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.'
                : 'You have the right at any time to receive free information about the origin, recipient and purpose of your stored personal data. You also have the right to request the correction or deletion of this data. If you have given consent to data processing, you can revoke this consent at any time for the future. You also have the right to request the restriction of the processing of your personal data under certain circumstances. Furthermore, you have the right to lodge a complaint with the competent supervisory authority.'}
            </p>
            <p className="mb-4">
              {language === 'de'
                ? 'Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.'
                : 'You can contact us at any time regarding this and other questions about data protection.'}
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {language === 'de' ? 'Analyse-Tools und Tools von Drittanbietern' : 'Analysis Tools and Third-Party Tools'}
            </h3>
            <p className="mb-4">
              {language === 'de'
                ? 'Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.'
                : 'When you visit this website, your surfing behavior may be statistically analyzed. This is mainly done with so-called analysis programs.'}
            </p>
            <p className="mb-4">
              {language === 'de'
                ? 'Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.'
                : 'Detailed information on these analysis programs can be found in the following privacy policy.'}
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              {language === 'de' ? '2. Hosting' : '2. Hosting'}
            </h2>

            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {language === 'de' ? 'Externes Hosting' : 'External Hosting'}
            </h3>
            <p className="mb-4">
              {language === 'de'
                ? 'Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.'
                : 'This website is hosted externally. The personal data collected on this website is stored on the servers of the hoster(s). This may primarily include IP addresses, contact requests, meta and communication data, contract data, contact details, names, website access and other data generated via a website.'}
            </p>
            <p className="mb-4">
              {language === 'de'
                ? 'Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.'
                : 'External hosting is carried out for the purpose of contract fulfillment towards our potential and existing customers (Art. 6 para. 1 lit. b GDPR) and in the interest of secure, fast and efficient provision of our online offer by a professional provider (Art. 6 para. 1 lit. f GDPR). If appropriate consent has been requested, processing is carried out exclusively on the basis of Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TDDDG, insofar as the consent includes the storage of cookies or access to information in the user\'s end device (e.g. device fingerprinting) within the meaning of the TDDDG. Consent can be revoked at any time.'}
            </p>
            <p className="mb-4">
              {language === 'de'
                ? 'Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.'
                : 'Our hoster(s) will only process your data to the extent necessary to fulfill their performance obligations and follow our instructions regarding this data.'}
            </p>
            <p className="mb-4">
              {language === 'de' ? 'Wir setzen folgende(n) Hoster ein:' : 'We use the following hoster(s):'}
            </p>
            <p className="mb-2"><strong>Azure</strong></p>
            <p className="mb-2">Microsoft Corporation</p>
            <p className="mb-2">One Microsoft Way</p>
            <p className="mb-4">Redmond, WA 98052-6399 USA</p>

            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {language === 'de' ? 'Auftragsverarbeitung' : 'Data Processing Agreement'}
            </h3>
            <p className="mb-4">
              {language === 'de'
                ? 'Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.'
                : 'We have concluded a data processing agreement (DPA) for the use of the above-mentioned service. This is a contract required by data protection law that ensures that the service processes the personal data of our website visitors only in accordance with our instructions and in compliance with the GDPR.'}
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              {language === 'de' ? '3. Allgemeine Hinweise und Pflichtinformationen' : '3. General Information and Mandatory Information'}
            </h2>

            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {language === 'de' ? 'Datenschutz' : 'Data Protection'}
            </h3>
            <p className="mb-4">
              {language === 'de'
                ? 'Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.'
                : 'The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with statutory data protection regulations and this privacy policy.'}
            </p>
            <p className="mb-4">
              {language === 'de'
                ? 'Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.'
                : 'When you use this website, various personal data is collected. Personal data is data that can be used to identify you personally. This privacy policy explains what data we collect and what we use it for. It also explains how and for what purpose this is done.'}
            </p>
            <p className="mb-4">
              {language === 'de'
                ? 'Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.'
                : 'We would like to point out that data transmission over the Internet (e.g. when communicating by email) can have security vulnerabilities. Complete protection of data against access by third parties is not possible.'}
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {language === 'de' ? 'Hinweis zur verantwortlichen Stelle' : 'Notice on the Responsible Party'}
            </h3>
            <p className="mb-4">
              {language === 'de'
                ? 'Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:'
                : 'The responsible party for data processing on this website is:'}
            </p>
            <p className="mb-2"><strong>RWTH Aachen University</strong></p>
            <p className="mb-2">Templergraben 55</p>
            <p className="mb-2">52062 Aachen ({language === 'de' ? 'Hausanschrift' : 'Street address'})</p>
            <p className="mb-2">52056 Aachen ({language === 'de' ? 'Postanschrift' : 'Postal address'})</p>
            <p className="mb-2">{language === 'de' ? 'Telefon' : 'Phone'}: +49 241 80 1</p>
            <p className="mb-4">E-Mail: info@rwth-aachen.de</p>
            <p className="mb-4">
              {language === 'de'
                ? 'Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.'
                : 'The responsible party is the natural or legal person who alone or jointly with others determines the purposes and means of the processing of personal data (e.g. names, email addresses, etc.).'}
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
