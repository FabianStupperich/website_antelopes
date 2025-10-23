import Navbar from './Navbar';
import Footer from './Footer';
import Consortium from './Consortium';

export default function KonsortiumPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        <Consortium />
      </div>
      <Footer />
    </div>
  );
}
