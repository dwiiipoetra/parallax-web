import { useParams, Link } from "react-router-dom"
import projects from "../data/section/projects.json"

export const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <p className="text-center text-red-500">Project not found.</p>;

  return (
        <section className="py-20 px-4 bg-gray-950 text-gray-300 w-full ">
            <div className="max-w-6xl mx-auto">
                {/* Title + Date */}
                <div className="flex items-baseline justify-between border-b border-gray-700 py-20 text-yellow-400">
                    <h1 className="w-4/5 text-7xl font-bold">{project.title}</h1>
                    <span className="w-1/5 text-xl font-semibold text-right">{project.details.date}</span>
                </div>

                {/* Category, Tech, Client */}
                <div className="flex py-10">
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
                </div>

                {/* First image */}
                <img
                    src={project.img}
                    alt={project.title}
                    className="w-full my-20 rounded-lg"
                />

                {/* Description */}
                <p className="text-5xl font-semibold leading-16 text-center max-w-4xl mx-auto">
                    {project.desc}
                </p>

                <div className="border-t border-gray-700 my-20 mx-auto w-1/3 origin-center"/>

                {/* Features */}
                <div className="space-y-6 mt-12">
                    <h1 className="text-6xl font-bold text-center text-yellow-400">
                        Features
                    </h1>
                    <ul className="list-disc list-inside my-10 text-left text-3xl max-w-2xl mx-auto space-y-6">
                        {project.details.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>

                {/* Two more images */}
                {project.details.images.map((img, index) => (
                    <>
                        <img
                        key={index}
                        src={img.src}
                        alt={`Feature ${index + 1}`}
                        className="w-full my-20 rounded-lg"
                        />
                        <p className="border-l-6 border-yellow-400 pl-6 text-3xl text-left max-w-4xl mx-auto leading-relaxed">
                            {img.desc}
                        </p>
                    </>
                ))}
            </div>
        </section>
  );
}
