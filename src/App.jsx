// Full React portfolio with cosmic background, routing, CV download, skills, research & interests
// Drop into src/App.jsx (Vite + React + Tailwind)
import './index.css';
import profilePic from './assets/me.jpeg';
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function CosmicBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-slate-950">
      <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:4px_4px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
    </div>
  );
}

function NavButton({ to, label }) {
  return (
    <Link
      to={to}
      className="px-5 py-2 rounded-full border border-slate-700 text-slate-300 bg-slate-900 hover:bg-slate-800 hover:text-white transition"
    >
      {label}
    </Link>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-slate-900/70 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-4">
        <NavButton label="Home" to="/" />
        <NavButton label="About" to="/about" />
        <NavButton label="Portfolio" to="/portfolio" />
        <NavButton label="Research" to="/research" />
        <NavButton label="Skills & Interests" to="/interests" />
      </div>
    </nav>
  );
}

function Section({ title, children }) {
  return (
    <section className="py-28 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-serif text-slate-200 mb-12 text-center">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Card({ title, children }) {
  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
      <h3 className="text-xl font-serif text-slate-100 mb-2">{title}</h3>
      {children}
    </div>
  );
}

function Home() {
  return (
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24">
      <div className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border border-slate-700 mb-8">
        <img
          src={profilePic}
          alt="Katlego Magabane"
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="text-5xl md:text-7xl font-serif text-slate-100 mb-6">
        Katlego Magabane
      </h1>

      <p className="text-xl max-w-xl text-slate-400 mb-8">
        Quantitative Analyst & Developer BSc Hons Applied Mathematics| BSc Computer Science<br />
        Building robust software solutions driven by mathematical models.
      </p>

      <div className="flex gap-6 mb-8 text-slate-400">
        <a href="https://github.com/justb28" target="_blank" className="hover:text-white transition">GitHub</a>
        <a href="https://www.linkedin.com/in/katlego-magabane" target="_blank" className="hover:text-white transition">LinkedIn</a>
        <a href="mailto:k.magabane28@gmail.com" className="hover:text-white transition">Email</a>
      </div>

      <a
        href="KatlegoMagabane-CV.pdf"
        download
        className="mb-10 px-8 py-3 rounded-full border border-slate-600 text-slate-200 hover:bg-slate-800 transition"
      >
        Download CV
      </a>

      <NavButton label="View Portfolio" to="/portfolio" />
    </section>
  );
}

function About() {
  const images = [
    'images/IMG_8834.jpeg',
    'images/IMG_9011.jpeg',
    'images/IMG_8933.jpeg',
  ];
  const [index, setIndex] = useState(0);

  return (
    <Section title="About Me">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src={images[index]}
            className="rounded-xl border border-slate-700 w-full h-96 object-cover"
          />
          <div className="flex justify-between mt-4">
            <button
              onClick={() => setIndex((index - 1 + images.length) % images.length)}
              className="px-4 py-2 bg-slate-800 rounded"
            >
              ←
            </button>
            <button
              onClick={() => setIndex((index + 1) % images.length)}
              className="px-4 py-2 bg-slate-800 rounded"
            >
              →
            </button>
          </div>
        </div>
        <p className="text-slate-300 leading-relaxed">
         Mathematician turned Developer. 
         I combine an Honours background in Applied Math with Computer Science to tackle complex data challenges. 
         Focused on computational modelling, numerical methods, and machine learning.
        </p> 
      </div>
    </Section>
  );
}

function Portfolio() {
  return (
    <Section title="Portfolio">
      <div className="grid md:grid-cols-3 gap-6">
        <Card title="ML Honours Project">
          <p className="text-slate-400">
            Developed a U-Net Convolutional Neural Network for semantic segmentation of maize crops. Optimized the model for pest detection in high-noise environments using Python and PyTorch.</p>
        </Card>
        <Card title="Android Strategy Game (Python-Based)">
          <p className="text-slate-400">Developed a fully functional mobile application deployed on Android. Architected the core game logic and win-condition algorithms using Python, ensuring efficient state evaluation. Designed a custom, responsive UI to interface seamlessly with the backend logic.</p>
        </Card>
        <Card title="Plant Sales Web App">
          <p className="text-slate-400">Engineered a full-stack Single Page Application from scratch to master web fundamentals. Built a custom DOM-based state management system using Vanilla JavaScript and CSS. Developed a PHP backend to handle database interactions, implementing secure password hashing and data sanitization protocols.</p>
        </Card>
      </div>
    </Section>
  );
}

function Research() {
  return (
    <Section title="Research">
      <Card title="Current Focus">
        <p className="text-slate-400">
          Currently focused on Financial Machine Learning, Algorithmic Trading, and Full Stack Development
        </p>
      </Card>
    </Section>
  );
}

function Interests() {
  return (
    <Section title="Skills & Tools">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-serif text-slate-200 mb-4">Programming Languages</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-slate-800 rounded">Python</span>
            <span className="px-3 py-1 bg-slate-800 rounded">Java</span>
            <span className="px-3 py-1 bg-slate-800 rounded">MATLAB</span>
            <span className="px-3 py-1 bg-slate-800 rounded">JavaScript</span>
            <span className="px-3 py-1 bg-slate-800 rounded">PHP</span>
            <span className="px-3 py-1 bg-slate-800 rounded">SQL</span>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-serif text-slate-200 mb-4">Libraries & Frameworks</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-slate-800 rounded">NumPy</span>
            <span className="px-3 py-1 bg-slate-800 rounded">Pandas</span>
            <span className="px-3 py-1 bg-slate-800 rounded">Matplotlib</span>
            <span className="px-3 py-1 bg-slate-800 rounded">SciPy</span>
            <span className="px-3 py-1 bg-slate-800 rounded">PyTorch</span>
            <span className="px-3 py-1 bg-slate-800 rounded">React</span>
            <span className="px-3 py-1 bg-slate-800 rounded">Tailwind CSS</span>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-serif text-slate-200 mb-4">Technical Skills</h3>
          <ul className="list-disc pl-5 text-slate-400 space-y-2">
            <li>Machine learning & image segmentation</li>
            <li>Computational modelling</li>
            <li>Numerical methods</li>
            <li>Data analysis & visualisation</li>
            <li>Software Engineering & Web Development</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-200">
        <CosmicBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/research" element={<Research />} />
          <Route path="/interests" element={<Interests />} />
        </Routes>
        <footer className="py-10 text-center text-slate-500">
          © {new Date().getFullYear()} Katlego Magabane
        </footer>
      </div>
    </Router>
  );
}
