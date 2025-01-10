import { motion } from 'framer-motion'
import { useState } from 'react'
import { Phone, Mail, Clock, MapPin } from 'lucide-react'

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitStatus('success')
    setFormState({
      name: '',
      email: '',
      phone: '',
      message: '',
    })
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
                Hubungi Kami
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Kontak Kami
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Diskusikan kebutuhan sistem HVAC Anda dengan kami
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Mari Terhubung</h2>
                <p className="text-lg text-gray-600 mb-12">
                  Kami siap membantu menjawab pertanyaan Anda tentang layanan HVAC kami. Hubungi kami melalui saluran berikut.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Alamat</h3>
                  </div>
                  <p className="text-gray-600 pl-16">
                    Jl. By Pass Ketaping No. 16B<br />
                    RT. 05/RW. 06, Kel. Pasar Ambacang<br />
                    Kec. Kuranji, Kota Padang
                  </p>
                </div>

                <div className="group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Jam Kerja</h3>
                  </div>
                  <div className="text-gray-600 pl-16 space-y-1">
                    <p>Senin - Jumat: 08:00 - 17:00</p>
                    <p>Sabtu: 08:00 - 15:00</p>
                    <p>Minggu: Tutup</p>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Telepon</h3>
                  </div>
                  <p className="text-gray-600 pl-16">
                    (0751) 463793
                  </p>
                </div>

                <div className="group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Email</h3>
                  </div>
                  <p className="text-gray-600 pl-16">
                    cv.suralayateknik@yahoo.co.id
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Kirim Pesan</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    No. Telepon
                  </label>
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={e => setFormState({...formState, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors h-32"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors
                    ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                </button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-600 text-center bg-green-50 p-4 rounded-lg"
                  >
                    Pesan berhasil terkirim!
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact