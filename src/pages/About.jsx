import { motion } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'

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
                Tentang Kami
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                CV Suralaya Teknik
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Mitra terpercaya untuk solusi MEP sejak 2012
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
                  Profil Perusahaan
                </span>
                <h2 className="text-4xl font-bold text-gray-800">
                  Solusi MEP Terpercaya
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  CV. Suralaya Teknik, berdiri pada tahun 2012, adalah perusahaan MEP yang bergerak dalam solusi teknik mekanikal, elektrikal, dan plumbing. Kami menawarkan layanan konsultan yang komprehensif untuk membantu klien merancang, mengintegrasikan, dan memelihara sistem MEP yang efisien.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Dibekali dengan tenaga ahli yang berpengalaman dan pengetahuan mendalam mengenai industri, kami siap membantu perusahaan Anda mencapai tujuan operasional yang optimal dan menjaga kualitas lingkungan yang berkelanjutan.
                </p>

                <div className="pt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <p className="text-gray-600">
                      Jl. By Pass Ketaping No. 16B, RT. 05/RW. 06, Kelurahan Pasar Ambacang Kecamatan Kuranji, Kota Padang
                    </p>
                  </div>
                </div>
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

          {/* Organization Structure */}
          <section className="py-24 bg-gradient-to-b from-gray-50 to-white -mx-4 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                  Tim Kami
                </span>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">
                  Struktur Organisasi
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Tim profesional yang berdedikasi
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
        </div>
      </motion.div>
    </div>
  )
}

export default About