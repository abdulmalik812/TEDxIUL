import Link from 'next/link';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import './pages.css';

export default function ContactPage() {
  return (
    <div className="page-root">
      <div className="page-hero">
        <div className="page-hero-label">Say Hello</div>
        <h1>Get In <span className="accent">Touch</span></h1>
        <p className="page-hero-sub">
          Have a question or want to collaborate? We'd love to hear from you.
        </p>
      </div>

      <div className="page-wrap" style={{ paddingTop: '0' }}>
        <Link href="/" className="page-back-link">Home</Link>
        <Contact hideHeader={true} />
      </div>

      <Footer />
    </div>
  );
}
