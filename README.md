-1,129 +1,129 @@
# Curriculum Threetae — 3D Curriculum Vitae
An interactive, three-dimensional Curriculum Vitae built with React and Three.js. Instead of a flat PDF, your skills and projects are anchored as hoverable hotspots on a 3D avatar that visitors can freely rotate and zoom.
---
## ✨ Features
- **3D Avatar** — a GLB model (or a wireframe placeholder while you prepare your scan) that slowly rotates in the scene.
- **Interactive Hotspots** — six skill points anchored in 3D space. Hover over a point to reveal the skill category and description.
- **Orbit Controls** — visitors can rotate the model and zoom in/out; lateral pan is intentionally disabled to keep focus on the avatar.
- **GSAP Entry Animation** — a loading screen with smooth entrance animations before the scene appears.
- **Transparent Canvas** — the WebGL canvas sits behind the UI so the header, footer, and hotspot labels float naturally on top.
---
## 🛠️ Tech Stack
| Layer | Library / Tool |
|---|---|
| UI framework | [React 18](https://react.dev/) |
| Build tool | [Vite 6](https://vitejs.dev/) |
| 3D renderer | [Three.js](https://threejs.org/) |
| React bindings | [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) |
| 3D helpers | [@react-three/drei](https://github.com/pmndrs/drei) |
| Animations | [GSAP 3](https://gsap.com/) |
---
## 📁 Project Structure
```
src/
├── components/
│   ├── Avatar.jsx      # 3D model loader (GLB) + wireframe placeholder
│   ├── Hotspot.jsx     # HTML label anchored to a 3D position
│   ├── Loader.jsx      # Loading screen + GSAP entry animation
│   └── Scene.jsx       # R3F Canvas, lights, environment map, orbit controls
├── data/
│   ├── hotspots.js     # Skill points: position, title, description, icon
│   └── projects.js     # Portfolio projects list
├── styles/
│   └── global.css      # Global styles
├── App.jsx             # Root component (header, scene, footer)
└── main.jsx            # React entry point
```
---
## 🚀 Getting Started
### Prerequisites
- [Node.js](https://nodejs.org/) ≥ 18
- npm ≥ 9
### Installation
```bash
npm install
```
### Development
```bash
npm run dev
```
Opens a local dev server at `http://localhost:5173` with hot-module replacement.
### Production Build
```bash
npm run build
```
Outputs the static bundle to `dist/`.
### Preview the Build
```bash
npm run preview
```
Serves the production build locally for a final check before deployment.
---
## 🔧 Customisation
### Swapping in Your Real 3D Model
1. Export your 3D scan as a `.glb` file (Draco compression is supported).
2. Drop it in `public/` — e.g. `public/scan.glb`.
3. Open `src/components/Avatar.jsx` and update the constant:
   ```js
   const MODEL_PATH = "/scan.glb";
   ```
4. Adjust `scale` and `position` in the `RealModel` component to centre the model in the viewport.
### Repositioning Hotspots
Click anywhere on the model in the browser — the exact `[x, y, z]` coordinates are logged to the DevTools console. Copy them into `src/data/hotspots.js`.
### Editing Skill Content
All skill categories and descriptions live in `src/data/hotspots.js`. Edit the `title`, `description`, and `icon` fields freely.
### Editing Projects
The portfolio project list is in `src/data/projects.js`. Add, remove, or update entries as your portfolio grows.
---
## 👤 Author
**Timothée Criaud**
- GitHub: [@Feudai](https://github.com/Feudai)
- LinkedIn: [timothée-criaud](https://linkedin.com/in/timothée-criaud)
- Email: tim.criaud@gmail.com
---
## 📄 License
This project is personal and not currently under an open-source licence. Feel free to use it as inspiration for your own 3D CV.