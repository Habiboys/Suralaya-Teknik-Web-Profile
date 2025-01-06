import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, CheckCircle2, Building2, Users2, Trophy, Clock, ArrowUpRight, Lightbulb, Leaf, Wrench, Zap, Activity, BarChart3, Shield, Settings } from 'lucide-react';

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
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-white/10" />
        </div>
        
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeInUpVariants} className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-white text-sm font-medium mb-4">
              Engineering Excellence
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeInUpVariants}
            className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600"
          >
            CV. Suralaya Teknik
          </motion.h1>

          <motion.p 
            variants={fadeInUpVariants}
            className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto"
          >
            Creating the future of MEP solutions with innovative engineering and sustainable design
          </motion.p>

          <motion.div
            variants={fadeInUpVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/contact"
              className="group inline-flex items-center px-6 py-3 rounded-full bg-primary text-white font-medium transition-all hover:bg-primary/90 hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/projects"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white border-2 border-gray-200 text-gray-700 font-medium hover:border-primary hover:text-primary transition-colors"
            >
              View Projects
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce" />
        </motion.div>
      </motion.div>

{/* Overview Section */}
<section className="relative py-24 overflow-hidden bg-white">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop"
            alt="Office Interior"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
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
                <span className="text-primary font-medium">Why Choose Us</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-800">
                Experience the Future of Building Systems
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our innovative approach combines cutting-edge technology with sustainable practices to deliver exceptional results for every project.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Expert Team",
                    description: "Highly qualified professionals with extensive industry experience"
                  },
                  {
                    title: "Quality Assurance",
                    description: "Rigorous standards and meticulous attention to detail"
                  },
                  {
                    title: "Innovative Solutions",
                    description: "State-of-the-art technology and smart integration"
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
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-20"
          >
            <motion.h2 variants={fadeInUpVariants} className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Advanced Technology Integration
            </motion.h2>
            <motion.p variants={fadeInUpVariants} className="text-xl text-gray-600 max-w-2xl mx-auto">
              Leveraging cutting-edge technology to create smart, efficient building systems
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Smart Building Systems",
                description: "Automated controls and monitoring for optimal performance",
                icon: Settings
              },
              {
                title: "Energy Analytics",
                description: "Real-time data analysis for efficiency optimization",
                icon: BarChart3
              },
              {
                title: "Security Integration",
                description: "Advanced security systems with smart features",
                icon: Shield
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
              Our Features
            </motion.span>
            <motion.h2 variants={fadeInUpVariants} className="text-4xl font-bold mb-6 text-gray-800">
              We Deliver Excellence
            </motion.h2>
            <motion.p variants={fadeInUpVariants} className="text-lg text-gray-600 leading-relaxed">
              Transforming spaces with innovative MEP solutions and sustainable design principles
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[
              {
                title: "Innovation",
                description: "Cutting-edge solutions tailored for modern buildings",
                icon: Lightbulb,
                accent: "border-blue-200"
              },
              {
                title: "Sustainability",
                description: "Eco-friendly approaches for a better future",
                icon: Leaf,
                accent: "border-green-200"
              },
              {
                title: "Expertise",
                description: "Skilled professionals with proven track record",
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

      {/* Capabilities Section */}
      <section className="relative py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col md:flex-row gap-16 items-start"
          >
            <motion.div variants={fadeInUpVariants} className="md:sticky md:top-24 md:w-1/3">
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">What We Do</span>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Our Capabilities
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive solutions for modern building systems with focus on efficiency and sustainability
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="md:w-2/3 space-y-12"
            >
              {[
                {
                  icon: Zap,
                  title: "Power Systems",
                  description: "Advanced electrical distribution and management systems designed for optimal performance and reliability."
                },
                {
                  icon: Activity,
                  title: "HVAC Solutions",
                  description: "State-of-the-art climate control systems that ensure comfort while maximizing energy efficiency."
                },
                {
                  icon: BarChart3,
                  title: "Energy Management",
                  description: "Smart monitoring and optimization solutions that reduce costs and environmental impact."
                },
                {
                  icon: Shield,
                  title: "Safety Systems",
                  description: "Comprehensive building protection integrating the latest security and safety technologies."
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUpVariants}
                  className="group relative flex items-start gap-6 p-6 hover:bg-white rounded-2xl transition-colors duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/5">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">How We Work</span>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Process</h2>
              <p className="text-lg text-gray-600">
                A systematic approach to delivering excellence in every project
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
                { number: "01", title: "Consultation", desc: "Understanding your unique requirements and project goals" },
                { number: "02", title: "Planning", desc: "Developing detailed solutions tailored to your needs" },
                { number: "03", title: "Execution", desc: "Implementing solutions with precision and expertise" },
                { number: "04", title: "Support", desc: "Providing continuous maintenance and optimization" }
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
              Ready to Transform Your Space?
            </motion.h2>
            <motion.p 
              variants={fadeInUpVariants}
              className="text-xl mb-10 text-white/90"
            >
              Let's discuss how we can help you achieve your engineering goals
            </motion.p>
            <motion.div
              variants={fadeInUpVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-full bg-white text-primary font-medium hover:bg-gray-100 transition-all duration-300 group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-4 rounded-full border-2 border-white text-white font-medium hover:bg-white hover:text-primary transition-all duration-300"
              >
                View Projects
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;