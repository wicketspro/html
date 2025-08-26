'use client';

import { useState } from 'react';
import '../styles/Footer.css';
import imologo from '../assets/imo-logo.png'; // ✅ Correct import

const Footer = () => {
  // ✅ Capitalized state names to satisfy ESLint regex
  const [ShowPrivacy, SetShowPrivacy] = useState(false);
  const [ShowTerms, SetShowTerms] = useState(false);

  const SOCIAL_CONFIG = {
    whatsapp: {
      name: 'WhatsApp',
      phone: '+8801341379498', // Edit phone number here
      url: 'https://wa.me/+8801341379498',
      color: '#25D366',
    },
    imo: {
      name: 'IMO',
      username: 'your_imo_username', // Edit IMO username here
      url: 'https://imo.onelink.me/7QO/isw',
      color: '#1DA1F2',
    },
    telegram: {
      name: 'Telegram',
      username: 'your_telegram_username',
      url: 'https://t.me/your_telegram_username',
      color: '#0088CC',
    },
    messenger: {
      name: 'Messenger',
      username: 'your_messenger_username',
      url: 'https://m.me/your_messenger_username',
      color: '#0084FF',
    },
    facebook: {
      name: 'Facebook Page',
      username: 'your_facebook_page',
      url: 'https://facebook.com/your_facebook_page',
      color: '#1877F2',
    },
    youtube: {
      name: 'YouTube',
      username: 'your_youtube_channel',
      url: 'https://youtube.com/@your_youtube_channel',
      color: '#FF0000',
    },
  };

  const socialLinks = [
    {
      ...SOCIAL_CONFIG.whatsapp,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63" />
        </svg>
      ),
    },
    {
      ...SOCIAL_CONFIG.imo,
      icon: (
        <img
          src={imologo} // ✅ Use imported logo
          alt="IMO"
          width="20"
          height="20"
          className="imo-logo"
        />
      ),
    },
    {
      ...SOCIAL_CONFIG.telegram,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
    },
    {
      ...SOCIAL_CONFIG.messenger,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.374 0 0 4.975 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.301 2.246.464 3.443.464 6.626 0 12-4.974 12-11.111C24 4.975 18.626 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8.1l3.13 3.26L19.752 8.1l-6.561 6.863z" />
        </svg>
      ),
    },
    {
      ...SOCIAL_CONFIG.facebook,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      ...SOCIAL_CONFIG.youtube,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>9Wicketsvip.pro</h3>
            <p>বিশ্বস্ত বেটিং প্ল্যাটফর্ম</p>
          </div>

          <div className="footer-links">
            <h4>কুইক লিংক</h4>
            <ul>
              <li>
                <a href="#agents">আমাদের এজেন্টস</a>
              </li>
              <li>
                <a href="#complaints">হেল্প ডেস্ক</a>
              </li>
              <li>
                <a href="#faq">সাধারণ প্রশ্নোত্তর</a>
              </li>
              <li>
                <a href="#contact">সাপোর্ট</a>
              </li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>সোশ্যাল মিডিয়া</h4>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="social-link"
                  style={{ '--brand-color': link.color }}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <button className="legal-link" onClick={() => SetShowPrivacy(true)}>
              প্রাইভেসি পলিসি
            </button>
            <span>|</span>
            <button className="legal-link" onClick={() => SetShowTerms(true)}>
              শর্তাবলী
            </button>
          </div>

          <div className="footer-copyright">
            <p>&copy; ২০২৫ 9Wicketsvip.pro সকল অধিকার সংরক্ষিত।</p>
            <p className="responsible-gaming">১৮+ দায়িত্বশীল গেমিং</p>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {ShowPrivacy && (
        <div className="modal-overlay" onClick={() => SetShowPrivacy(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>প্রাইভেসি পলিসি</h3>
            <div className="modal-body">
              <p>
                আমরা আপনার ব্যক্তিগত তথ্যের গোপনীয়তা রক্ষায় প্রতিশ্রুতিবদ্ধ।
              </p>
              <ul>
                <li>আপনার তথ্য তৃতীয় পক্ষের সাথে শেয়ার করা হয় না</li>
                <li>সকল লেনদেন নিরাপদ ও এনক্রিপ্টেড</li>
                <li>আপনার অনুমতি ছাড়া কোনো তথ্য ব্যবহার করা হয় না</li>
                <li>যেকোনো সময় আপনার তথ্য মুছে ফেলার অধিকার রয়েছে</li>
              </ul>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => SetShowPrivacy(false)}
            >
              বন্ধ করুন
            </button>
          </div>
        </div>
      )}

      {/* Terms & Conditions Modal */}
      {ShowTerms && (
        <div className="modal-overlay" onClick={() => SetShowTerms(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>শর্তাবলী</h3>
            <div className="modal-body">
              <p>আমাদের সেবা ব্যবহারের শর্তাবলী:</p>
              <ul>
                <li>১৮ বছরের কম বয়সী কেউ এই সেবা ব্যবহার করতে পারবেন না</li>
                <li>সকল বেট আপনার নিজ দায়িত্বে করুন</li>
                <li>জুয়া আসক্তি থেকে দূরে থাকুন</li>
                <li>এজেন্টদের নির্দেশনা মেনে চলুন</li>
                <li>কোনো প্রকার প্রতারণা বা অসদুপায় গ্রহণযোগ্য নয়</li>
              </ul>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => SetShowTerms(false)}
            >
              বন্ধ করুন
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
