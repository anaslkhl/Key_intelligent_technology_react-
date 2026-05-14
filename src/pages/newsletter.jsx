import React, { useState } from "react";
import "../styles/newsletter.css";

const NewsletterPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribed:", email);
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const handleFilter = (filter) => {
    setActiveTab(filter);
  };

  const handleShowArticle = () => {
    console.log("Show article");
  };

  return (
    <div className="ns-app">
    {/* <h1>NewsletterPage</h1> */}
      {/* MAIN PAGE */}
      <div className="ns-page active">
        {/* Hero */}
        <div className="ns-hero">
          <h1>Case Studies &amp; News Letters</h1>
          <p>
            Operational data and technical updates from the field
            <br />
            Join our news letter for monthly technical updates
          </p>
          <form className="ns-subscribe-row" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">
              {subscribed ? "Subscribed!" : "Subscribe"}
            </button>
          </form>
        </div>

        {/* Filters */}
        <div className="ns-filters">
          <button
            className={`ns-filter-tab ${activeTab === "all" ? "active" : ""}`}
            onClick={() => handleFilter("all")}
          >
            All
          </button>
          <button
            className={`ns-filter-tab ${activeTab === "news" ? "active" : ""}`}
            onClick={() => handleFilter("news")}
          >
            News
          </button>
          <button
            className={`ns-filter-tab ${activeTab === "case-study" ? "active" : ""}`}
            onClick={() => handleFilter("case-study")}
          >
            Case Studies
          </button>
        </div>

        {/* Articles Grid */}
        <div className="ns-grid-section">
          <div className="ns-articles-grid">
            {/* Card 1 */}
            <div
              className={`ns-article-card ${activeTab !== "all" && activeTab !== "case-study" ? "hidden" : ""}`}
              onClick={handleShowArticle}
            >
              <div className="ns-card-thumb">
                <div className="ns-card-thumb-inner"></div>
              </div>
              <div className="ns-card-body">
                <div className="ns-card-tag">Case study</div>
                <div className="ns-card-title">
                  F-20MT / Large Scale Logistics Deployment
                </div>
                <div className="ns-card-excerpt">
                  Implementation of 15 autonomous forklifts in a 20,000m²
                  facility.
                </div>
                <div className="ns-card-meta">
                  <span>Marwane</span>
                  <div className="ns-card-meta-dot"></div>
                  <span>13 May, 2026</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className={`ns-article-card ${activeTab !== "all" && activeTab !== "case-study" ? "hidden" : ""}`}
              onClick={handleShowArticle}
            >
              <div className="ns-card-thumb">
                <div
                  className="ns-card-thumb-inner"
                  style={{
                    background:
                      "linear-gradient(135deg,#525250 0%,#6b6b68 60%,#424240 100%)",
                  }}
                ></div>
              </div>
              <div className="ns-card-body">
                <div className="ns-card-tag">Case study</div>
                <div className="ns-card-title">
                  F-20MT / Large Scale Logistics Deployment
                </div>
                <div className="ns-card-excerpt">
                  Implementation of 15 autonomous forklifts in a 20,000m²
                  facility.
                </div>
                <div className="ns-card-meta">
                  <span>Marwane</span>
                  <div className="ns-card-meta-dot"></div>
                  <span>13 May, 2026</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className={`ns-article-card ${activeTab !== "all" && activeTab !== "news" ? "hidden" : ""}`}
              onClick={handleShowArticle}
            >
              <div className="ns-card-thumb">
                <div
                  className="ns-card-thumb-inner"
                  style={{
                    background:
                      "linear-gradient(135deg,#606060 0%,#484846 60%,#383836 100%)",
                  }}
                ></div>
              </div>
              <div className="ns-card-body">
                <div className="ns-card-tag">News</div>
                <div className="ns-card-title">
                  F-20MT / Large Scale Logistics Deployment
                </div>
                <div className="ns-card-excerpt">
                  Implementation of 15 autonomous forklifts in a 20,000m²
                  facility.
                </div>
                <div className="ns-card-meta">
                  <span>MARWANE</span>
                  <div className="ns-card-meta-dot"></div>
                  <span>13 May, 2026</span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div
              className={`ns-article-card ${activeTab !== "all" && activeTab !== "case-study" ? "hidden" : ""}`}
              onClick={handleShowArticle}
            >
              <div className="ns-card-thumb">
                <div
                  className="ns-card-thumb-inner"
                  style={{
                    background:
                      "linear-gradient(135deg,#3e3e3c 0%,#585856 60%,#4a4a48 100%)",
                  }}
                ></div>
              </div>
              <div className="ns-card-body">
                <div className="ns-card-tag">Case study</div>
                <div className="ns-card-title">
                  F-20MT / Large Scale Logistics Deployment
                </div>
                <div className="ns-card-excerpt">
                  Implementation of 15 autonomous forklifts in a 20,000m²
                  facility.
                </div>
                <div className="ns-card-meta">
                  <span>MARWANE</span>
                  <div className="ns-card-meta-dot"></div>
                  <span>13 May, 2026</span>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div
              className={`ns-article-card ${activeTab !== "all" && activeTab !== "news" ? "hidden" : ""}`}
              onClick={handleShowArticle}
            >
              <div className="ns-card-thumb">
                <div
                  className="ns-card-thumb-inner"
                  style={{
                    background:
                      "linear-gradient(135deg,#5e5e5c 0%,#464644 60%,#5a5a58 100%)",
                  }}
                ></div>
              </div>
              <div className="ns-card-body">
                <div className="ns-card-tag">News</div>
                <div className="ns-card-title">
                  F-20MT / Large Scale Logistics Deployment
                </div>
                <div className="ns-card-excerpt">
                  Implementation of 15 autonomous forklifts in a 20,000m²
                  facility.
                </div>
                <div className="ns-card-meta">
                  <span>Marwane</span>
                  <div className="ns-card-meta-dot"></div>
                  <span>13 May, 2026</span>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div
              className={`ns-article-card ${activeTab !== "all" && activeTab !== "case-study" ? "hidden" : ""}`}
              onClick={handleShowArticle}
            >
              <div className="ns-card-thumb">
                <div
                  className="ns-card-thumb-inner"
                  style={{
                    background:
                      "linear-gradient(135deg,#545452 0%,#626260 60%,#3c3c3a 100%)",
                  }}
                ></div>
              </div>
              <div className="ns-card-body">
                <div className="ns-card-tag">Case study</div>
                <div className="ns-card-title">
                  F-20MT / Large Scale Logistics Deployment
                </div>
                <div className="ns-card-excerpt">
                  Implementation of 15 autonomous forklifts in a 20,000m²
                  facility.
                </div>
                <div className="ns-card-meta">
                  <span>Marwane</span>
                  <div className="ns-card-meta-dot"></div>
                  <span>13 May, 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="ns-cta-section">
          <h2>Ready to Model Your Facility's ROI?</h2>
          <p>
            Our engineering team will review your requirements and provide a
            custom ROI projection and deployment roadmap
          </p>
          <div className="ns-cta-btns">
            <button className="ns-cta-btn-outline">
              Book a free call
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button className="ns-cta-btn-outline">
              Request a Demo
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPage;
