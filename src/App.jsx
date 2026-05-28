import { useState } from "react"
import { motion } from "framer-motion"
import resume from "./assets/resume.pdf"
import {
  FaPython,
  FaReact,
  FaDatabase,
  FaTools,
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes
} from "react-icons/fa"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="min-h-screen bg-[#0f1117] text-white relative overflow-hidden">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gray-700/20 rounded-full blur-[120px] -z-10"></div>

      <div className="absolute top-[40%] right-0 w-[400px] h-[400px] bg-gray-500/10 rounded-full blur-[120px] -z-10"></div>


      
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full border-b border-[#2d333b] bg-[#0f1117]/80 backdrop-blur-md z-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center justify-between h-20">

            {/* LOGO */}
            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-xl bg-[#161b22]/80 border border-[#2d333b] flex items-center justify-center font-bold">

                DH

              </div>

              <span className="hidden md:block text-gray-300 font-medium">
                Dhananjay Hegde
              </span>

            </div>


            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-10 text-gray-300">

              <a
                href="#home"
                className="hover:text-white transition duration-300"
              >
                Home
              </a>

              <a
                href="#skills"
                className="hover:text-white transition duration-300"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="hover:text-white transition duration-300"
              >
                Projects
              </a>

              <a
              href="#about"
              className="hover:text-white transition duration-300"
            >
              About
              </a> 
            <a
              href="#contact"
              className="hover:text-white transition duration-300"
            >
              Contact
            
          </a>

            </div>


            {/* MOBILE BUTTON */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >

              {menuOpen ? <FaTimes /> : <FaBars />}

            </button>

          </div>


          {/* MOBILE MENU */}
          {menuOpen && (

            <div className="md:hidden pb-6 flex flex-col gap-6 text-gray-300">

              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white transition"
              >
                Home
              </a>

              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white transition"
              >
                Skills
              </a>

              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white transition"
              >
                Projects
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white transition"
              >
                About
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white transition"
              >
                Contact
              </a>

            </div>

          )}

        </div>

      </nav>

      
        {/* HERO SECTION */}
        <section
          id="home"
          className="flex items-center min-h-screen px-6 pt-32 md:pt-0"
        >

          <div className="max-w-7xl mx-auto w-full">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl space-y-8"
            >

              {/* INTRO */}
              <p className="text-gray-400 tracking-[4px] uppercase text-sm">
                Software Engineer
              </p>

              {/* MAIN HEADING */}
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight max-w-5xl">

              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Building modern
            </span>
                <span className="text-gray-300">
                  {" "}backend systems
                </span>,
                APIs & AI-powered applications.

              </h1>

              {/* DESCRIPTION */}
              <p className="text-gray-300 text-lg md:text-2xl leading-relaxed max-w-3xl">

                MCA graduate focused on FastAPI, REST APIs,
                authentication systems, workflow platforms,
                and real-time monitoring applications using
                Python, React, and modern development tools.

              </p>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-5 pt-4">

                <a
                  href="https://github.com/dhananjayhegde05"
                  target="_blank"
                  className="px-7 py-4 bg-[#161b22]/80 backdrop-blur-md border border-[#2d333b] rounded-2xl hover:bg-[#2d333b] transition duration-300"
                >

                  <div className="flex items-center gap-3">
                    <FaGithub />
                    View GitHub
                  </div>

                </a>

                <a
                  href="https://linkedin.com/in/dhananjayhegde-863399229"
                  target="_blank"
                  className="px-7 py-4 bg-white text-black rounded-2xl hover:bg-gray-300 transition duration-300"
                >

                  <div className="flex items-center gap-3">
                    <FaLinkedin />
                    LinkedIn
                  </div>

                </a>
                
                <a
                  href={resume}
                  download
                  className="px-7 py-4 bg-[#161b22]/80 backdrop-blur-md border border-[#2d333b] rounded-2xl hover:bg-[#2d333b] transition duration-300"
                >
                  Download Resume
                </a>



              </div>

            </motion.div>

          </div>

        </section>




      {/* SKILLS SECTION */}
      <section
        id="skills"
        className="px-6 py-24 border-t border-[#2d333b] bg-[#11151c]"
      >

        <div className="max-w-7xl mx-auto">

          {/* SECTION HEADING */}
          <div className="mb-16">

            <p className="text-gray-400 uppercase tracking-[3px] text-sm">
              Technical Skills
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Technologies & Tools
            </h2>

          </div>


          {/* SKILLS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">


            {/* BACKEND */}
            <div className="bg-[#161b22]/80 backdrop-blur-md border border-[#2d333b] rounded-2xl p-6 hover:-translate-y-3 hover:shadow-2xl transition duration-300">

              <div className="flex items-center gap-4 mb-6">

                <FaPython className="text-3xl text-gray-300" />

                <h3 className="text-2xl font-semibold">
                  Backend
                </h3>

              </div>

              <div className="space-y-3 text-gray-300">

                <p>Python</p>
                <p>FastAPI</p>
                <p>REST APIs</p>
                <p>JWT Authentication</p>
                <p>SQLAlchemy</p>

              </div>

            </div>


            {/* FRONTEND */}
            <div className="bg-[#161b22]/80 backdrop-blur-md border border-[#2d333b] rounded-2xl p-6 hover:-translate-y-3 hover:shadow-2xl transition duration-300">

              <div className="flex items-center gap-4 mb-6">

                <FaReact className="text-3xl text-gray-300" />

                <h3 className="text-2xl font-semibold">
                  Frontend
                </h3>

              </div>

              <div className="space-y-3 text-gray-300">

                <p>ReactJS</p>
                <p>JavaScript</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>Bootstrap</p>

              </div>

            </div>


            {/* DATABASE */}
            <div className="bg-[#161b22]/80 backdrop-blur-md border border-[#2d333b] rounded-2xl p-6 hover:-translate-y-3 hover:shadow-2xl transition duration-300">

              <div className="flex items-center gap-4 mb-6">

                <FaDatabase className="text-3xl text-gray-300" />

                <h3 className="text-2xl font-semibold">
                  Database
                </h3>

              </div>

              <div className="space-y-3 text-gray-300">

                <p>MySQL</p>
                <p>SQLite</p>

              </div>

            </div>


            {/* TOOLS */}
            <div className="bg-[#161b22]/80 backdrop-blur-md border border-[#2d333b] rounded-2xl p-6 hover:-translate-y-3 hover:shadow-2xl transition duration-300">

              <div className="flex items-center gap-4 mb-6">

                <FaTools className="text-3xl text-gray-300" />

                <h3 className="text-2xl font-semibold">
                  Tools
                </h3>

              </div>

              <div className="space-y-3 text-gray-300">

                <p>Git & GitHub</p>
                <p>Postman</p>
                <p>Docker</p>
                <p>Linux</p>
                <p>VS Code</p>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="px-6 py-24 border-t border-[#2d333b] bg-[#11151c]"
      >

        <div className="max-w-7xl mx-auto">

          {/* HEADING */}
          <div className="mb-16">

            <p className="text-gray-400 uppercase tracking-[3px] text-sm">
              Featured Projects
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Selected Work
            </h2>

          </div>


          {/* PROJECTS GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">


            {/* PROJECT 1 */}
            <div className="bg-[#161b22]/80 backdrop-blur-md border border-[#2d333b] rounded-3xl p-8 hover:-translate-y-3 hover:shadow-2xl transition duration-300">

              <h3 className="text-2xl font-bold mb-4">
                HireSense AI
              </h3>

              <p className="text-gray-300 leading-relaxed mb-6">

                ATS-style resume analyzer built using FastAPI,
                SQLite, and document parsing workflows to compare
                resumes with job descriptions.

              </p>

              <div className="flex flex-wrap gap-3 mb-6">

                <span className="px-3 py-1 bg-[#0f1117] border border-[#2d333b] rounded-full text-sm">
                  FastAPI
                </span>

                <span className="px-3 py-1 bg-[#0f1117] border border-[#2d333b] rounded-full text-sm">
                  SQLite
                </span>

                <span className="px-3 py-1 bg-[#0f1117] border border-[#2d333b] rounded-full text-sm">
                  Python
                </span>

              </div>

              <a
                href="https://github.com/dhananjayhegde05/hirensense-ai"
                target="_blank"
                className="text-white hover:text-gray-400 transition"
              >
                View Project →
              </a>

            </div>


            {/* PROJECT 2 */}
            <div className="bg-[#161b22]/80 backdrop-blur-md border border-[#2d333b] rounded-3xl p-8 hover:-translate-y-3 hover:shadow-2xl transition duration-300">

              <h3 className="text-2xl font-bold mb-4">
                TaskFlow API
              </h3>

              <p className="text-gray-300 leading-relaxed mb-6">

                Task management backend system with JWT
                authentication, CRUD workflows, and modular
                REST API architecture.

              </p>

              <div className="flex flex-wrap gap-3 mb-6">

                <span className="px-3 py-1 bg-[#0f1117] border border-[#2d333b] rounded-full text-sm">
                  FastAPI
                </span>

                <span className="px-3 py-1 bg-[#0f1117] border border-[#2d333b] rounded-full text-sm">
                  JWT
                </span>

                <span className="px-3 py-1 bg-[#0f1117] border border-[#2d333b] rounded-full text-sm">
                  SQLAlchemy
                </span>

              </div>

              <a
                href="https://github.com/dhananjayhegde05/taskflow-api"
                target="_blank"
                className="text-white hover:text-gray-400 transition"
              >
                View Project →
              </a>

            </div>


            {/* PROJECT 3 */}
            <div className="bg-[#161b22]/80 backdrop-blur-md border border-[#2d333b] rounded-3xl p-8 hover:-translate-y-3 hover:shadow-2xl transition duration-300">

              <h3 className="text-2xl font-bold mb-4">
                FaceFocus
              </h3>

              <p className="text-gray-300 leading-relaxed mb-6">

                Real-time monitoring system using Python and
                OpenCV for face detection, live analysis,
                and alert-based tracking workflows.

              </p>

              <div className="flex flex-wrap gap-3 mb-6">

                <span className="px-3 py-1 bg-[#0f1117] border border-[#2d333b] rounded-full text-sm">
                  OpenCV
                </span>

                <span className="px-3 py-1 bg-[#0f1117] border border-[#2d333b] rounded-full text-sm">
                  Python
                </span>

                <span className="px-3 py-1 bg-[#0f1117] border border-[#2d333b] rounded-full text-sm">
                  Computer Vision
                </span>

              </div>

              <a
                href="#"
                className="text-white hover:text-gray-400 transition"
              >
                View Project →
              </a>

            </div>

          </div>

        </div>

      </section>



      {/* ABOUT SECTION */}
      <section
        id="about"
        className="px-6 py-24 border-t border-[#2d333b] bg-[#11151c]"
      >

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE */}
            <div>

              <p className="text-gray-400 uppercase tracking-[3px] text-sm">
                About Me
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">

                Software engineer focused on building
                scalable backend systems and AI-powered applications.

              </h2>

            </div>


            {/* RIGHT SIDE */}
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">

              <p>

                I specialize in developing backend systems,
                REST APIs, authentication workflows, and
                real-time monitoring applications using
                Python, FastAPI, and modern development tools.

              </p>

              <p>

                My projects focus on solving practical problems
                through scalable software architecture,
                workflow automation, and AI-driven systems.

              </p>

              <p>

                I enjoy building clean, structured applications
                with strong emphasis on performance,
                maintainability, and real-world usability.

              </p>

            </div>

          </div>

        </div>

        
</section>



        {/* CONTACT SECTION */}
        <section
          id="contact"
          className="px-6 py-24 border-t border-[#2d333b]"
        >

          <div className="max-w-5xl mx-auto text-center">

            {/* HEADING */}
            <p className="text-gray-400 uppercase tracking-[3px] text-sm">
              Contact
            </p>

            <h2 className="text-4xl md:text-6xl font-bold mt-6 leading-tight">

              Let’s build something impactful together.

            </h2>

            <p className="text-gray-300 text-lg md:text-xl mt-8 leading-relaxed max-w-3xl mx-auto">

              Open to software engineering, backend development,
              Python, FastAPI, and AI-focused opportunities.

            </p>


            {/* BUTTONS */}
            <div className="flex flex-wrap items-center justify-center gap-5 mt-12">

              <a
                href="mailto:hegdedhananjay5@gmail.com"
                className="px-8 py-4 bg-white text-black rounded-2xl hover:bg-gray-300 transition duration-300"
              >
                Email Me
              </a>

              <a
                href="https://github.com/dhananjayhegde05"
                target="_blank"
                className="px-8 py-4 bg-[#161b22]/80 backdrop-blur-md border border-[#2d333b] rounded-2xl hover:bg-[#2d333b] transition duration-300"
              >

                <div className="flex items-center gap-3">
                  <FaGithub />
                  GitHub
                </div>

              </a>

            </div>

          </div>

        </section>



        {/* FOOTER */}
        <footer className="border-t border-[#2d333b] py-8 px-6">

          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-gray-400 text-sm">
              © 2026 Dhananjay Hegde. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-gray-400">

              <a
                href="https://github.com/dhananjayhegde05"
                target="_blank"
                className="hover:text-white transition"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/dhananjayhegde-863399229"
                target="_blank"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>

            </div>

          </div>

        </footer>


            </div>


  )
}

export default App

