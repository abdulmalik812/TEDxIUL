import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './pages.css';

const SPEAKERS = [
  {
    id: 'sp-1',
    name: 'Speaker TBA',
    topic: 'Topic to be announced',
    designation: 'Featured Speaker',
    org: 'Organisation TBA',
    bio: 'Details about this speaker will be announced soon. Stay tuned for a lineup of visionary thinkers and change-makers joining us at TEDxIntegralUniversity 2026.',
    photo: null,
    tag: 'Featured Speaker',
  },
  {
    id: 'sp-2',
    name: 'Speaker TBA',
    topic: 'Topic to be announced',
    designation: 'Speaker',
    org: 'Organisation TBA',
    bio: 'Details about this speaker will be announced soon. Stay tuned for a lineup of visionary thinkers and change-makers joining us at TEDxIntegralUniversity 2026.',
    photo: null,
    tag: 'Speaker',
  },
  {
    id: 'sp-3',
    name: 'Speaker TBA',
    topic: 'Topic to be announced',
    designation: 'Speaker',
    org: 'Organisation TBA',
    bio: 'Details about this speaker will be announced soon. Stay tuned for a lineup of visionary thinkers and change-makers joining us at TEDxIntegralUniversity 2026.',
    photo: null,
    tag: 'Speaker',
  },
  {
    id: 'sp-4',
    name: 'Speaker TBA',
    topic: 'Topic to be announced',
    designation: 'Speaker',
    org: 'Organisation TBA',
    bio: 'Details about this speaker will be announced soon. Stay tuned for a lineup of visionary thinkers and change-makers joining us at TEDxIntegralUniversity 2026.',
    photo: null,
    tag: 'Speaker',
  },
];

function PersonIcon() {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}

export default function SpeakersPage() {
  return (
    <div className="page-root">
      <div className="page-hero">
        <div className="page-hero-label">Speakers</div>
        <h1>Meet the <span className="accent">Speakers</span></h1>
        <p className="page-hero-sub">
          Incredible thinkers, innovators, and storytellers sharing ideas worth spreading at TEDxIntegralUniversity 2026.
        </p>
      </div>

      <div className="page-wrap">
        <Link to="/" className="page-back-link">Home</Link>

        <div className="speakers-page-grid">
          {SPEAKERS.map((speaker) => (
            <div key={speaker.id} className="speaker-card">
              <div className="speaker-card-photo">
                {speaker.photo ? (
                  <img src={speaker.photo} alt={speaker.name} />
                ) : (
                  <div className="speaker-card-photo-placeholder">
                    <PersonIcon />
                    <span>Photo Coming Soon</span>
                  </div>
                )}
              </div>
              <div className="speaker-card-body">
                <div className="speaker-card-topic">"{speaker.topic}"</div>
                <div className="speaker-card-name">{speaker.name}</div>
                <div className="speaker-card-designation">
                  {speaker.designation} · {speaker.org}
                </div>
                <div className="speaker-card-bio">{speaker.bio}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '64px' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '20px' }}>
            Speaker announcements coming soon — follow us for updates.
          </p>
          <Link to="/register" className="btn-primary">Register to Attend</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
