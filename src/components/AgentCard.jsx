"use client"

import { useState } from "react"
import "../styles/AgentCard.css"

const AgentCard = ({ agent }) => {
  const [showToast, setShowToast] = useState(false)

  const copyAgentId = () => {
    navigator.clipboard.writeText(agent.id)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2000)
  }

  return (
    <div className="agent-card">
      <div className="agent-photo">
        <img src={agent.photo || "/placeholder.svg"} alt={agent.name} loading="lazy" />
        <div className={`status-indicator ${agent.status}`}>
          <span className="status-dot"></span>
          {agent.status === "online" ? "অনলাইন" : "অফলাইন"}
        </div>
      </div>

      <div className="agent-info">
        <h3>{agent.name}</h3>
        <div className="agent-id">
          <span>এজেন্ট আইডি: {agent.id}</span>
          <button className="copy-btn" onClick={copyAgentId} aria-label="Copy Agent ID">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
        </div>

        {agent.rating && (
          <div className="agent-rating">
            <span className="stars">{"⭐".repeat(Math.floor(agent.rating))}</span>
            <span className="rating-number">({agent.rating})</span>
          </div>
        )}

        {agent.testimonial && <p className="testimonial">"{agent.testimonial}"</p>}
      </div>

      <div className="contact-buttons">
        <div className="primary-contacts">
          <a href={agent.whatsappCall} className="contact-btn whatsapp-call" target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            কল করুন
          </a>
          <a
            href={agent.whatsappMessage}
            className="contact-btn whatsapp-message"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            মেসেজ করুন
          </a>
        </div>

        <div className="secondary-contacts">
          {agent.messenger && (
            <a
              href={agent.messenger}
              className="contact-btn messenger"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Messenger"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 4.975 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.301 2.246.464 3.443.464 6.626 0 12-4.974 12-11.111C24 4.975 18.626 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8.1l3.13 3.26L19.752 8.1l-6.561 6.863z" />
              </svg>
            </a>
          )}
          {agent.imo && (
            <a href={agent.imo} className="contact-btn imo" target="_blank" rel="noopener noreferrer" aria-label="imo">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
            </a>
          )}
          {agent.telegram && (
            <a
              href={agent.telegram}
              className="contact-btn telegram"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {showToast && <div className="toast">Agent ID কপি হয়েছে!</div>}
    </div>
  )
}

export default AgentCard
