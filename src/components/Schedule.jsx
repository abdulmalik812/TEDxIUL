"use client";
import { useEffect, useRef, useState } from 'react';
import './Schedule.css';

const LED_STRIP_COUNT = 45;

export default function Schedule({ hideHeader = false }) {
  const timelineRef = useRef(null);
  const [activeStrips, setActiveStrips] = useState(0);

  useEffect(() => {
    let animationFrame;

    const updateProgress = () => {
      const timeline = timelineRef.current;
      if (!timeline) return;

      const bounds = timeline.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const startLine = viewportHeight * 0.72;
      const endLine = viewportHeight * 0.28;
      const travelDistance = Math.max(bounds.height + startLine - endLine, 1);
      const progress = Math.min(1, Math.max(0, (startLine - bounds.top) / travelDistance));

      setActiveStrips(Math.round(progress * LED_STRIP_COUNT));
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section id="schedule">
      {!hideHeader && (
        <>
          <p className="section-label fade-in">Event Schedule</p>
          <h2 className="section-title fade-in">THE <span className="accent">DAY</span></h2>
        </>
      )}
      <div className="schedule-timeline-layout">
        <aside className="schedule-progress" aria-label="Schedule scroll progress">
          <div className="schedule-progress-sticky" aria-hidden="true">
            {Array.from({ length: LED_STRIP_COUNT }, (_, index) => (
              <span
                className={`schedule-led-strip${index < activeStrips ? ' active' : ''}`}
                key={index}
              />
            ))}
          </div>
        </aside>
        <div className="timeline" ref={timelineRef}>
          <div className="tl-item">
          <div className="tl-dot"></div>
          <div className="tl-time">TBD · Entry</div>
          <div className="tl-name">Welcome <span className="tl-amp">&amp;</span> Registration</div>
          <div className="tl-desc">Collect your pass and goodies. Meet fellow attendees and start connecting.</div>
          <span className="tl-tag">Entry</span>
        </div>
        <div className="tl-item">
          <div className="tl-dot"></div>
          <div className="tl-time">TBD · Opening</div>
          <div className="tl-name">Opening Ceremony</div>
          <div className="tl-desc">Introduction to TEDxIntegralUniversity, the TESSELLATION theme, and the vision behind this edition.</div>
          <span className="tl-tag">Ceremony</span>
        </div>
        <div className="tl-item">
          <div className="tl-dot"></div>
          <div className="tl-time">TBD · Talk Block 1</div>
          <div className="tl-name">Talk Block 1</div>
          <div className="tl-desc">Our first set of speakers share ideas on how individual action creates collective change.</div>
          <span className="tl-tag">Talks</span>
        </div>
        <div className="tl-item">
          <div className="tl-dot"></div>
          <div className="tl-time">TBD · Break</div>
          <div className="tl-name">Tea Break <span className="tl-amp">&amp;</span> Networking</div>
          <div className="tl-desc">Refreshments and open conversation. Connect with speakers and attendees.</div>
          <span className="tl-tag">Break</span>
        </div>
        <div className="tl-item">
          <div className="tl-dot"></div>
          <div className="tl-time">TBD · Talk Block 2</div>
          <div className="tl-name">Talk Block 2</div>
          <div className="tl-desc">More transformative ideas from our next set of speakers.</div>
          <span className="tl-tag">Talks</span>
        </div>
        <div className="tl-item">
          <div className="tl-dot"></div>
          <div className="tl-time">TBD · Panel Discussion</div>
          <div className="tl-name">Panel Discussion</div>
          <div className="tl-desc">Industry experts and innovators discuss emerging trends and future opportunities.</div>
          <span className="tl-tag">Talks</span>
        </div>
         <div className="tl-item">
          <div className="tl-dot"></div>
          <div className="tl-time">TBD ·Interactive Workshop</div>
          <div className="tl-name">Interactive Workshop</div>
          <div className="tl-desc">Hands-on activities designed to encourage creativity, collaboration, and learning.</div>
          <span className="tl-tag">Talks</span>
        </div>
        <div className="tl-item">
          <div className="tl-dot"></div>
          <div className="tl-time">TBD ·Q&A</div>
          <div className="tl-name">Audience Q<span className="tl-amp">&amp;</span>A</div>
          <div className="tl-desc">Engage directly with speakers through an interactive question-and-answer session. Share your thoughts, ask questions, and explore ideas from new perspectives.</div>
          <span className="tl-tag">Talks</span>
        </div>
       <div className="tl-item">
          <div className="tl-dot"></div>
          <div className="tl-time">TBD ·Networking</div>
          <div className="tl-name">Networking Session</div>
          <div className="tl-desc">Connect with fellow attendees, speakers, innovators, and changemakers. Build meaningful relationships, exchange ideas, and expand your professional network.</div>
          <span className="tl-tag">Talks</span>
        </div>
       
        <div className="tl-item">
          <div className="tl-dot"></div>
          <div className="tl-time">TBD ·Closing</div>
          <div className="tl-name">Closing Ceremony</div>
          <div className="tl-desc">Felicitation, thank you, and the collective mosaic we've built together.</div>
          <span className="tl-tag">Closing</span>
          </div>
        </div>
      </div>
    </section>
  );
}
