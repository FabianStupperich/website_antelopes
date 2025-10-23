import Navbar from './Navbar';
import Footer from './Footer';
import ConsortiumDetailed from './ConsortiumDetailed';

export default function KonsortiumPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        <ConsortiumDetailed />
      </div>
      <Footer />
    </div>
  );
}
