import { useEffect } from "react";
import { useParams, Link } from "react-router-dom"
import projects from "../data/section/projects.json"
import { motion, AnimatePresence } from "motion/react";
import { ParallaxBanner } from "react-scroll-parallax";
import CinematicText from "../components/CinematicText";

export const ProjectDetail = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <p className="text-center text-red-500">Project not found.</p>;

  return (
    <AnimatePresence>
      <motion.section
        key={project.id}
        className="py-20 px-4 bg-gray-950 text-gray-300 w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto py-10">
          {/* Title + Date */}
          <motion.div
            className="flex items-baseline justify-between text-yellow-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="w-4/5 text-7xl font-bold">{project.title}</h1>
            <span className="w-1/5 text-xl font-semibold text-right">
              {project.details.date}
            </span>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-gray-700 my-12 mx-auto w-full origin-center"
          />
          
          {/* Info */}
          <motion.div
            className="flex py-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="w-1/4 border-r border-gray-700">
              <p className="font-bold text-yellow-400">Category</p>
              <p>{project.category}</p>
            </div>
            <div className="w-1/4 ml-10 border-r border-gray-700">
              <p className="font-bold text-yellow-400">Tech Stack</p>
              <p>{project.details.tech.join(", ")}</p>
            </div>
            <div className="w-1/4 ml-10">
              <p className="font-bold text-yellow-400">Client</p>
              <p>{project.details.client}</p>
            </div>
          </motion.div>

          {/* Parallax Main Image */}
          <ParallaxBanner
            layers={[{ image: project.img, speed: -20 }]}
            className="h-[600px] my-20 rounded-lg overflow-hidden"
          />

          {/* Description */}
          <CinematicText classProp="text-5xl leading-16 text-center max-w-4xl mx-auto" text={project.desc} />

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-gray-700 my-12 mx-auto w-1/3 origin-center"
          />

          {/* Features */}
          <motion.div
            className="space-y-6 mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { staggerChildren: 0.4 } // jeda antar item
                }
            }}
          >
            <h2 className="text-6xl font-bold text-center text-yellow-400">
              Features
            </h2>
            <motion.ul className="list-disc list-inside my-10 text-left text-3xl max-w-2xl mx-auto space-y-6">
              {project.details.features.map((feature, index) => (
                <motion.li
                    key={index}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    {feature}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Features Images with Parallax */}
          {project.details.images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <ParallaxBanner
                layers={[{ image: img.src, speed: -15 }]}
                className="h-[500px] my-20 rounded-lg overflow-hidden"
              />
              <motion.p
                className="text-3xl text-left max-w-4xl mx-auto leading-relaxed tracking-wide"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                >
                {img.desc}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
