import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './pages.css';

export default function TeamPage() {
  return (
    <div className="page-root">
      <div className="page-hero">
        <div className="page-hero-label">People</div>
        <h1>Our <span className="accent">Team</span></h1>
        <p className="page-hero-sub">
          Meet the students who are working together to bring the inaugural TEDxIntegralUniversity 
          to life through our theme, <strong>TESSELLATION</strong>.
        </p>
      </div>
      <section className="team-stats">
  <div className="stat-card">
    <h2>79+</h2>
    <p>Team Members</p>
  </div>

  <div className="stat-card">
    <h2>10</h2>
    <p>Departments</p>
  </div>

  <div className="stat-card">
    <h2>2</h2>
    <p>Organizing Coordinators</p>
  </div>

  <div className="stat-card">
    <h2>5</h2>
    <p>Core Committee</p>
  </div>
</section>

      <section className="team-section">
        <div className="section-divider"></div>

   <div className="team-section-header">

    <div className="team-section-header">

    <h2 className="section-title">
        Organizing <span className="accent">Coordinators</span>
    </h2>

  

</div>

    <p className="section-subtitle">
        The visionaries shaping the inaugural
        TEDxIntegralUniversity experience through leadership,
        innovation, and collaboration.
    </p>

</div>

    <div className="team-grid">
<div className="team-card">

    <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600"
        alt="Reem Hamraz"
        className="team-image"
    />

    <div className="team-overlay">

    <h3>Reem Hamraz</h3>

    <p className="team-role">
        Lead Organizer
    </p>

    <div className="team-divider"></div>

    <p className="team-event">
        TEDxIntegralUniversity
    </p>

</div>

</div>
<div className="team-card">

    <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600"
        alt="Mohamad Maaz Siddiqui"
        className="team-image"
    />

    <div className="team-overlay">

    <h3>Mohamad Maaz Siddiqui</h3>

    <p className="team-role">
        Co-Organizer
    </p>

    <div className="team-divider"></div>

    <p className="team-event">
        TEDxIntegralUniversity
    </p>

</div>

</div>
</div>


</section>
<section className="team-section">

    <div className="section-divider"></div>

    <div className="team-section-header">

        <h2 className="section-title">
            Core <span className="accent">Committee</span>
        </h2>

        <p className="section-subtitle">
            The strategic minds driving creativity, operations, logistics,
            and execution behind TEDxIntegralUniversity.
        </p>

    </div>

    <div className="team-grid">
      <div className="team-card">

    <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600"
        alt="Aliyah Mohammad Azam"
        className="team-image"
    />

    <div className="team-overlay">

    <h3>Aliyah Mohammad Azam</h3>

    <p className="team-role">
        Creative Specialist
    </p>

    <div className="team-divider"></div>

    <p className="team-event">
        TEDxIntegralUniversity
    </p>

</div>
</div>

    </div>

</section>
<Footer />
</div>
  );
}
