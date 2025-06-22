import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="font-sans bg-gray-50 min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/training" element={<Training />} />
          <Route path="/recovery" element={<Recovery />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">NeuroEdge</h1>
      <nav className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
        <Link to="/tests" className="text-gray-700 hover:text-blue-500">Take a Test</Link>
        <Link to="/training" className="text-gray-700 hover:text-blue-500">Training</Link>
        <Link to="/recovery" className="text-gray-700 hover:text-blue-500">Cognitive Recovery</Link>
        <Link to="/dashboard" className="text-gray-700 hover:text-blue-500">Dashboard</Link>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <main className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Train Your Brain. Track Your Growth. Transform Your Life.</h2>
      <p className="mb-6 text-gray-600">Explore 20+ cognitive tests and training programs designed for all intellect levels and recovery stages.</p>
      <Link to="/tests" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">Get Started</Link>
    </main>
  );
}

function Tests() {
  const categories = [
    "Logical Reasoning", "Short-Term Memory", "Pattern Recognition", "Verbal IQ",
    "Creativity", "Strategic Reasoning", "Visual Attention", "Auditory Memory",
    "Mathematical Logic", "Abstract Thinking", "Spatial Intelligence", "Problem Solving",
    "Linguistic Fluency", "Working Memory", "Decision-Making", "Processing Speed",
    "Observation Accuracy", "Emotional Reasoning", "Multi-tasking", "Cognitive Flexibility"
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Select a Test</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow hover:shadow-lg cursor-pointer">
            <h3 className="text-lg font-bold text-blue-600">{cat}</h3>
            <p className="text-sm text-gray-500">Challenge your {cat.toLowerCase()} skills with a scientifically crafted test.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Training() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Training Programs</h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-600">
        <li>Daily Brain Teasers and Memory Games</li>
        <li>Adaptive Challenges Based on Skill Level</li>
        <li>Timed Logic Tasks and Mental Agility Drills</li>
        <li>Creative Problem Solving Exercises</li>
        <li>Progressive Visual and Auditory Training Sets</li>
      </ul>
    </div>
  );
}

function Recovery() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Cognitive Recovery Section</h2>
      <p className="text-gray-600 mb-4">Track recovery stages with diagnostic testing. Start targeted therapy and improve outcomes.</p>
      <div className="bg-white p-4 rounded-xl shadow">
        <p className="text-gray-700 mb-2">🧠 Identify your cognitive stage based on memory, attention, and response scores.</p>
        <p className="text-gray-700">🚀 Personalized recovery plans designed for cognitive rehabilitation patients.</p>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your Progress Dashboard</h2>
      <p className="text-gray-600">Track test history, recovery level, and training performance. Set personal goals and milestones.</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-100 p-4 text-center text-sm text-gray-500 mt-10">
      © 2025 NeuroEdge | Built for All Intellects | Privacy Policy | Affiliate Disclosure
    </footer>
  );
}

export default App;