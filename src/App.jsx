import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import './App.css'



function Products() {


const robots = [
  // Cleaning Robots
  {
    id: 1,
    name: "RoboVac X1",
    category: "Cleaning robots",
    description: "Smart vacuum cleaner with AI navigation and 3000Pa suction power. Auto-recharge and scheduling features.",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218eb20?w=200"
  },
  {
    id: 2,
    name: "FloorBot Pro",
    category: "Cleaning robots",
    description: "Mopping and sweeping robot with 4-in-1 cleaning system. Perfect for hardwood and tile floors.",
    image: "https://images.unsplash.com/photo-1629709305580-5a833dc72d5a?w=200"
  },
  {
    id: 3,
    name: "Window Wipe 3000",
    category: "Cleaning robots",
    description: "Magnetic window cleaning robot for high-rise buildings. Safe and efficient glass cleaning.",
    image: "https://images.unsplash.com/photo-1585771724687-ef69fbc95adc?w=200"
  },

  // Logistics Robots
  {
    id: 4,
    name: "Warehouse Mover X",
    category: "Logistics robots",
    description: "Autonomous forklift robot capable of lifting 2000kg. Perfect for warehouse operations.",
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=200"
  },
  {
    id: 5,
    name: "Package Drone",
    category: "Logistics robots",
    description: "Delivery drone with 10km range and 5kg capacity. GPS navigation and collision avoidance.",
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=200"
  },
  {
    id: 6,
    name: "SortBot 500",
    category: "Logistics robots",
    description: "High-speed parcel sorting robot with 100 packages per minute processing rate.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=200"
  },

  // Industry Robots
  {
    id: 7,
    name: "AutoArm Heavy",
    category: "Industry robots",
    description: "Industrial robotic arm with 6-axis movement and 100kg payload capacity for manufacturing.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=200"
  },
  {
    id: 8,
    name: "WeldMaster Pro",
    category: "Industry robots",
    description: "Precision welding robot for automotive and metal fabrication industries.",
    image: "https://images.unsplash.com/photo-1581092335871-4d9adfadf992?w=200"
  },
  {
    id: 9,
    name: "AssemblyBot",
    category: "Industry robots",
    description: "High-speed assembly robot for electronics and small parts manufacturing.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=200"
  },

  // Healthcare Robots
  {
    id: 10,
    name: "NurseBot Assist",
    category: "Healthcare robots",
    description: "Medical assistant robot for patient monitoring and medicine delivery in hospitals.",
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=200"
  },
  {
    id: 11,
    name: "Surgery Precision 2000",
    category: "Healthcare robots",
    description: "Surgical robot with 0.1mm precision for minimally invasive procedures.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=200"
  },
  {
    id: 12,
    name: "Rehab Walker",
    category: "Healthcare robots",
    description: "Rehabilitation robot for physical therapy and mobility training.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=200"
  },

  // Catering Robots
  {
    id: 13,
    name: "ChefBot 3000",
    category: "Catering robots",
    description: "Automated cooking robot with 1000+ recipes. Perfect for restaurants and catering services.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=200"
  },
  {
    id: 14,
    name: "Server Robot",
    category: "Catering robots",
    description: "Food delivery robot that can carry up to 4 trays at once to restaurant tables.",
    image: "https://images.unsplash.com/photo-1581092335871-4d9adfadf992?w=200"
  },
  {
    id: 15,
    name: "BarBot Mixer",
    category: "Catering robots",
    description: "Automated bartender robot that can mix over 200 cocktails perfectly every time.",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218eb20?w=200"
  }
];




  return (


    <div className="products-page">
      <div className="products-header">
        <h1>🛍️ Our Products</h1>
        <p>Browse our amazing collection</p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Products
