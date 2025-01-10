import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, CheckCircle2, Building2, Users2, Trophy, Clock, ArrowUpRight, Lightbulb, Leaf, Wrench, Zap, Activity, BarChart3, Shield, Settings, Wind } from 'lucide-react';

const Home = () => {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  
  const headerOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const headerY = useTransform(scrollY, [0, 300], [0, -100]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
{/* Hero Section */}
<motion.div 
  style={{ opacity: headerOpacity, y: headerY }}
  className="relative h-screen flex items-center justify-center px-4"
>
  <div className="absolute inset-0">
    <img 
       src="https://images.unsplash.com/photo-1635837594301-aee27378931f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Modern Architecture"
      className="w-full h-full object-cover"
    />
    {/* Updated gradient overlay for better contrast and professional look */}
    <div className="absolute inset-0 bg-black/50"></div>
  </div>
  
  <motion.div
    initial="hidden"
    animate={isVisible ? "visible" : "hidden"}
    variants={containerVariants}
    className="relative z-10 max-w-4xl mx-auto text-center"
  >
    <motion.div variants={fadeInUpVariants} className="mb-6">
      <span className="inline-block px-6 py-2 rounded-full bg-blue-500/20 text-blue-100 text-sm font-medium mb-4 backdrop-blur-sm">
        Solusi MEP Terpercaya
      </span>
    </motion.div>

    <motion.h1 
      variants={fadeInUpVariants}
      className="text-6xl md:text-7xl font-bold mb-6 text-white"
    >
      CV. Suralaya Teknik
    </motion.h1>

    <motion.p 
      variants={fadeInUpVariants}
      className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto"
    >
      Mitra terpercaya dalam solusi teknik mekanikal, elektrikal, dan plumbing sejak 2012
    </motion.p>

    <motion.div
      variants={fadeInUpVariants}
      className="flex flex-col sm:flex-row gap-4 justify-center"
    >
      <Link 
        to="/contact"
        className="group inline-flex items-center px-8 py-4 rounded-full bg-blue-600 text-white font-medium transition-all hover:bg-blue-700 hover:scale-105"
      >
        Hubungi Kami
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
      
      <Link 
        to="/projects"
        className="inline-flex items-center px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-medium hover:bg-white/20 hover:border-white/30 transition-all"
      >
        Lihat Proyek
      </Link>
    </motion.div>
  </motion.div>
</motion.div>
      {/* Overview Section */}
      <section className="relative py-24 overflow-hidden bg-white">
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUpVariants}>
              <div className="flex items-center gap-2 mb-6">
                <span className="h-px w-8 bg-primary"></span>
                <span className="text-primary font-medium">Mengapa Memilih Kami</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-800">
                Solusi HVAC Terpercaya
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Kami menyediakan layanan komprehensif untuk sistem pendingin udara komersial dan domestik dengan standar kualitas tertinggi.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Tim Ahli",
                    description: "Didukung oleh tenaga profesional berpengalaman di bidang HVAC"
                  },
                  {
                    title: "Layanan Lengkap",
                    description: "Dari desain, penjualan, instalasi hingga pemeliharaan"
                  },
                  {
                    title: "Pengalaman Luas",
                    description: "Telah dipercaya menangani berbagai proyek sejak 2012"
                  }
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeInUpVariants} className="relative lg:h-[600px]">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-2xl blur-2xl" />
              <div className="relative h-full rounded-2xl overflow-hidden shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
                  alt="Modern Office"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="relative py-24 bg-gray-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-20"
          >
            <motion.h2 variants={fadeInUpVariants} className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Layanan HVAC Komprehensif
            </motion.h2>
            <motion.p variants={fadeInUpVariants} className="text-xl text-gray-600 max-w-2xl mx-auto">
              Solusi sistem pendingin udara yang efisien untuk berbagai kebutuhan
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "AC Komersial",
                description: "Desain, penjualan, servis dan pemasangan sistem AC untuk gedung komersial",
                icon: Building2
              },
              {
                title: "AC Domestik",
                description: "Solusi pendingin udara untuk kebutuhan rumah dan properti residensial",
                icon: Wind
              },
              {
                title: "Pemeliharaan",
                description: "Layanan pemeliharaan dan perbaikan terencana untuk semua kebutuhan AC",
                icon: Settings
              }
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUpVariants}
                className="relative group"
              >
                <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm group-hover:shadow-md group-hover:border-primary/30 transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.span variants={fadeInUpVariants} className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Keunggulan Kami
            </motion.span>
            <motion.h2 variants={fadeInUpVariants} className="text-4xl font-bold mb-6 text-gray-800">
              Komitmen Pada Kualitas
            </motion.h2>
            <motion.p variants={fadeInUpVariants} className="text-lg text-gray-600 leading-relaxed">
              Menghadirkan solusi HVAC terbaik dengan standar kualitas tinggi
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[
              {
                title: "Keahlian",
                description: "Tim profesional dengan pengalaman luas di bidang HVAC",
                icon: Users2,
                accent: "border-blue-200"
              },
              {
                title: "Kualitas",
                description: "Menggunakan peralatan dan material berkualitas tinggi",
                icon: Shield,
                accent: "border-green-200"
              },
              {
                title: "Pelayanan",
                description: "Layanan after-sales dan maintenance yang terjamin",
                icon: Wrench,
                accent: "border-violet-200"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeInUpVariants}
                className="group relative"
              >
                <div className={`absolute -inset-px border-b-2 ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-20"
          >
            <motion.div variants={fadeInUpVariants} className="text-center max-w-3xl mx-auto">
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">Cara Kerja Kami</span>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Proses Layanan</h2>
              <p className="text-lg text-gray-600">
                Pendekatan sistematis untuk setiap proyek HVAC
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="relative"
          >
            <div className="absolute top-1/2 left-0 w-full h-px bg-gray-100" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {[
                { number: "01", title: "Konsultasi", desc: "Analisis kebutuhan dan sistem yang sesuai" },
                { number: "02", title: "Desain", desc: "Perencanaan sistem yang efisien" },
                { number: "03", title: "Instalasi", desc: "Pemasangan oleh tim ahli" },
                { number: "04", title: "Maintenance", desc: "Pemeliharaan dan dukungan berkelanjutan" }
              ].map((step, index) => (
                <motion.div
                  key={step.number}
                  variants={fadeInUpVariants}
                  className="relative group"
                >
                  <div className="flex flex-col items-start p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                        {step.number}
                      </span>
                      <div className="w-3 h-3 rounded-full bg-primary/20 group-hover:bg-primary transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">

         <div className="absolute inset-0">
          <div className="absolute inset-0 bg-primary mix-blend-multiply opacity-90" />
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Building"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <motion.h2 
              variants={fadeInUpVariants} 
              className="text-4xl font-bold mb-6"
            >
              Butuh Solusi HVAC?
            </motion.h2>
            <motion.p 
              variants={fadeInUpVariants}
              className="text-xl mb-10 text-white/90"
            >
              Konsultasikan kebutuhan sistem pendingin udara Anda dengan tim ahli kami
            </motion.p>
            <motion.div
              variants={fadeInUpVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-full bg-white text-primary font-medium hover:bg-gray-100 transition-all duration-300 group"
              >
                Hubungi Kami
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-4 rounded-full border-2 border-white text-white font-medium hover:bg-white hover:text-primary transition-all duration-300"
              >
                Lihat Proyek
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;