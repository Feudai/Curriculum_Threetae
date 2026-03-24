/**
 * Hotspots data — compétences ancrées à des positions 3D sur l'avatar.
 *
 * COMMENT TROUVER LES BONNES COORDONNÉES :
 * 1. Charge ton modèle GLB dans le viewer
 * 2. Clique sur ton modèle → les coordonnées s'affichent en console (F12)
 * 3. Reporte-les ici dans le champ `position`
 *
 * Les positions actuelles sont calibrées sur le placeholder (mannequin wireframe).
 * Tu les ajusteras quand ton vrai scan sera chargé.
 */

const hotspots = [
  {
    id: "head",
    position: [0.5, 1.65, 0.3],
    title: "Logique & Conception",
    description:
      "POO, modélisation de données, systèmes de logique, méthode Agile (Scrum)",
    icon: "🧠",
  },
  {
    id: "chest-right",
    position: [0.7, 0.9, 0.3],
    title: "Frontend",
    description:
      "HTML, CSS, JavaScript, Angular, Bootstrap, jQuery — jeux, quizz, apps interactives",
    icon: "🎨",
  },
  {
    id: "chest-left",
    position: [-0.7, 0.9, 0.3],
    title: "Backend",
    description:
      "Java Spring Boot, Symfony (PHP), Express.js, SQL Server, MySQL, MongoDB",
    icon: "⚙️",
  },
  {
    id: "right-hand",
    position: [0.6, 0.15, 0.3],
    title: "Outils & Environnement",
    description:
      "VS Code, JetBrains, Eclipse, Docker, Git, IA générative (Claude, Copilot)",
    icon: "🛠️",
  },
  {
    id: "left-hand",
    position: [-0.6, 0.15, 0.3],
    title: "Simulations & Créativité",
    description:
      "P5.js, Processing — gravitation n-corps, fourmilière, algorithmes génétiques",
    icon: "🔬",
  },
  {
    id: "legs",
    position: [0.45, -0.6, 0.3],
    title: "Soft Skills & Langues",
    description:
      "Anglais C2, Italien B1, relation client, musique (DJ, ingé son), capoeira",
    icon: "🌍",
  },
];

export default hotspots;
