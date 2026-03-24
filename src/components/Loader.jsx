import { useEffect, useState } from "react";
import gsap from "gsap";

/**
 * Loader — écran de chargement + animations d'entrée.
 *
 * Workflow :
 * 1. Affiche un écran noir avec une barre de progression
 * 2. Simule un chargement (tu pourras le brancher sur le vrai
 *    chargement du GLB via useProgress de Drei)
 * 3. Une fois "chargé", anime l'apparition du header, footer, etc.
 *
 * C'est ici que GSAP entre en jeu — il orchestre les animations
 * d'entrée séquentielles (timeline).
 */
export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // --- Simulation de chargement ---
    // TODO : remplacer par useProgress() de @react-three/drei
    // quand tu charges un vrai modèle GLB.
    //
    // Exemple avec useProgress :
    //   import { useProgress } from "@react-three/drei";
    //   const { progress } = useProgress();
    //   → et tu utilises cette valeur directement

    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 15;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          setLoaded(true);
          animateEntrance();
        }, 400);
      }
      setProgress(current);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  /**
   * Timeline GSAP — anime l'apparition des éléments UI
   * après le chargement.
   *
   * gsap.timeline() permet d'enchaîner des animations
   * séquentiellement. Le paramètre position (ex: "-=0.3")
   * permet de les chevaucher légèrement → plus fluide.
   */
  const animateEntrance = () => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    tl.to(".header__name", {
      opacity: 1,
      y: 0,
      duration: 1,
    })
      .to(
        ".footer__role",
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
        },
        "-=0.6" // commence 0.6s avant la fin de l'animation précédente
      )
      .to(
        ".footer__hint",
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.6"
      );
  };

  return (
    <div className={`loader ${loaded ? "loaded" : ""}`}>
      <div className="loader__text">Chargement du modèle 3D</div>
      <div className="loader__bar">
        <div
          className="loader__fill"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
    </div>
  );
}
