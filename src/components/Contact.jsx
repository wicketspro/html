import '../styles/Contact.css';

const Contact = () => {
  const adminContacts = [
    {
      name: 'প্রধান এডমিন',
      role: 'এজেন্ট আবেদন ও সাধারণ সাহায্য',
      whatsapp: 'https://wa.me/+8801341379505',
      imo: 'https://imo.onelink.me/7QO/isw',
      //telegram: "https://t.me/username8",
      //messenger: "https://m.me/username8",
    },
    {
      name: 'সাব এডমিন',
      role: 'টেকনিক্যাল সাপোর্ট ও গাইডেন্স',
      whatsapp: 'https://wa.me/+8801341379506',
      imo: 'https://imo.onelink.me/7QO/isw',
      //telegram: "https://t.me/username9",
      //messenger: "https://m.me/username9",
    },
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">যোগাযোগ</h2>

        <div className="contact-content">
          <div className="contact-intro">
            <h3>এজেন্ট হিসেবে যোগ দিন</h3>
            <p>
              আমাদের সাথে এজেন্ট হিসেবে কাজ করুন এবং উচ্চ কমিশন ও বোনাস পান।
              এজেন্ট হতে চাইলে নিচের এডমিনদের সাথে যোগাযোগ করুন।
            </p>
          </div>

          <div className="admin-contacts">
            {adminContacts.map((admin, index) => (
              <div key={index} className="admin-card">
                <h4>{admin.name}</h4>
                <p className="admin-role">{admin.role}</p>

                <div className="admin-contact-buttons">
                  <a
                    href={admin.whatsapp}
                    className="contact-btn whatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63" />
                    </svg>
                    WhatsApp
                  </a>
                  <a
                    href={admin.imo}
                    className="contact-btn imo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect
                        x="5"
                        y="2"
                        width="14"
                        height="20"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="12" y1="18" x2="12.01" y2="18"></line>
                    </svg>
                    imo
                  </a>
                  <a
                    href={admin.telegram}
                    className="contact-btn telegram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                    Telegram
                  </a>
                  <a
                    href={admin.messenger}
                    className="contact-btn messenger"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.374 0 0 4.975 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.301 2.246.464 3.443.464 6.626 0 12-4.974 12-11.111C24 4.975 18.626 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8.1l3.13 3.26L19.752 8.1l-6.561 6.863z" />
                    </svg>
                    Messenger
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="agent-benefits">
            <h4>এজেন্ট হওয়ার সুবিধা:</h4>
            <div className="benefits-grid">
              <div className="benefit-item">
                <span className="benefit-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </span>
                <h5>উচ্চ কমিশন</h5>
                <p>প্রতিটি বেটে আকর্ষণীয় কমিশন</p>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="20,12 20,22 4,22 4,12"></polyline>
                    <rect x="2" y="7" width="20" height="5"></rect>
                    <line x1="12" y1="22" x2="12" y2="7"></line>
                    <path d="M12,7L12,7a5,5 0 0,1-5-5H2v5h5a5,5 0 0,1,5,5z"></path>
                    <path d="M12,7L12,7a5,5 0 0,0,5-5h5v5h-5a5,5 0 0,0-5,5z"></path>
                  </svg>
                </span>
                <h5>বোনাস সিস্টেম</h5>
                <p>মাসিক ও বার্ষিক বোনাস</p>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </span>
                <h5>২৪/৭ সাপোর্ট</h5>
                <p>যেকোনো সময় সাহায্য পাবেন</p>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                </span>
                <h5>দ্রুত পেমেন্ট</h5>
                <p>তাৎক্ষণিক কমিশন পেমেন্ট</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
