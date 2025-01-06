import { motion } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Users2, Target, Scale, Lightbulb } from 'lucide-react'

const About = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])

  return (
    <div className="min-h-screen relative overflow-hidden">
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
          About Us
        </span>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
          Our Story
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto">
          Building the future of MEP solutions with innovation, expertise, and dedication.
        </p>
      </motion.div>
    </div>
  </div>
</div>

      {/* Main Content */}
      <motion.div 
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-white px-4"
      >
        <div className="max-w-7xl mx-auto relative">
          {/* Company Description */}
          <section className="py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <span className="text-primary text-sm font-medium tracking-wider uppercase block">
                  Who We Are
                </span>
                <h2 className="text-4xl font-bold text-gray-800">
                  Your Trusted MEP Partner Since 2012
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  CV. Suralaya Teknik adalah mitra terpercaya dalam solusi teknik mekanikal, elektrikal, dan plumbing. Kami menawarkan layanan konsultan yang komprehensif untuk membantu klien merancang, mengintegrasikan, dan memelihara sistem MEP yang efisien.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Dibekali dengan tenaga ahli yang berpengalaman dan pengetahuan mendalam mengenai industri, kami siap membantu perusahaan anda mencapai tujuan operasional yang optimal dan menjaga kualitas lingkungan yang berkelanjutan.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl"
              >
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Visi</h3>
                  <p className="text-gray-600">
                    Menjadi perusahaan di bidang planning, Mekanikal, Elektrikal dan Plumbing yang berkualitas dan terpercaya yang menjamin kepuasan pengguna jasa, serta tanpa mengabaikan kemanfaatan bagi lingkungan sekitar.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Misi</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      </div>
                      <p className="text-gray-600">Menjadikan kepuasan pelanggan menjadi prioritas utama.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      </div>
                      <p className="text-gray-600">Kami menghargai hubungan jangka panjang dengan pelanggan, pemasok, dan mitra bisnis kami.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      </div>
                      <p className="text-gray-600">Kami berkomitmen untuk bekerja secara kolaboratif, saling mendukung, dan membangun kemitraan yang kuat untuk mencapai kesuksesan bersama.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      </div>
                      <p className="text-gray-600">Tepat waktu dalam bekerja.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      </div>
                      <p className="text-gray-600">Patuh terhadap persyaratan dari pelanggan dan peraturan perundang-udangan.</p>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </section>
          {/* Timeline */}
          <div className="relative py-24">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-100 -translate-x-1/2" />
            {[
              {
                year: "2008",
                title: "Company Founded",
                description: "Started with a vision to revolutionize MEP solutions"
              },
              {
                year: "2012",
                title: "Major Expansion",
                description: "Expanded services to cover all of Indonesia"
              },
              {
                year: "2016",
                title: "Innovation Hub",
                description: "Launched R&D center for sustainable solutions"
              },
              {
                year: "2024",
                title: "Digital Transformation",
                description: "Embracing smart building technologies"
              }
            ].map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex items-center gap-8 mb-16 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="inline-block">
                    <span className="text-4xl font-bold text-primary/30 mb-2 block">{item.year}</span>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="relative w-12 h-12">
                  <div className="absolute w-12 h-12 bg-white border-2 border-primary/20 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>

          {/* Organization Structure */}
          {/* Organization Structure */}
<section className="py-24 bg-gradient-to-b from-gray-50 to-white -mx-4 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
        Our Team
      </span>
      <h2 className="text-4xl font-bold mb-6 text-gray-800">
        Organization Structure
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Meet our dedicated professional team
      </p>
    </div>

    <div className="relative max-w-4xl mx-auto">
      {/* Direktur */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-8"
      >
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-xl shadow-xl w-72 text-center transform transition-transform hover:scale-105">
          <div className="text-white/80 text-lg mb-2">Direktur</div>
          <div className="text-white font-bold text-xl">Suroto</div>
        </div>
      </motion.div>

      {/* Vertical Line */}
      <div className="w-px h-12 bg-blue-300 mx-auto -mt-4 mb-4"></div>

      {/* Penanggung Jawab Teknik */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-8"
      >
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl shadow-lg w-72 text-center transform transition-transform hover:scale-105">
          <div className="text-white/80 text-lg mb-2">Penanggung Jawab Teknik</div>
          <div className="text-white font-bold text-xl">Irfansyah, ST</div>
        </div>
      </motion.div>

      {/* Vertical Line */}
      <div className="w-px h-12 bg-blue-300 mx-auto -mt-4 mb-4"></div>

      {/* Three Positions Level */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-12">
        {/* Horizontal Connecting Line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-blue-300 -translate-y-1/2"></div>
        
        {/* Administrasi */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="bg-gradient-to-br from-blue-400 to-blue-500 p-6 rounded-xl shadow-lg w-full text-center transform transition-transform hover:scale-105">
            <div className="text-white/80 text-lg mb-2">Administrasi</div>
            <div className="text-white font-bold text-xl">Taufiqul Qadri</div>
          </div>
        </motion.div>

        {/* Pelaksana Lapangan */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="bg-gradient-to-br from-blue-400 to-blue-500 p-6 rounded-xl shadow-lg w-full text-center transform transition-transform hover:scale-105">
            <div className="text-white/80 text-lg mb-2">Pelaksana Lapangan</div>
            <div className="text-white font-bold text-xl">Wahyo Chloriana</div>
          </div>
        </motion.div>

        {/* Teknisi */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="bg-gradient-to-br from-blue-400 to-blue-500 p-6 rounded-xl shadow-lg w-full text-center transform transition-transform hover:scale-105">
            <div className="text-white/80 text-lg mb-2">Teknisi</div>
            <div className="text-white font-bold text-xl">Dani Saputra Ifrian</div>
          </div>
        </motion.div>
      </div>

      {/* Vertical Line to Administrasi Logistik */}
      <div className="w-px h-12 bg-blue-300 mx-auto mb-4"></div>

      {/* Administrasi Logistik */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        <div className="bg-gradient-to-br from-blue-400 to-blue-500 p-6 rounded-xl shadow-lg w-72 text-center transform transition-transform hover:scale-105">
          <div className="text-white/80 text-lg mb-2">Administrasi Logistik</div>
          <div className="text-white font-bold text-xl">Ilham Akbar</div>
        </div>
      </motion.div>
    </div>
  </div>
</section>
    
          {/* Values Section */}
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-24 bg-gray-50 -mx-4 px-4"
          >
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                Core Values
              </span>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">What Drives Us</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our values shape everything we do and guide us in delivering excellence to our clients
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  icon: Target,
                  title: "Excellence",
                  description: "We strive for excellence in every project we undertake, ensuring the highest quality standards."
                },
                {
                  icon: Scale,
                  title: "Integrity",
                  description: "Building lasting relationships through honest practices and transparent communication."
                },
                {
                  icon: Lightbulb,
                  title: "Innovation",
                  description: "Continuously evolving and embracing new technologies to deliver cutting-edge solutions."
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                  <div className="absolute inset-0 border-b-2 border-transparent group-hover:border-primary/20 transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div> */}

          {/* {/* Additional Section - Stats */}
          {/* <section className="py-24 bg-gradient-to-br from-primary/5 to-blue-500/5">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { number: "15+", label: "Years Experience" },
                  { number: "500+", label: "Projects Completed" },
                  { number: "100+", label: "Expert Team Members" },
                  { number: "50+", label: "Active Clients" }
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
          </section>  */}
        </div>
      </motion.div>
    </div>
  )
}

export default About