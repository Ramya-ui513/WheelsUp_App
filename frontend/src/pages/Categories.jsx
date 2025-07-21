import React from 'react';
import './Categories.css';

import BeastCrusher from '../assets/Beast Crusher XL – Monster Truck.jpg';
import BlazeMonster from '../assets/Blaze Monster X – Monster Truck.jpg';
import CircuitBullet from '../assets/Circuit Bullet – Track Champion.jpg';
import DesertRover from '../assets/Desert Rover Pro – Off-Road.jpg';
import HyperDrifter from '../assets/Hyper Drifter – Street Racer.jpg';
import MegaClimb from '../assets/Mega Climb King – Monster Truck.jpg';
import NitroFury from '../assets/Nitro FURY GT – Street Racer.jpg';
import SandDigger from '../assets/Sand Digger – Off-Road.jpg';
import StreetHawk from '../assets/Street Hawk RX – Street Racer.jpg';
import TrackBlazer from '../assets/Track Blazer R1 – Track Champion.jpg';
import TrackPhantom from '../assets/Track Phantom – Track Champion.jpg';
import TurboVortex from '../assets/Turbo Vortex Z9 – Street Racer.jpg';

const carData = [
  { name: "Beast Crusher XL", category: "Monster Truck", description: "Jumps, smashes, and dominates.", image: BeastCrusher },
  { name: "Blaze Monster X", category: "Monster Truck", description: "High-suspension beast for wild terrains.", image: BlazeMonster },
  { name: "Circuit Bullet", category: "Track Champion", description: "Lightning-fast on sharp curves.", image: CircuitBullet },
  { name: "Desert Rover Pro", category: "Off-Road", description: "Handles desert heat and dunes easily.", image: DesertRover },
  { name: "Hyper Drifter", category: "Street Racer", description: "Slick for sideways action.", image: HyperDrifter },
  { name: "Mega Climb King", category: "Monster Truck", description: "Climbs like a king on rocky routes.", image: MegaClimb },
  { name: "Nitro FURY GT", category: "Street Racer", description: "Speed demon for urban races.", image: NitroFury },
  { name: "Sand Digger", category: "Off-Road", description: "Performs like magic on sand dunes.", image: SandDigger },
  { name: "Street Hawk RX", category: "Street Racer", description: "Sharp steering, laser fast.", image: StreetHawk },
  { name: "Track Blazer R1", category: "Track Champion", description: "Smooth, stable, and track-friendly.", image: TrackBlazer },
  { name: "Track Phantom", category: "Track Champion", description: "Built for blazing tracks and speedways.", image: TrackPhantom },
  { name: "Turbo Vortex Z9", category: "Street Racer", description: "Aerodynamic sleek racer.", image: TurboVortex },
];

const Categories = () => {
  return (
    <div className="categories-container">
      <h2>RC Car Categories</h2>
      <div className="categories-grid">
        {carData.map((car, index) => (
          <div key={index} className="category-card">
            <img src={car.image} alt={car.name} className="category-img" />
            <div className="card-content">
              <h3>{car.name}</h3>
              <p className="category-type">{car.category}</p>
              <small>{car.description}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
