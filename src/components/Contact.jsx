import '../styles/Contact.css';

// CONTACT CONFIGURATION - EDIT THESE VALUES
// ============================================
const CONTACT_CONFIG = {
  // To disable a platform, comment out the entire line or set to null
  admin: {
    name: 'এডমিন',
    role: 'এজেন্ট আবেদন ও সাধারণ সাহায্য',
    whatsapp: '+8801341379505', // Just phone number, no need for full URL
    imo: 'https://imo.onelink.me/7QO/isw',
    telegram: 'username8', // Just username, no need for full URL
    messenger: 'username8', // Just username, no need for full URL
  },
  subAdmin: {
    name: 'সাব এডমিন',
    role: 'টেকনিক্যাল সাপোর্ট ও গাইডেন্স',
    whatsapp: '+8801341379506',
    imo: 'https://imo.onelink.me/7QO/isw',
    telegram: 'username9',
    messenger: 'username9',
    // Example: To disable WhatsApp for sub admin, comment out the line above:
    // whatsapp: null,
  },
};

const Contact = () => {
  const adminContacts = [
    {
      ...CONTACT_CONFIG.admin,
      whatsapp: CONTACT_CONFIG.admin.whatsapp
        ? `https://wa.me/${CONTACT_CONFIG.admin.whatsapp}`
        : null,
      telegram: CONTACT_CONFIG.admin.telegram
        ? `https://t.me/${CONTACT_CONFIG.admin.telegram}`
        : null,
      messenger: CONTACT_CONFIG.admin.messenger
        ? `https://m.me/${CONTACT_CONFIG.admin.messenger}`
        : null,
    },
    {
      ...CONTACT_CONFIG.subAdmin,
      whatsapp: CONTACT_CONFIG.subAdmin.whatsapp
        ? `https://wa.me/${CONTACT_CONFIG.subAdmin.whatsapp}`
        : null,
      telegram: CONTACT_CONFIG.subAdmin.telegram
        ? `https://t.me/${CONTACT_CONFIG.subAdmin.telegram}`
        : null,
      messenger: CONTACT_CONFIG.subAdmin.messenger
        ? `https://m.me/${CONTACT_CONFIG.subAdmin.messenger}`
        : null,
    },
  ];

  const WhatsAppLogo = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="platform-logo">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
    </svg>
  );

  const IMOLogo = () => (
    <img
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imo-THVTTnQ45raEvYap0n9thdTmjMcYVf.png"
      alt="IMO"
      className="platform-logo imo-logo" // Added imo-logo class for white filter
    />
  );

  const TelegramLogo = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="platform-logo">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );

  const MessengerLogo = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="platform-logo">
      <path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.975 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8.1l3.13 3.26L19.752 8.1l-6.561 6.863z" />
    </svg>
  );

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">যোগাযোগ</h2>

        <div className="contact-content">
          <div className="contact-intro">
            <h3>এজেন্ট হিসেবে যোগ দিন</h3>
            <p>
              আমাদের সাথে এজেন্ট হিসেবে কাজ করুন এবং হাই কমিশন ও বোনাস পান।
              এজেন্ট হতে চাইলে নিচের এডমিনদের সাথে যোগাযোগ করুন।
            </p>
          </div>

          <div className="admin-contacts">
            {adminContacts.map((admin, index) => (
              <div key={index} className="admin-card">
                <h4>{admin.name}</h4>
                <p className="admin-role">{admin.role}</p>

                <div className="admin-contact-buttons">
                  {admin.whatsapp && (
                    <a
                      href={admin.whatsapp}
                      className="contact-btn whatsapp"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Chat on WhatsApp"
                      aria-label={`Contact ${admin.name} on WhatsApp`}
                    >
                      <WhatsAppLogo />
                    </a>
                  )}
                  {admin.imo && (
                    <a
                      href={admin.imo}
                      className="contact-btn imo"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Chat on IMO"
                      aria-label={`Contact ${admin.name} on IMO`}
                    >
                      <IMOLogo />
                    </a>
                  )}
                  {admin.telegram && (
                    <a
                      href={admin.telegram}
                      className="contact-btn telegram"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Chat on Telegram"
                      aria-label={`Contact ${admin.name} on Telegram`}
                    >
                      <TelegramLogo />
                    </a>
                  )}
                  {admin.messenger && (
                    <a
                      href={admin.messenger}
                      className="contact-btn messenger"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Chat on Messenger"
                      aria-label={`Contact ${admin.name} on Messenger`}
                    >
                      <MessengerLogo />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
