import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function MediaPortfolio() {
  const ref = useRef(null);
  const milestones = [
    { year: '2018', description: 'Founded by a team of media enthusiasts.' },
    { year: '2020', description: 'Produced our first national television campaign.' },
    { year: '2022', description: 'Partnered with 10+ major broadcasting networks.' },
    { year: '2024', description: 'Expanded into OTT and mobile content platforms.' },
  ]
  const { scrollYProgress } = useScroll({ target: ref, offset:["start start", "end start"] });

  // Parallax effects
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 200]); // hero background parallax

  return (
    <main className="w-full bg-black text-white font-sans">
      {/* Hero Section */}
      <section
        ref={ref}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Parallax Image */}
        <motion.img layout="position"
          src="https://images.unsplash.com/photo-1705951439619-28c0fbbd0ab0?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ y: yHero }}
        />

        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90 z-10" />

        {/* Content */}
        {/* Teks Animasi */}
        <motion.div
          className="z-10 text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 text-yellow-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Elevating Media Through Visual Innovation
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl mb-6 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Digital solutions crafted for broadcasting and entertainment industries.
          </motion.p>

          <motion.a
            href="#projects"
            className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-300 transition"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Explore Our Projects
          </motion.a>
        </motion.div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-900 w-full">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-yellow-400">
            Featured Projects
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <motion.div
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="https://images.unsplash.com/photo-1558886668-e9a014c0141a?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="TV Show Website"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-yellow-400">TV Show Landing Page</h3>
                <p className="text-sm text-yellow-300 mb-2">Broadcast / Web Platform</p>
                <p className="text-gray-300">
                  An interactive landing page designed for a live television program featuring voting integration and live broadcast schedules.
                </p>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="https://images.unsplash.com/photo-1685440663653-fa3e81dd109c?q=80&w=1486&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Media Mobile App"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-yellow-400">Media Streaming App</h3>
                <p className="text-sm text-yellow-300 mb-2">Mobile App</p>
                <p className="text-gray-300">
                  A responsive mobile application that allows users to watch live channels and access exclusive shows on-demand.
                </p>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1691223714409-b0cb1629f0f7?q=80&w=1820&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Newsroom CMS"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-yellow-400">Digital Newsroom Platform</h3>
                <p className="text-sm text-yellow-300 mb-2">Broadcast / Web CMS</p>
                <p className="text-gray-300">
                  A headless CMS built for news broadcasters with real-time publishing, user roles, and integration to video pipelines.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section id="about" className="py-20 px-4 bg-gray-950 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6 text-yellow-400"
          >
            MediaVision Studio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg"
          >
            A creative digital studio specialized in providing cutting-edge visual experiences for the media and broadcasting industry.
            From UI/UX design to interactive content and web development, our team helps media brands stand out in the digital space.
          </motion.p>
        </div>
      </section>

      <section className="relative py-20 px-4 w-full overflow-hidden flex items-center justify-center">
        {/* Content */}
        <div className="z-20 text-center px-4 text-white max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-10 text-yellow-400"
          >
            Our Journey
          </motion.h2>

          <div className="space-y-10">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800/90 border border-gray-700 rounded-xl px-6 py-5 shadow-lg text-left"
              >
                <h3 className="text-2xl font-semibold text-yellow-300">{milestone.year}</h3>
                <p className="text-gray-200">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-20 px-4 bg-gray-950 w-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-yellow-400">Insights</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Insight 1 */}
            <div className="bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                The Evolution of Broadcast in the Digital Age
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                As traditional media blends with digital platforms, broadcasters must rethink storytelling formats, audience engagement, and content delivery.
              </p>
              <a href="#" className="text-sm text-yellow-400 hover:underline">Read more →</a>
            </div>

            {/* Insight 2 */}
            <div className="bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                Designing for Second Screens
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                Audiences now consume TV content with a phone in hand. Learn how to build companion experiences that extend broadcast content to mobile.
              </p>
              <a href="#" className="text-sm text-yellow-400 hover:underline">Read more →</a>
            </div>

            {/* Insight 3 */}
            <div className="bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                Interactive News Portals: The New Norm
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                Static news websites are being replaced by dynamic, real-time experiences. Explore the role of UX and animation in modern news portals.
              </p>
              <a href="#" className="text-sm text-yellow-400 hover:underline">Read more →</a>
            </div>

          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 px-4 bg-[#0B1120] w-full flex">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-yellow-400">MediaVision in Numbers</h2>

          {/* Statistik */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-20">
            <div>
              <h3 className="text-4xl font-bold text-yellow-400">120+</h3>
              <p className="text-gray-300">TV Campaigns</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-yellow-400">15</h3>
              <p className="text-gray-300">Awards Won</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-yellow-400">30+</h3>
              <p className="text-gray-300">Clients</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-yellow-400">4M+</h3>
              <p className="text-gray-300">Viewers Reached</p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-12 mx-auto w-1/3" />

          {/* Klien */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-300">Trusted By Leading Media Brands</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              We are proud to have collaborated with forward-thinking companies that shape the broadcasting landscape.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-gray-800 px-6 py-4 rounded-md text-white shadow-md">MediaCorp</div>
              <div className="bg-gray-800 px-6 py-4 rounded-md text-white shadow-md">TVOne</div>
              <div className="bg-gray-800 px-6 py-4 rounded-md text-white shadow-md">VisionTV</div>
              <div className="bg-gray-800 px-6 py-4 rounded-md text-white shadow-md">IndoMedia</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-black w-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-yellow-400">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-yellow-300">Do you work with TV stations outside of Indonesia?</h4>
              <p className="text-gray-300">Yes. We collaborate with international media partners to deliver tailored visual solutions.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-yellow-300">Can we request a custom media project?</h4>
              <p className="text-gray-300">Absolutely. We handle end-to-end custom projects based on your broadcasting goals and audience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="py-20 px-4 bg-yellow-400 text-black w-full">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Media Presence?</h2>
          <p className="mb-6">
            Let's collaborate on building next-gen experiences for your viewers.
            Reach out today and let's talk ideas.
          </p>
          <a
            href="mailto:youremail@example.com"
            className="inline-block bg-black text-yellow-400 px-6 py-3 rounded-md font-semibold hover:bg-gray-900 transition"
          >
            Start a Project
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-10 px-4 bg-gray-950 text-center text-gray-500 text-sm w-full">
        &copy; {new Date().getFullYear()} MediaVision Studio. All rights reserved.
      </footer>
    </main>
  );
}
