import Scene from "./components/Scene";
import Loader from "./components/Loader";

/**
 * App — composant racine.
 *
 * Structure :
 *  - Loader : écran de chargement + animations d'entrée GSAP
 *  - Header : ton nom + liens de contact (au-dessus de la scène)
 *  - Scene  : le canvas 3D avec modèle + hotspots
 *  - Footer : ton titre + instruction d'interaction
 *
 * Tout est superposé en position: fixed via le CSS.
 * La scène 3D est derrière (z-index: 1), les éléments UI devant (z-index: 10).
 */
export default function App() {
  return (
    <div className="app">
      {/* Écran de chargement */}
      <Loader />

      {/* Header — infos perso */}
      <header className="header">
        <h1 className="header__name">Timothée Criaud</h1>
        <nav className="header__contact">
          <a href="mailto:tim.criaud@gmail.com">Email</a>
          <a href="https://github.com/Feudai" target="_blank" rel="noopener">
            GitHub
          </a>
          <a href="https://linkedin.com/in/timothée-criaud" target="_blank" rel="noopener">
            LinkedIn
          </a>
        </nav>
      </header>

      {/* Scène 3D */}
      <Scene />

      {/* Footer — titre + hint */}
      <footer className="footer">
        <p className="footer__hint">
          Drag pour explorer · Hover les points pour découvrir mes compétences
        </p>
        <h2 className="footer__role">Développeur Créatif Full Stack</h2>
      </footer>
    </div>
  );
}
