import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface StaggeredMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onFleetOpen: () => void;
}

export default function StaggeredMenu({ isOpen, onToggle, onFleetOpen }: StaggeredMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const prelayer1Ref = useRef<HTMLDivElement>(null);
  const prelayer2Ref = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const socialsRef = useRef<HTMLDivElement>(null);
  const menuLabelRef = useRef<HTMLSpanElement>(null);
  const closeLabelRef = useRef<HTMLSpanElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (isOpen) {
      const tl = gsap.timeline();
      timelineRef.current = tl;

      // Cycle label text
      if (menuLabelRef.current && closeLabelRef.current) {
        tl.to(menuLabelRef.current, { y: '-100%', duration: 0.4, ease: 'power3.inOut' }, 0);
        tl.fromTo(closeLabelRef.current, { y: '100%' }, { y: '0%', duration: 0.4, ease: 'power3.inOut' }, 0);
      }

      // Prelayers slide in
      if (prelayer1Ref.current) {
        tl.to(prelayer1Ref.current, { x: '0%', duration: 0.6, ease: 'power4.out' }, 0);
      }
      if (prelayer2Ref.current) {
        tl.to(prelayer2Ref.current, { x: '0%', duration: 0.6, ease: 'power4.out' }, 0.08);
      }

      // Panel slides in
      if (panelRef.current) {
        tl.to(panelRef.current, { x: '0%', duration: 0.8, ease: 'power4.out' }, 0.15);
      }

      // Prelayers slide out
      if (prelayer1Ref.current && prelayer2Ref.current) {
        tl.to([prelayer1Ref.current, prelayer2Ref.current], { x: '-100%', duration: 0.5, ease: 'power3.in' }, 0.5);
      }

      // Nav items stagger in
      navItemsRef.current.forEach((item, index) => {
        if (item && item.parentElement) {
          tl.fromTo(
            item,
            { x: -40, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
            0.6 + index * 0.06
          );
        }
      });

      // Socials fade in
      if (socialsRef.current) {
        tl.fromTo(socialsRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0.9);
      }
    } else if (timelineRef.current) {
      // Reverse animation
      timelineRef.current.reverse();
    }

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [isOpen]);

  const handleNavItemClick = (label: string) => {
    if (label === 'OUR FLEET') {
      onFleetOpen();
    }
    onToggle();
  };

  const navItems = ['HOME', 'OUR FLEET', 'MEMBERSHIP', 'REGATTAS & EVENTS', 'ACADEMY', 'CONTACT'];

  return (
    <>
      {/* TOGGLE BUTTON */}
      <button
        className={`menu-toggle ${isOpen ? 'is-open' : ''}`}
        onClick={onToggle}
      >
        <div className="menu-toggle-label">
          <span ref={menuLabelRef}>MENU</span>
          <span ref={closeLabelRef} style={{ position: 'absolute', top: '100%', left: 0, width: '100%', textAlign: 'center' }}>CLOSE</span>
        </div>
        <span className="menu-toggle-icon">+</span>
      </button>

      {/* PRELAYERS */}
      <div ref={prelayer1Ref} className="menu-prelayer menu-prelayer-1" />
      <div ref={prelayer2Ref} className="menu-prelayer menu-prelayer-2" />

      {/* MENU PANEL */}
      <div ref={panelRef} className="menu-panel">
        <ul className="menu-nav">
          {navItems.map((item, index) => (
            <li key={item}>
              <a
                ref={(el) => { navItemsRef.current[index] = el; }}
                onClick={() => handleNavItemClick(item)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div ref={socialsRef} className="menu-socials">
          <span className="menu-socials-title">FOLLOW</span>
          <div className="menu-socials-links">
            <a href="#">INSTAGRAM</a>
            <a href="#">FACEBOOK</a>
            <a href="#">TWITTER</a>
          </div>
        </div>
      </div>
    </>
  );
}
