import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Wind, Wrench, Home, CheckCircle2 } from 'lucide-react'

const Services = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const services = [
    {
      title: "Komersial HVAC",
      description: "Layanan komprehensif untuk sistem pendingin udara komersial, dari desain hingga pemeliharaan.",
      icon: Wind,
      features: [
        "Desain & Instalasi AC Komersial",
        "Penjualan Perangkat HVAC",
        "Servis & Pemeliharaan Berkala",
        "Solusi Hemat Energi"
      ]
    },
    {
      title: "Domestik & Residensial",
      description: "Solusi pendingin udara untuk rumah dan properti residensial dengan layanan lengkap.",
      icon: Home,
      features: [
        "Instalasi AC Rumah",
        "Penjualan Unit AC",
        "Servis & Perbaikan",
        "Konsultasi Sistem"
      ]
    },
    {
      title: "Pemeliharaan & Perbaikan",
      description: "Layanan pemeliharaan terencana dan perbaikan untuk semua jenis sistem pendingin.",
      icon: Wrench,
      features: [
        "Pemeliharaan Rutin",
        "Perbaikan Darurat",
        "Inspeksi Berkala",
        "Optimasi Kinerja"
      ]
    }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Banner */}
      <div className="relative py-40 px-4 w-full">
        {/* Background Image Container */}
        <div className="absolute inset-0 w-full">
          <img 
              src="https://images.unsplash.com/photo-1635837594301-aee27378931f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="HVAC Services Background"
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
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-white text-sm font-medium tracking-wider uppercase mb-4 block">
                Layanan Kami
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Solusi HVAC Terpercaya
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Spesialis sistem pendingin udara untuk komersial dan residensial
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
        className="bg-white"
      >
        {/* Services Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="group"
                >
                  <div className="p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-3 text-gray-600"
                        >
                          <CheckCircle2 className="w-5 h-5 text-primary/60" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">Cara Kami Bekerja</span>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Proses Layanan</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Pendekatan profesional untuk setiap proyek HVAC
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200 hidden md:block" />
              {[
                { step: "01", title: "Konsultasi", description: "Analisis kebutuhan dan sistem yang sesuai" },
                { step: "02", title: "Desain", description: "Perencanaan sistem yang efisien" },
                { step: "03", title: "Instalasi", description: "Pemasangan oleh tim ahli" },
                { step: "04", title: "Maintenance", description: "Pemeliharaan dan dukungan berkelanjutan" }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative bg-white p-6 rounded-lg group hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                      {item.step}
                    </span>
                    <div className="w-3 h-3 rounded-full bg-primary/20 group-hover:bg-primary transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary/5 to-blue-500/5">
          <div className="max-w-3xl mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Butuh Solusi HVAC?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Konsultasikan kebutuhan sistem pendingin udara Anda dengan tim ahli kami
              </p>
              <button className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
                Hubungi Kami
              </button>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  )
}

export default Services