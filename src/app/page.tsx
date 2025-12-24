'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Building2, HardHat, Wrench, Home, Shield, CheckCircle } from 'lucide-react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Bangunan Komersial",
      description: "Konstruksi gedung perkantoran, pertokoan, dan fasilitas bisnis modern"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Bangunan Residensial",
      description: "Pembangunan rumah tinggal, perumahan, dan villa dengan kualitas terbaik"
    },
    {
      icon: <HardHat className="w-8 h-8" />,
      title: "Infrastruktur",
      description: "Pengerjaan jalan, jembatan, dan infrastruktur dasar lainnya"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Renovasi",
      description: "Jasa renovasi dan perbaikan bangunan dengan hasil maksimal"
    }
  ];

  const advantages = [
    "Pengalaman lebih dari 10 tahun",
    "Tim profesional dan bersertifikat",
    "Menggunakan material berkualitas",
    "Harga kompetitif dan transparan",
    "Garansi untuk semua proyek",
    "Tepat waktu dan sesuai budget"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">CV ALJUAR</h1>
                <p className="text-xs text-gray-600">Konstruksi Profesional</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Layanan</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</a>
              <button className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all">
                Hubungi Kami
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Beranda</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Layanan</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Tentang</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Kontak</a>
              <button className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white px-6 py-2 rounded-full mt-2">
                Hubungi Kami
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-orange-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Konstruksi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Berkualitas</span> untuk Masa Depan
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                CV ALJUAR adalah mitra terpercaya untuk semua kebutuhan konstruksi Anda. 
                Dengan pengalaman lebih dari 10 tahun, kami menghadirkan solusi bangunan 
                yang kokoh, fungsional, dan estetis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-3 rounded-full hover:shadow-xl transition-all flex items-center justify-center">
                  Konsultasi Gratis
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all">
                  Lihat Portfolio
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="CV ALJUAR Logo" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Layanan Konstruksi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Terlengkap</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan konstruksi untuk memenuhi kebutuhan proyek Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Mengapa Memilih <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">CV ALJUAR</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Sebagai perusahaan konstruksi terkemuka di Kalimantan Barat, kami berkomitmen 
                untuk memberikan hasil terbaik dengan standar kualitas tertinggi.
              </p>
              
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-orange-500 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Informasi Perusahaan</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Building2 className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">CV ALJUAR</p>
                    <p className="text-blue-100">Perusahaan Konstruksi Profesional</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Alamat</p>
                    <p className="text-blue-100">
                      JLN. SUNAN KALIJAGA, Desa/Kelurahan Tuan-Tuan, Kec. Benua Kayong, 
                      Kab. Ketapang, Provinsi Kalimantan Barat, 78822
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Telepon</p>
                    <p className="text-blue-100">082382466266</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-blue-100">info@cv-aljuar.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Siap Mewujudkan Proyek Konstruksi Anda?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Konsultasikan kebutuhan konstruksi Anda dengan tim profesional kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:shadow-xl transition-all font-semibold">
              <Phone className="w-5 h-5 inline mr-2" />
              Hubungi Sekarang
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-600 transition-all font-semibold">
              <Mail className="w-5 h-5 inline mr-2" />
              Kirim Email
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Hubungi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Kami</span>
            </h2>
            <p className="text-lg text-gray-600">
              Kami siap membantu mewujudkan proyek konstruksi Anda
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Kirim Pesan</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Subjek</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Subjek pesan"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Pesan</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tuliskan pesan Anda..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white px-6 py-3 rounded-full hover:shadow-xl transition-all font-semibold"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Informasi Kontak</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Telepon</p>
                      <p className="text-gray-600">082382466266</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">info@cv-aljuar.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Alamat</p>
                      <p className="text-gray-600">
                        JLN. SUNAN KALIJAGA, Desa/Kelurahan Tuan-Tuan, 
                        Kec. Benua Kayong, Kab. Ketapang, Provinsi Kalimantan Barat, 78822
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">CV ALJUAR</h3>
                  <p className="text-xs text-gray-400">Konstruksi Profesional</p>
                </div>
              </div>
              <p className="text-gray-400">
                Mitra terpercaya untuk semua kebutuhan konstruksi Anda.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Bangunan Komersial</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bangunan Residensial</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Infrastruktur</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Renovasi</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CV ALJUAR. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}