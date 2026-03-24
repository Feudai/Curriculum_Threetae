import { useState } from "react";
import { Html } from "@react-three/drei";

/**
 * Hotspot — ancre un label HTML à une position 3D dans la scène.
 *
 * Le composant <Html> de Drei fait tout le travail :
 * il projette les coordonnées 3D en position CSS 2D,
 * et met à jour automatiquement quand la caméra bouge.
 *
 * Props :
 *  - position : [x, y, z] dans l'espace 3D
 *  - title    : nom de la compétence
 *  - description : détail court
 *  - icon     : emoji affiché dans le dot (optionnel)
 */
export default function Hotspot({ position, title, description, icon }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Html
      position={position}
      distanceFactor={5}
      zIndexRange={[50, 0]}
      style={{ pointerEvents: "auto" }}
    >
      <div
        className="hotspot"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="hotspot__dot">
          {icon && <span className="hotspot__icon">{icon}</span>}
        </div>
        <div className={`hotspot__label ${hovered ? "hotspot__label--visible" : ""}`}>
          <div className="hotspot__title">{title}</div>
          <div className="hotspot__description">{description}</div>
        </div>
      </div>
    </Html>
  );
}
