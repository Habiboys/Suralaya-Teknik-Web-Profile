import { motion } from 'framer-motion'
import { Building2, Calendar, CheckCircle2 } from 'lucide-react'

const Projects = () => {
  const projectsByYear = {
    2024: [
      {
        client: "Semen Padang Hospital",
        description: "Pengadaan dan Penggantian AC VRF Semen Padang Hospital"
      }
    ],
    2018: [
      {
        client: "PT. Rimbo Peraduan",
        description: "Proyek Asrama Haji Sumbar"
      },
      {
        client: "PT. Tunas Pembangunan",
        description: "Proyek RSUD Rengat"
      },
      {
        client: "PT. Tasya Total Persada",
        description: "Proyek BNI Cabang Cibinong"
      },
      {
        client: "PT. Tasya Total Persada",
        description: "Proyek BAPEDA Padang"
      }
    ],
    2013: [
      {
        client: "BPK Padang",
        description: "Mechanical Elektrical Pemasangan AC Kantor BPK Padang"
      },
      {
        client: "PT. GBE",
        description: "Proyek Gedung Bea Cukai Padang"
      },
      {
        client: "UNP Teknik Padang",
        description: "Mechanical Elektrical Pemasangan AC"
      },
      {
        client: "PT. Rimbo Peraduan",
        description: [
          "Proyek Gedung Bung Hatta Padang",
          "Proyek Gedung Pertanian Padang"
        ]
      }
    ],
    2012: [
      {
        client: "PT. CASA PRIMA",
        description: "Proyek Renovasi Gedung RSUD M. Djamil Padang"
      },
      {
        client: "PT. Raikin",
        description: "Proyek PLTU Teluk Sirih Padang"
      }
    ],
    2011: [
      {
        client: "PT. Grafos",
        description: "Proyek Gedung Nasional Batu Sangkar"
      },
      {
        client: "PT. Paduan Bakti",
        description: "Proyek BPKP Padang"
      }
    ],
    2010: [
      {
        client: "PT. Rimbo Peraduan",
        description: "Proyek PDAM Padang"
      },
      {
        client: "PT. Paduan Bakti",
        description: "Proyek Taspen Padang"
      }
    ],
    2023: [
      {
        client: "CV. Atar Graha Mandiri",
        description: "Proyek Pembangunan Gedung Fakultas Kedokteran Gigi Universitas Andalas Padang"
      },
      {
        client: "PT. Tambarang Elastika Mas",
        description: "Pembangunan Rumkit RSAD TK III dr. Reksodiwiryo KESDAM I/BB"
      },
      {
        client: "CV. Citra Karya Jaya",
        description: "Lanjutan Pembangunan RSUD Sungai Dareh Kabupaten Dharmasraya"
      },
      {
        client: "PT. Satria Lestari Multi",
        description: "Lanjutan Pembangunan RS Pratama Kabupaten Sijunjung"
      },
      {
        client: "Hotel Atiyan Bukittinggi",
        description: "Mechanical Electrical Plumbing & HVAC"
      }
    ],
    2022: [
      {
        client: "Anugerah-Nindya Beton Kso",
        description: "Proyek Pembangunan Gedung Laboratorium Sentral Universitas Andalas Padang"
      },
      {
        client: "PT. Grafos Grahapersada",
        description: "Proyek Pembangunan Lanjutan Balai Diklat Bukittinggi"
      },
      {
        client: "PT. Grafos Grahapersada",
        description: "Proyek Pembangunan Gedung Apoteker STIFARM Padang"
      },
      {
        client: "Vegas Club Padang",
        description: "Pengadaan dan Pasang Instalasi AC VRV System"
      }
    ],
    2021: [
      {
        client: "PT. Semen Padang / PO PT. Pasoka Sumber Karya",
        description: "Pemasangan Unit AC VRV System Indarung VI"
      },
      {
        client: "PT. Bumi Permata Kendari",
        description: "Proyek Pembangunan Gedung Labor FIS Universitas Negeri Padang"
      },
      {
        client: "PT. Bumi Delta Hatten",
        description: [
          "Proyek Pembangunan Gedung Fakultas Teknik Universitas Negeri Padang",
          "Proyek Pembangunan Gedung Rumah Tahfiz Adzkia Padang"
        ]
      }
    ],
    2020: [
      {
        client: "PT. Rimbo Arafah",
        description: "Proyek Rumah Sakit Pratama Solok Selatan"
      },
      {
        client: "PT. Sas Bunaiyya Innovation",
        description: "Proyek RSUD Sungai Dareh Dharmasraya"
      },
      {
        client: "PT. Surya Pratama Mandiri",
        description: "Proyek RSUD Sungai Dareh Dharmasraya"
      }
    ],
    2019: [
      {
        client: "CV. Yulindo Jaya Mandiri",
        description: "Proyek Badan Pertahanan Nasional"
      },
      {
        client: "CV. Alivindo Perkasa",
        description: "Proyek Gedung ISI Padang Panjang"
      },
      {
        client: "PT. Grafos",
        description: "Proyek UNP Micro Teaching"
      },
      {
        client: "PT. Satria Lestari Multi",
        description: "Proyek Asrama Haji Gedung Serba Guna"
      },
      {
        client: "KSO PT. Multi Structure - PT. Mtiga Power Management Gumanti",
        description: "Proyek Pembangunan PLTM Gumanti III di Alahan Panjang"
      }
    ]
  }

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
                Portfolio Kami
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Proyek Unggulan
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Rekam jejak keberhasilan dalam menghadirkan solusi HVAC terbaik
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Projects List */}
      <div className="bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-7xl mx-auto px-4 py-24">
          {Object.entries(projectsByYear)
            .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
            .map(([year, projects]) => (
              <motion.div
                key={year}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-20 last:mb-0"
              >
                <div className="flex items-center justify-between mb-8">
                  <motion.div 
                    initial={{ x: -20 }}
                    whileInView={{ x: 0 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-800">
                      {year}
                    </h2>
                  </motion.div>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent ml-8" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.map((project, index) => (
                    <motion.div
                      key={`${year}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 h-full">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center flex-shrink-0 transition-colors">
                            <Building2 className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-primary transition-colors">
                              {project.client}
                            </h3>
                            {Array.isArray(project.description) ? (
                              <ul className="space-y-2">
                                {project.description.map((desc, i) => (
                                  <li key={i} className="flex items-start gap-2 text-gray-600">
                                    <CheckCircle2 className="w-5 h-5 text-primary/60 mt-0.5" />
                                    <span>{desc}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <div className="flex items-start gap-2 text-gray-600">
                                <CheckCircle2 className="w-5 h-5 text-primary/60 mt-0.5" />
                                <span>{project.description}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Projects