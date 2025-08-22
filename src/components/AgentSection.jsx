"use client"

import { useState } from "react"
import AgentCard from "./AgentCard"
import masterAgents from "../data/agents/masterAgents"
import superAgents from "../data/agents/superAgents"
import vipAgents from "../data/agents/vipAgents"
import adminSubadmin from "../data/agents/adminSubadmin"
import "../styles/AgentSection.css"

const AgentSection = () => {
  const [activeCategory, setActiveCategory] = useState("master")

  const agentCategories = {
    master: { data: masterAgents, title: "মাস্টার এজেন্টস" },
    super: { data: superAgents, title: "সুপার এজেন্টস" },
    vip: { data: vipAgents, title: "ভিআইপি এজেন্টস" },
    admin: { data: adminSubadmin, title: "এডমিন / সাব এডমিন" },
  }

  return (
    <section id="agents" className="section agent-section">
      <div className="container">
        <h2 className="section-title">আমাদের এজেন্টস</h2>

        <div className="category-tabs">
          {Object.entries(agentCategories).map(([key, category]) => (
            <button
              key={key}
              className={`category-tab ${activeCategory === key ? "active" : ""}`}
              onClick={() => setActiveCategory(key)}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="agents-grid">
          {agentCategories[activeCategory].data.map((agent, index) => (
            <AgentCard key={`${activeCategory}-${index}`} agent={agent} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AgentSection
