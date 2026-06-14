import './Speakers.css';

export default function Speakers() {
  return (
    <section id="speakers">
      <p className="section-label fade-in">The Voices</p>
      <h2 className="section-title fade-in">OUR <span className="accent">SPEAKERS</span></h2>
      <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginTop: '10px' }} className="fade-in">
        Meet the incredible thinkers who will share their stories at TEDxIntegralUniversity 2026.
      </p>
      <div className="speakers-grid">
        <div className="sp-card fade-in">
          <div className="sp-img">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(107,63,160,0.3)" strokeWidth="1.5">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
            <span>Photo Coming Soon</span>
          </div>
          <div className="sp-info">
            <div className="sp-tag">Featured Speaker</div>
            <div className="sp-name">Speaker TBA</div>
            <div className="sp-role">Designation · Organisation</div>
          </div>
        </div>
        <div className="sp-card fade-in">
          <div className="sp-img">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(107,63,160,0.3)" strokeWidth="1.5">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
            <span>Photo Coming Soon</span>
          </div>
          <div className="sp-info">
            <div className="sp-tag">Speaker</div>
            <div className="sp-name">Speaker TBA</div>
            <div className="sp-role">Designation · Organisation</div>
          </div>
        </div>
        <div className="sp-card fade-in">
          <div className="sp-img">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(107,63,160,0.3)" strokeWidth="1.5">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
            <span>Photo Coming Soon</span>
          </div>
          <div className="sp-info">
            <div className="sp-tag">Speaker</div>
            <div className="sp-name">Speaker TBA</div>
            <div className="sp-role">Designation · Organisation</div>
          </div>
        </div>
        <div className="sp-card fade-in">
          <div className="sp-img">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(107,63,160,0.3)" strokeWidth="1.5">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
            <span>Photo Coming Soon</span>
          </div>
          <div className="sp-info">
            <div className="sp-tag">Speaker</div>
            <div className="sp-name">Speaker TBA</div>
            <div className="sp-role">Designation · Organisation</div>
          </div>
        </div>
      </div>
    </section>
  );
}