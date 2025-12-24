'use client';

import { useState } from 'react';
import { Menu, X, ArrowLeft, Shield, Eye, Lock, Database, UserCheck, Globe, FileText } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">CV ALJUAR</h1>
                <p className="text-xs text-gray-600">Konstruksi Profesional</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</Link>
              <Link href="/terms" className="text-gray-700 hover:text-blue-600 transition-colors">Terms & Conditions</Link>
              <Link href="/" className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all">
                Kembali
              </Link>
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
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Beranda</Link>
              <Link href="/terms" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Terms & Conditions</Link>
              <Link href="/" className="block px-3 py-2 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-full mt-2">
                Kembali
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">CV ALJUAR</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kebijakan privasi ini menjelaskan bagaimana CV ALJUAR mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.
            </p>
            <p className="text-sm text-gray-500 mt-2">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Introduction */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Pendahuluan</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  Selamat datang di CV ALJUAR. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi yang Anda berikan kepada kami. 
                  Kebijakan privasi ini berlaku untuk semua layanan yang kami tawarkan melalui website kami dan menjelaskan praktik pengumpulan, 
                  penggunaan, dan perlindungan data pribadi Anda.
                </p>
              </div>
            </section>

            {/* Information Collection */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Database className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Informasi yang Kami Kumpulkan</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Informasi Pribadi</h3>
                  <p className="text-gray-600">
                    Kami dapat mengumpulkan informasi pribadi seperti:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>Nama lengkap</li>
                    <li>Alamat email</li>
                    <li>Nomor telepon</li>
                    <li>Alamat lengkap</li>
                    <li>Informasi perusahaan (jika berlaku)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Informasi Teknis</h3>
                  <p className="text-gray-600">
                    Kami juga mengumpulkan informasi teknis seperti:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>Alamat IP</li>
                    <li>Jenis browser</li>
                    <li>Informasi perangkat</li>
                    <li>Data penggunaan website</li>
                    <li>Cookie dan teknologi serupa</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Information Usage */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Penggunaan Informasi</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Kami menggunakan informasi yang dikumpulkan untuk:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Layanan Pelanggan</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Merespons pertanyaan Anda</li>
                      <li>• Memberikan konsultasi proyek</li>
                      <li>• Mengirim penawaran harga</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Pengembangan Bisnis</h4>
                    <ul className="text-sm text-orange-800 space-y-1">
                      <li>• Mengirim informasi layanan</li>
                      <li>• Newsletter (dengan persetujuan)</li>
                      <li>• Penawaran promosi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Protection */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Lock className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Perlindungan Data</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Kami melindungi informasi pribadi Anda melalui:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Enkripsi Data</h4>
                      <p className="text-gray-600 text-sm">Semua data pribadi dienkripsi menggunakan teknologi SSL/TLS</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Akses Terbatas</h4>
                      <p className="text-gray-600 text-sm">Hanya personil yang berwenang yang dapat mengakses data pribadi</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Keamanan Server</h4>
                      <p className="text-gray-600 text-sm">Server yang aman dengan proteksi firewall dan antivirus</p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* User Rights */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center space-x-3 mb-4">
                <UserCheck className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Hak Anda Sebagai Pengguna</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Sebagai pengguna, Anda memiliki hak untuk:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Akses Data</h4>
                    <p className="text-gray-600 text-sm">Meminta salinan data pribadi yang kami simpan</p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Koreksi Data</h4>
                    <p className="text-gray-600 text-sm">Memperbaiki data yang tidak akurat atau tidak lengkap</p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Hapus Data</h4>
                    <p className="text-gray-600 text-sm">Meminta penghapusan data pribadi Anda</p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Batasi Penggunaan</h4>
                    <p className="text-gray-600 text-sm">Membatasi cara kami menggunakan data Anda</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Third Party Sharing */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Berbagi dengan Pihak Ketiga</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, 
                  kecuali dalam kondisi berikut:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Untuk memenuhi persyaratan hukum atau perintah pengadilan</li>
                  <li>Untuk melindungi hak, properti, atau keselamatan CV ALJUAR atau pelanggan kami</li>
                  <li>Dengan mitra bisnis tepercaya yang membantu kami menyediakan layanan</li>
                  <li>Dalam kasus transfer bisnis (seperti merger atau akuisisi)</li>
                </ul>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gradient-to-br from-blue-600 to-orange-500 rounded-xl p-8 text-white">
              <h2 className="text-2xl font-semibold mb-6">Hubungi Kami</h2>
              <p className="text-blue-100 mb-6">
                Jika Anda memiliki pertanyaan tentang kebijakan privasi ini atau ingin menggunakan hak Anda, 
                silakan hubungi kami melalui:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-blue-100">privacy@cv-aljuar.com</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Telepon</h4>
                  <p className="text-blue-100">082382466266</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg md:col-span-2">
                  <h4 className="font-semibold mb-2">Alamat</h4>
                  <p className="text-blue-100">
                    JLN. SUNAN KALIJAGA, Desa/Kelurahan Tuan-Tuan, Kec. Benua Kayong, 
                    Kab. Ketapang, Provinsi Kalimantan Barat, 78822
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">CV ALJUAR</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Mitra terpercaya untuk semua kebutuhan konstruksi Anda.
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">Beranda</Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
            <div className="border-t border-gray-800 mt-6 pt-6 text-gray-400 text-sm">
              <p>&copy; 2024 CV ALJUAR. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}