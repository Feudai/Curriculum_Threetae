import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Avatar from "./Avatar";
import Hotspot from "./Hotspot";
import hotspots from "../data/hotspots";

/**
 * Scene — la scène 3D complète.
 *
 * Contient :
 *  - Le Canvas R3F (WebGL renderer)
 *  - L'éclairage (ambient + environment map)
 *  - Le modèle (Avatar)
 *  - Les hotspots (ancrés en 3D)
 *  - Les contrôles caméra (OrbitControls)
 *
 * Notes techniques :
 *  - Suspense est nécessaire car useGLTF charge de manière asynchrone
 *  - OrbitControls : enablePan={false} empêche le drag latéral
 *    → l'utilisateur ne peut que tourner et zoomer
 *  - Environment preset="city" donne un éclairage réaliste via une HDRI
 */
export default function Scene() {
  return (
    <div className="canvas-container">
      <Canvas
        camera={{
          position: [0, 0.5, 4], // position initiale de la caméra
          fov: 35, // champ de vision étroit = plus "cinématique"
        }}
        dpr={[1, 2]} // pixel ratio : min 1, max 2 (perf vs qualité)
        gl={{ antialias: true, alpha: true }} // fond transparent
      >
        {/* Éclairage */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />

        {/* Environment map — donne des reflets réalistes.
            Presets dispo : "city", "sunset", "dawn", "night", "studio", etc.
            Supprime si ton modèle a des vertex colors et n'a pas besoin de reflets. */}
        <Environment preset="city" />

        {/* Modèle 3D */}
        <Suspense fallback={null}>
          <Avatar />
        </Suspense>

        {/* Hotspots — chaque point ancré en 3D */}
        {hotspots.map((spot) => (
          <Hotspot
            key={spot.id}
            position={spot.position}
            title={spot.title}
            description={spot.description}
            icon={spot.icon}
          />
        ))}

        {/* Contrôles caméra */}
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={2} // zoom min
          maxDistance={8} // zoom max
          minPolarAngle={Math.PI / 4} // limite haute (pas au-dessus de la tête)
          maxPolarAngle={Math.PI / 1.5} // limite basse (pas sous les pieds)
          autoRotate={false} // passe à true pour une rotation auto
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
