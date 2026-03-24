import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

/**
 * Avatar — charge et affiche ton modèle 3D.
 *
 * POUR INTÉGRER TON VRAI SCAN :
 * 1. Place ton fichier .glb dans /public (ex: /public/scan.glb)
 * 2. Remplace MODEL_PATH ci-dessous
 * 3. Ajuste scale et position si nécessaire
 *
 * useGLTF gère le chargement + le cache automatiquement.
 * Il supporte aussi Draco si ton GLB est compressé
 * (voir le commentaire plus bas).
 */

const MODEL_PATH = null; // ← remplace par "/scan.glb" quand tu as ton fichier

/**
 * Placeholder — capsule simple pour tester le layout
 * avant d'avoir ton vrai modèle.
 */
function Placeholder({ onClick }) {
  const ref = useRef();

  // Légère rotation idle pour montrer que la scène est vivante
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={ref} onClick={onClick}>
      {/* Tête */}
      <mesh position={[0, 1.4, 0]}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial color="#333" wireframe />
      </mesh>

      {/* Corps — cylindre */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.3, 0.25, 1.5, 32]} />
        <meshStandardMaterial color="#333" wireframe />
      </mesh>

      {/* Jambes */}
      <mesh position={[-0.15, -0.7, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.9, 16]} />
        <meshStandardMaterial color="#333" wireframe />
      </mesh>
      <mesh position={[0.15, -0.7, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.9, 16]} />
        <meshStandardMaterial color="#333" wireframe />
      </mesh>
    </group>
  );
}

/**
 * RealModel — charge le GLB avec useGLTF.
 */
function RealModel({ url, onClick }) {
  const { scene } = useGLTF(url);
  const ref = useRef();

  // Idle rotation (optionnel — supprime si tu préfères un modèle fixe)
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={1} // ← ajuste selon la taille de ton scan
      position={[0, -1, 0]} // ← ajuste pour centrer verticalement
      onClick={onClick}
    />
  );
}

// Si ton GLB est compressé avec Draco, décommente cette ligne :
// useGLTF.preload(MODEL_PATH, true);

/**
 * Avatar — wrapper qui choisit entre placeholder et vrai modèle.
 */
export default function Avatar() {
  /**
   * Helper : clic sur le mesh → affiche les coordonnées 3D dans la console.
   * Super utile pour positionner tes hotspots !
   */
  const handleClick = (event) => {
    event.stopPropagation();
    const point = event.point;
    console.log(
      `📍 Position cliquée : [${point.x.toFixed(2)}, ${point.y.toFixed(2)}, ${point.z.toFixed(2)}]`
    );
  };

  if (MODEL_PATH) {
    return <RealModel url={MODEL_PATH} onClick={handleClick} />;
  }

  return <Placeholder onClick={handleClick} />;
}
