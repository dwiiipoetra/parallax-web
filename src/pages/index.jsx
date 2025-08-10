import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import HeadingText from "../components/HeadingText";
import insights from "../data/section/insights.json"
import projects from "../data/section/projects.json"
import faq from "../data/section/faq.json"
import ourjourney from "../data/section/ourjourney.json"

export default function Index() {
  // faq section
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset:["start start", "end start"] });

  // Parallax effects
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 200]); // hero background parallax

  const cardVariants = {
    hidden: { opacity:0, y:30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2
      }
    })
  }
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
          <HeadingText text="Featured Projects" mb="mb-10"/>

              <motion.div
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.2
                    }
                  }
                }}
              >
                {/* Project Card */}
                {
                projects.map((item, index) => (
                <motion.div
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                  key={index}
                  custom={index}
                  variants={{
                    hidden: { opacity:0, y:50 },
                    show: { opacity:1, y:0 }
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-yellow-400">{item.title}</h3>
                    <p className="text-sm text-yellow-300 mb-2">{item.category}</p>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                </motion.div>
                ))
                }
              </motion.div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section id="about" className="py-20 px-4 bg-gray-950 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <HeadingText text="MediaVision Studio"/>

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
          <HeadingText text="Our Journey" mb="mb-10"/>
          
          <div className="space-y-10">
            {ourjourney.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800/90 border border-gray-700 rounded-xl px-6 py-5 shadow-lg text-center"
              >
                <h3 className="text-2xl font-semibold text-yellow-300">{item.year}</h3>
                <p className="text-gray-200">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-20 px-4 bg-gray-950 w-full">
        <div className="max-w-4xl mx-auto">
          <HeadingText text="Insights" mb="mb-10"/>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Insights Card*/}
            {
              insights.map((item, index) => (
                <motion.div
                  className="bg-gray-800 rounded-lg p-6 shadow-md"
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                >
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">{item.desc}</p>
                  <a href="#" className="text-sm text-yellow-400 hover:underline">Read more →</a>
                </motion.div>
              ))
            }
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 px-4 bg-[#0B1120] w-full flex">
        <div className="max-w-5xl mx-auto text-center">
          <HeadingText text="MediaVision in Numbers" mb="mb-10"/>

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
          <HeadingText text="Frequently Asked Questions" mb="mb-10"/>
          <div className="space-y-6">
            {faq.map((item, index) => (
                <motion.div
                  key={index}
                  className="border-b border-gray-700 pb-3 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="flex justify-between items-center text-lg font-semibold text-yellow-300">
                    {item.question}
                    <span className="text-gray-400">
                      {openIndex === index ? "-" : "+"}
                    </span>
                  </h4>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.p
                        className="text-gray-300 mt-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            }
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="py-20 px-4 bg-yellow-400 text-black w-full">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <HeadingText text="Ready to Elevate Your Media Presence?" color="text-black"/>
          </motion.div>

          <motion.p
            className="mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's collaborate on building next-gen experiences for your viewers.
            Reach out today and let's talk ideas.
          </motion.p>

          <motion.a
            href="mailto:youremail@example.com"
            className="inline-block bg-black text-yellow-400 px-6 py-3 rounded-md font-semibold hover:bg-gray-900 transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Start a Project
          </motion.a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-6 px-4 bg-gray-950 text-center text-gray-500 text-sm w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="hover:text-gray-300 transition-colors"
        >
          &copy; {new Date().getFullYear()} MediaVision Studio. All rights reserved.
        </motion.div>
      </footer>
    </main>
  );
}
