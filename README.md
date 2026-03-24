# CV 3D — Portfolio interactif

CV interactif avec modèle 3D scanné via Scaniverse.

## 🚀 Lancement rapide

```bash
# 1. Installe les dépendances
npm install

# 2. Lance le serveur de dev
npm run dev
```

Le site tourne sur `http://localhost:5173` avec un placeholder wireframe.

---

## 🧊 Intégrer ton vrai scan 3D

### Étape 1 — Exporter depuis Scaniverse
- Ouvre ton scan dans Scaniverse
- Exporte en **PLY** (ou directement en **GLB** si l'option est dispo)

### Étape 2 — Convertir & optimiser dans Blender (gratuit)
1. **Ouvre Blender** → Fichier → Importer → PLY
2. **Vérifier le mesh** : en mode Edit, regarde le nombre de faces
   (affiché en bas à gauche). Vise < 300 000 faces.
3. **Décimer si nécessaire** :
   - Sélectionne ton objet
   - Properties → Modifier (icône clé à molette) → Add Modifier → Decimate
   - Mode : Collapse, Ratio : 0.3 (= garde 30% des faces)
   - Applique le modifier
4. **Exporter en GLB** :
   - Fichier → Exporter → glTF 2.0
   - Format : GLB
   - Coche "Compression" (= Draco) dans les options d'export
   - Enregistre sous `scan.glb`

### Étape 3 — Intégrer au projet
1. Copie `scan.glb` dans le dossier `/public/`
2. Dans `src/components/Avatar.jsx`, change :
   ```js
   const MODEL_PATH = null;
   // →
   const MODEL_PATH = "/scan.glb";
   ```
3. Ajuste `scale` et `position` dans le composant `<RealModel>` pour centrer ton modèle
4. Actualise le navigateur — ton scan apparaît !

### Étape 4 — Positionner les hotspots
1. Clique sur ton modèle 3D dans le navigateur
2. Regarde la console (F12) → les coordonnées [x, y, z] s'affichent
3. Reporte ces coordonnées dans `src/data/hotspots.js`

---

## 📁 Structure du projet

```
cv-3d/
├── public/
│   └── scan.glb              ← ton modèle 3D (à ajouter)
├── src/
│   ├── components/
│   │   ├── Avatar.jsx         ← charge le modèle GLB (ou placeholder)
│   │   ├── Hotspot.jsx        ← label HTML ancré en 3D
│   │   ├── Loader.jsx         ← écran de chargement + anims GSAP
│   │   └── Scene.jsx          ← Canvas R3F + lights + controls
│   ├── data/
│   │   └── hotspots.js        ← positions & textes des compétences
│   ├── styles/
│   │   └── global.css         ← thème, layout, hotspots, loader
│   ├── App.jsx                ← layout principal (header/footer/scene)
│   └── main.jsx               ← point d'entrée React
├── index.html
├── package.json
└── vite.config.js
```

---

## 🎨 Personnalisation

### Couleurs
Modifie les CSS variables dans `src/styles/global.css` :
```css
--color-bg: #0a0a0a;       /* fond */
--color-accent: #c8ff00;    /* couleur des hotspots */
--color-text: #f0f0f0;      /* texte principal */
```

### Typographies
Change les Google Fonts dans `index.html` et les variables CSS :
```css
--font-display: "Instrument Serif", serif;
--font-body: "Space Grotesk", sans-serif;
```

### Hotspots
Édite `src/data/hotspots.js` pour ajouter/modifier les compétences et leurs positions.

---

## 🏗️ Build & déploiement

```bash
npm run build    # génère le dossier dist/
npm run preview  # prévisualise le build
```

Déploie le dossier `dist/` sur Vercel, Netlify, ou tout hébergeur statique.

---

## 📚 Ressources utiles

- [React Three Fiber docs](https://r3f.docs.pmnd.rs/)
- [Drei (helpers R3F)](https://drei.docs.pmnd.rs/)
- [GSAP docs](https://gsap.com/docs/v3/)
- [Three.js docs](https://threejs.org/docs/)
- [Blender — GLB export](https://docs.blender.org/manual/en/latest/addons/import_export/scene_gltf2.html)
