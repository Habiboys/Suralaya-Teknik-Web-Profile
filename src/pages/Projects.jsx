import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { X, Clock, DollarSign, Building2, CheckCircle2 } from 'lucide-react'

const Projects = () => {
  const containerRef = useRef(null)
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: "Skyline Tower",
      category: "Commercial",
      description: "Complete MEP installation for 40-story office building",
      image: "https://images.unsplash.com/photo-1635837594301-aee27378931f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: {
        client: "Skyline Development",
        duration: "18 months",
        value: "$12M",
        scope: [
          "HVAC System Installation",
          "Smart Building Integration",
          "Energy Management System",
          "Water Treatment Facility"
        ]
      }
    },
    {
      title: "Green Hospital",
      category: "Healthcare",
      description: "Sustainable MEP solutions for modern healthcare facility",
      image: "https://images.unsplash.com/photo-1635837594301-aee27378931f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: {
        client: "Healthcare Group",
        duration: "24 months",
        value: "$15M",
        scope: [
          "Medical Gas Systems",
          "Clean Room Design",
          "Emergency Power Systems",
          "Waste Management"
        ]
      }
    },
    {
      title: "Smart Mall",
      category: "Retail",
      description: "Integrated MEP systems for shopping complex",
      image: "https://images.unsplash.com/photo-1635837594301-aee27378931f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: {
        client: "Retail Developers",
        duration: "12 months",
        value: "$8M",
        scope: [
          "Central HVAC",
          "Fire Protection",
          "Building Automation",
          "Parking Ventilation"
        ]
      }
    }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Banner */}

        {/* Hero Banner with Image Background */}
        <div className="relative py-40 px-4 w-full">
  {/* Background Image Container */}
  <div className="absolute inset-0 w-full">
    <img 
      src="https://images.unsplash.com/photo-1635837594301-aee27378931f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Engineering Background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/50"></div>
  </div>

  {/* Content Container */}
  <div className="relative">
    <div className="max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8,
          ease: "easeOut"
        }}
      >
        <span className="text-white text-sm font-medium tracking-wider uppercase mb-4 block">
              Our Work
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Featured Projects
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Explore our portfolio of successful implementations
            </p>
      </motion.div>
    </div>
  </div>
</div>

      {/* Main Content */}
      <div className="bg-white">
        {/* Projects Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-32 last:mb-0"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? 'lg:grid-flow-col' : 'lg:grid-flow-col-dense'
                }`}>
                  <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl group cursor-pointer"
                         onClick={() => setSelectedProject(project)}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    </div>
                  </div>
                  
                  <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                    <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                      {project.category}
                    </span>
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 mb-6 text-lg">
                      {project.description}
                    </p>
                    
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      <div>
                        <Building2 className="w-5 h-5 text-primary mb-2" />
                        <div className="text-sm text-gray-600">Client</div>
                        <div className="font-medium text-gray-800">{project.details.client}</div>
                      </div>
                      <div>
                        <Clock className="w-5 h-5 text-primary mb-2" />
                        <div className="text-sm text-gray-600">Duration</div>
                        <div className="font-medium text-gray-800">{project.details.duration}</div>
                      </div>
                      <div>
                        <DollarSign className="w-5 h-5 text-primary mb-2" />
                        <div className="text-sm text-gray-600">Value</div>
                        <div className="font-medium text-gray-800">{project.details.value}</div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-primary font-medium hover:text-primary/80 transition-colors flex items-center gap-2"
                    >
                      View Details
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "50+", label: "Projects Completed" },
                { number: "30+", label: "Happy Clients" },
                { number: "15+", label: "Years Experience" },
                { number: "100%", label: "Success Rate" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-4xl w-full p-8 relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              onClick={() => setSelectedProject(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="aspect-[4/3] rounded-xl overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div>
                <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">
                  {selectedProject.category}
                </span>
                <h3 className="text-3xl font-bold mb-4 text-gray-800">{selectedProject.title}</h3>
                <p className="text-gray-600 mb-6">{selectedProject.description}</p>
                
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div>
                    <Building2 className="w-5 h-5 text-primary mb-2" />
                    <div className="text-sm text-gray-600">Client</div>
                    <div className="font-medium text-gray-800">{selectedProject.details.client}</div>
                  </div>
                  <div>
                    <Clock className="w-5 h-5 text-primary mb-2" />
                    <div className="text-sm text-gray-600">Duration</div>
                    <div className="font-medium text-gray-800">{selectedProject.details.duration}</div>
                  </div>
                  <div>
                    <DollarSign className="w-5 h-5 text-primary mb-2" />
                    <div className="text-sm text-gray-600">Value</div>
                    <div className="font-medium text-gray-800">{selectedProject.details.value}</div>
                  </div>
                </div>

                <h4 className="font-bold mb-4 text-gray-800">Project Scope</h4>
                <ul className="space-y-3">
                  {selectedProject.details.scope.map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-gray-600"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary/60" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default Projects