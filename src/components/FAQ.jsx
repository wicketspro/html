"use client"

import { useState } from "react"
import "../styles/FAQ.css"

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqData = [
    {
      question: "কিভাবে বেট করবো?",
      answer: "আমাদের এজেন্টদের সাথে যোগাযোগ করুন। তারা আপনাকে বেট করার সম্পূর্ণ প্রক্রিয়া বুঝিয়ে দেবেন এবং সাহায্য করবেন।",
    },
    {
      question: "এজেন্টদের সাথে কিভাবে যোগাযোগ করবো?",
      answer:
        "আপনি WhatsApp, imo, Telegram, বা Messenger এর মাধ্যমে আমাদের এজেন্টদের সাথে যোগাযোগ করতে পারেন। প্রতিটি এজেন্টের কার্ডে সব যোগাযোগের মাধ্যম দেওয়া আছে।",
    },
    {
      question: "সর্বনিম্ন বেট পরিমাণ কত?",
      answer: "সর্বনিম্ন বেট পরিমাণ এজেন্ট ভেদে ভিন্ন হতে পারে। বিস্তারিত জানতে আপনার পছন্দের এজেন্টের সাথে যোগাযোগ করুন।",
    },
    {
      question: "কিভাবে এজেন্ট হওয়া যায়?",
      answer:
        "এজেন্ট হতে চাইলে আমাদের এডমিন বা সাব এডমিনদের সাথে যোগাযোগ করুন। তারা আপনাকে এজেন্ট হওয়ার সম্পূর্ণ প্রক্রিয়া এবং শর্তাবলী জানিয়ে দেবেন।",
    },
    {
      question: "পেমেন্ট কিভাবে করবো?",
      answer:
        "পেমেন্ট bKash, Nagad, Rocket সহ বিভিন্ন মোবাইল ব্যাংকিং এর মাধ্যমে করা যায়। বিস্তারিত জানতে আপনার এজেন্টের সাথে কথা বলুন।",
    },
    {
      question: "জিতলে টাকা কখন পাবো?",
      answer: "জেতার পর সাধারণত ১৫-৩০ মিনিটের মধ্যে টাকা পেয়ে যাবেন। তবে এটি এজেন্ট এবং পেমেন্ট মেথড ভেদে ভিন্ন হতে পারে।",
    },
  ]

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <h2 className="section-title">সাধারণ প্রশ্নোত্তর</h2>

        <div className="faq-container">
          {faqData.map((item, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
              <button
                className="faq-question"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{item.question}</span>
                <span className="faq-icon">{activeIndex === index ? "−" : "+"}</span>
              </button>

              <div className="faq-answer">
                <div className="faq-answer-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
