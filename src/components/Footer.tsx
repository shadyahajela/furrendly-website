export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--bg-cream)',
      padding: '60px clamp(24px, 6vw, 96px)',
      borderTop: '1px solid rgba(13, 38, 33, 0.1)'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '40px',
        maxWidth: '1400px',
        margin: '0 auto',
        marginBottom: '48px'
      }}>
        {/* Column 1 - Brand */}
        <div>
          <div style={{
            fontSize: '24px',
            fontWeight: 700,
            color: 'var(--text-dark)',
            marginBottom: '16px',
            fontFamily: 'var(--font-display)'
          }}>
            FURRendly Clips
          </div>
          <p style={{
            fontSize: '14px',
            lineHeight: 1.7,
            color: 'var(--text-muted)',
            marginBottom: '24px',
            margin: '0 0 24px 0'
          }}>
            Whitby's premier pet grooming destination. Where every furry friend gets the VIP treatment they deserve.
          </p>
          <div style={{
            fontSize: '13px',
            color: 'var(--text-muted)'
          }}>
            📍 Whitby, Ontario
          </div>
        </div>

        {/* Column 2 - Navigation */}
        <div>
          <div style={{
            fontSize: '12px',
            letterSpacing: '0.2em',
            color: 'var(--accent-pink)',
            marginBottom: '20px',
            fontWeight: 600
          }}>
            NAVIGATION
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href="#" style={{
              fontSize: '14px',
              color: 'var(--text-dark)',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}>
              Home
            </a>
            <a href="#" style={{
              fontSize: '14px',
              color: 'var(--text-dark)',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}>
              About Us
            </a>
            <a href="#" style={{
              fontSize: '14px',
              color: 'var(--text-dark)',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}>
              Services
            </a>
            <a href="#" style={{
              fontSize: '14px',
              color: 'var(--text-dark)',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}>
              Reviews
            </a>
          </div>
        </div>

        {/* Column 3 - Contact */}
        <div>
          <div style={{
            fontSize: '12px',
            letterSpacing: '0.2em',
            color: 'var(--accent-pink)',
            marginBottom: '20px',
            fontWeight: 600
          }}>
            CONTACT
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{
              fontSize: '14px',
              color: 'var(--text-dark)'
            }}>
              📞 (905) 555-PAWS
            </div>
            <div style={{
              fontSize: '14px',
              color: 'var(--text-dark)'
            }}>
              ✉️ hello@furrendlyclips.ca
            </div>
            <div style={{
              fontSize: '14px',
              color: 'var(--text-dark)'
            }}>
              🕐 Mon-Sat: 9AM - 6PM
            </div>
          </div>
        </div>

        {/* Column 4 - Social */}
        <div>
          <div style={{
            fontSize: '12px',
            letterSpacing: '0.2em',
            color: 'var(--accent-pink)',
            marginBottom: '20px',
            fontWeight: 600
          }}>
            FOLLOW US
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href="#" style={{
              fontSize: '14px',
              color: 'var(--text-dark)',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}>
              Instagram
            </a>
            <a href="#" style={{
              fontSize: '14px',
              color: 'var(--text-dark)',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}>
              Facebook
            </a>
            <a href="#" style={{
              fontSize: '14px',
              color: 'var(--text-dark)',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}>
              TikTok
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '24px',
        borderTop: '1px solid rgba(13, 38, 33, 0.1)',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          fontSize: '13px',
          color: 'var(--text-muted)'
        }}>
          © 2025 FURRendly Clips. All rights reserved.
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href="#" style={{
            fontSize: '13px',
            color: 'var(--text-muted)',
            textDecoration: 'none'
          }}>
            Privacy Policy
          </a>
          <a href="#" style={{
            fontSize: '13px',
            color: 'var(--text-muted)',
            textDecoration: 'none'
          }}>
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
