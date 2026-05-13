import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const robots = [
    // Cleaning Robots
    {
      id: 1,
      name: "RoboVac X1",
      category: "Cleaning",
      description:
        "Smart vacuum cleaner with AI navigation and 3000Pa suction power. Auto-recharge and scheduling features.",
      image:
        "/assets/images/robovac-x1.png",
    },
    {
      id: 2,
      name: "FloorBot Pro",
      category: "Cleaning",
      description:
        "Mopping and sweeping robot with 4-in-1 cleaning system. Perfect for hardwood and tile floors.",
      image:
        "https://images.unsplash.com/photo-1629709305580-5a833dc72d5a?w=400",
    },
    {
      id: 3,
      name: "Window Wipe 3000",
      category: "Cleaning",
      description:
        "Magnetic window cleaning robot for high-rise buildings. Safe and efficient glass cleaning.",
      image:
        "https://images.unsplash.com/photo-1585771724687-ef69fbc95adc?w=400",
    },

    // Logistics Robots
    {
      id: 4,
      name: "Warehouse Mover X",
      category: "Logistics",
      description:
        "Autonomous forklift robot capable of lifting 2000kg. Perfect for warehouse operations.",
      image:
        "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400",
    },
    {
      id: 5,
      name: "Package Drone",
      category: "Logistics",
      description:
        "Delivery drone with 10km range and 5kg capacity. GPS navigation and collision avoidance.",
      image:
        "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=400",
    },
    {
      id: 6,
      name: "SortBot 500",
      category: "Logistics",
      description:
        "High-speed parcel sorting robot with 100 packages per minute processing rate.",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400",
    },

    // Industry Robots
    {
      id: 7,
      name: "AutoArm Heavy",
      category: "Industry",
      description:
        "Industrial robotic arm with 6-axis movement and 100kg payload capacity for manufacturing.",
      image:
        "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400",
    },
    {
      id: 8,
      name: "WeldMaster Pro",
      category: "Industry",
      description:
        "Precision welding robot for automotive and metal fabrication industries.",
      image:
        "https://images.unsplash.com/photo-1581092335871-4d9adfadf992?w=400",
    },
    {
      id: 9,
      name: "AssemblyBot",
      category: "Industry",
      description:
        "High-speed assembly robot for electronics and small parts manufacturing.",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400",
    },

    // Healthcare Robots
    {
      id: 10,
      name: "NurseBot Assist",
      category: "Healthcare",
      description:
        "Medical assistant robot for patient monitoring and medicine delivery in hospitals.",
      image:
        "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400",
    },
    {
      id: 11,
      name: "Surgery Precision 2000",
      category: "Healthcare",
      description:
        "Surgical robot with 0.1mm precision for minimally invasive procedures.",
      image:
        "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400",
    },
    {
      id: 12,
      name: "Rehab Walker",
      category: "Healthcare",
      description:
        "Rehabilitation robot for physical therapy and mobility training.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400",
    },

    // Catering Robots
    {
      id: 13,
      name: "ChefBot 3000",
      category: "Catering",
      description:
        "Automated cooking robot with 1000+ recipes. Perfect for restaurants and catering services.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400",
    },
    {
      id: 14,
      name: "Server Robot",
      category: "Catering",
      description:
        "Food delivery robot that can carry up to 4 trays at once to restaurant tables.",
      image:
        "https://images.unsplash.com/photo-1581092335871-4d9adfadf992?w=400",
    },
    {
      id: 15,
      name: "BarBot Mixer",
      category: "Catering",
      description:
        "Automated bartender robot that can mix over 200 cocktails perfectly every time.",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218eb20?w=400",
    },
  ];

  const categories = ["All", ...new Set(robots.map((r) => r.category))];

  const categoryMeta = {
    Cleaning: { icon: "✦", color: "#3b82f6" },
    Logistics: { icon: "◈", color: "#f59e0b" },
    Industry: { icon: "⬡", color: "#ef4444" },
    Healthcare: { icon: "✚", color: "#10b981" },
    Catering: { icon: "◉", color: "#a855f7" },
  };

  const filtered =
    activeCategory === "All"
      ? robots
      : robots.filter((r) => r.category === activeCategory);

  return (
    <div className={`app ${visible ? "app--visible" : ""}`}>
      {/* HERO */}
      <section className="hero">
        <div className="hero__bg">
          <img
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600"
            alt="Robotics"
          />
          <div className="hero__overlay" />
          <div className="hero__grid-lines" />
        </div>
        <div className="hero__content">
          <div className="hero__tag">Advanced Robotics Solutions</div>
          <h1 className="hero__title">
            <span>🤖</span> Robotics
            <br />
            Catalog
          </h1>
          <p className="hero__subtitle">
            Explore our advanced robotics solutions engineered for the future.
          </p>
          <div className="hero__stats">
            <div className="hero__stat">
              <strong>15+</strong>
              <span>Models</span>
            </div>
            <div className="hero__divider" />
            <div className="hero__stat">
              <strong>5</strong>
              <span>Categories</span>
            </div>
            <div className="hero__divider" />
            <div className="hero__stat">
              <strong>99%</strong>
              <span>Uptime</span>
            </div>
          </div>
        </div>
        <div className="hero__scroll-hint">
          <span>Scroll to explore</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* CATALOG SECTION */}
      <section className="catalog">
        <div className="catalog__header">
          <div className="catalog__label">Product Lineup</div>
          <h2 className="catalog__title">Browse by Category</h2>
        </div>

        {/* FILTER TABS */}
        <div className="filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? "filter-btn--active" : ""}`}
              onClick={() => setActiveCategory(cat)}
              style={
                activeCategory === cat && cat !== "All"
                  ? { "--accent": categoryMeta[cat]?.color }
                  : {}
              }
            >
              {cat !== "All" && (
                <span
                  className="filter-btn__icon"
                  style={{ color: categoryMeta[cat]?.color }}
                >
                  {/* {categoryMeta[cat]?.icon} */}
                </span>
              )}
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="robots-grid">
          {filtered.map((robot, i) => (
            <article
              className="robot-card"
              key={robot.id}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="robot-card__image-wrap">
                <img
                  src={robot.image}
                  alt={robot.name}
                  className="robot-card__image"
                />
                <div className="robot-card__image-overlay" />
                <span
                  className="robot-card__badge"
                  style={{
                    "--badge-color":
                      categoryMeta[robot.category]?.color || "#6b7280",
                  }}
                >
                  {/* <span>{categoryMeta[robot.category]?.icon}</span> */}
                  {robot.category}
                </span>
              </div>
              <div className="robot-card__body">
                <h3 className="robot-card__name">{robot.name}</h3>
                <p className="robot-card__desc">{robot.description}</p>
                <div className="robot-card__footer">
                  <button className="robot-card__btn">View Details →</button>
                </div>
              </div>
              <div
                className="robot-card__glow"
                style={{
                  "--glow-color":
                    categoryMeta[robot.category]?.color || "#3b82f6",
                }}
              />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
