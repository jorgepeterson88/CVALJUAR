'use client';

import { useState } from 'react';
import { Menu, X, ArrowLeft, FileText, CheckCircle, AlertCircle, Gavel, Users, DollarSign, Shield } from 'lucide-react';
import Link from 'next/link';

export default function TermsAndConditions() {
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
                <Gavel className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">CV ALJUAR</h1>
                <p className="text-xs text-gray-600">Konstruksi Profesional</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</Link>
              <Link href="/privacy" className="text-gray-700 hover:text-blue-600 transition-colors">Privacy Policy</Link>
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
              <Link href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Privacy Policy</Link>
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
              <Gavel className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Syarat dan Ketentuan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">CV ALJUAR</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Syarat dan ketentuan ini mengatur penggunaan layanan yang disediakan oleh CV ALJUAR.
            </p>
            <p className="text-sm text-gray-500 mt-2">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Penerimaan Syarat</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  Dengan mengakses atau menggunakan layanan CV ALJUAR, Anda setuju untuk terikat oleh syarat dan ketentuan ini. 
                  Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, Anda tidak boleh menggunakan layanan kami.
                </p>
              </div>
            </section>

            {/* Services Description */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Layanan Kami</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">
                  CV ALJUAR menyediakan layanan konstruksi profesional meliputi:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Konstruksi Bangunan</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Bangunan komersial</li>
                      <li>• Bangunan residensial</li>
                      <li>• Renovasi bangunan</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Infrastruktur</h4>
                    <ul className="text-sm text-orange-800 space-y-1">
                      <li>• Jalan dan jembatan</li>
                      <li>• Drainase</li>
                      <li>• Lahan parkir</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Client Responsibilities */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Kewajiban Klien</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Sebagai klien, Anda setuju untuk:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Informasi Akurat</h4>
                      <p className="text-gray-600 text-sm">Memberikan informasi yang akurat dan lengkap mengenai proyek</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Pembayaran Tepat Waktu</h4>
                      <p className="text-gray-600 text-sm">Melakukan pembayaran sesuai dengan jadwal yang disepakati</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Akses Lokasi</h4>
                      <p className="text-gray-600 text-sm">Memberikan akses yang memadai ke lokasi proyek</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Perizinan</h4>
                      <p className="text-gray-600 text-sm">Memastikan semua perizinan yang diperlukan telah disiapkan</p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Payment Terms */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center space-x-3 mb-4">
                <DollarSign className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Syarat Pembayaran</h2>
              </div>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Uang Muka</h4>
                    <p className="text-gray-600 text-sm">Minimal 30% dari total nilai kontrak</p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Pembayaran Progress</h4>
                    <p className="text-gray-600 text-sm">Sesuai dengan milestone yang disepakati</p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Pelunasan</h4>
                    <p className="text-gray-600 text-sm">Sebelum serah terima proyek</p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Retensi</h4>
                    <p className="text-gray-600 text-sm">5% selama 3 bulan masa pemeliharaan</p>
                  </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600" />
                    <h4 className="font-semibold text-yellow-900">Catatan Penting</h4>
                  </div>
                  <p className="text-yellow-800 text-sm">
                    Keterlambatan pembayaran akan dikenakan bunga 2% per bulan dari jumlah yang terhutang.
                  </p>
                </div>
              </div>
            </section>

            {/* Warranty and Guarantee */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Garansi dan Jaminan</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">
                  CV ALJUAR memberikan jaminan sebagai berikut:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Struktural</h4>
                      <p className="text-gray-600 text-sm">Garansi 10 tahun untuk kekuatan struktural bangunan</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Material</h4>
                      <p className="text-gray-600 text-sm">Garansi sesuai dengan standar pabrik material</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Pemeliharaan</h4>
                      <p className="text-gray-600 text-sm">Masa pemeliharaan gratis 3 bulan setelah serah terima</p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center space-x-3 mb-4">
                <AlertCircle className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Batasan Tanggung Jawab</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">
                  CV ALJUAR tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Kerusakan yang disebabkan oleh bencana alam (gempa, banjir, tanah longsor)</li>
                  <li>Kerusakan akibat perubahan desain yang dilakukan tanpa persetujuan kami</li>
                  <li>Keterlambatan proyek yang disebabkan oleh faktor di luar kendali kami</li>
                  <li>Kerusakan yang disebabkan oleh penggunaan yang tidak sesuai dengan fungsinya</li>
                  <li>Kehilangan atau kerusakan properti pihak ketiga di lokasi proyek</li>
                </ul>
              </div>
            </section>

            {/* Termination */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Pengakhiran Kontrak</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Kontrak dapat diakhiri dalam kondisi berikut:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-2">Oleh Klien</h4>
                    <ul className="text-sm text-red-800 space-y-1">
                      <li>• Pelanggaran kontrak oleh CV ALJUAR</li>
                      <li>• Keterlambatan lebih dari 30 hari</li>
                      <li>• Dengan pemberitahuan 14 hari</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-2">Oleh CV ALJUAR</h4>
                    <ul className="text-sm text-red-800 space-y-1">
                      <li>• Keterlambatan pembayaran</li>
                      <li>• Gangguan di lokasi proyek</li>
                      <li>• Dengan pemberitahuan 14 hari</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Dispute Resolution */}
            <section className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Gavel className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Penyelesaian Sengketa</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Semua sengketa yang timbul dari kontrak ini akan diselesaikan melalui:
                </p>
                <ol className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Musyawarah</h4>
                      <p className="text-gray-600 text-sm">Upaya penyelesaian secara damiah antara kedua belah pihak</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Mediasi</h4>
                      <p className="text-gray-600 text-sm">Jika musyawarah gagal, dilakukan mediasi dengan mediator netral</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Pengadilan</h4>
                      <p className="text-gray-600 text-sm">Sebagai upaya terakhir, diselesaikan di Pengadilan Negeri Ketapang</p>
                    </div>
                  </li>
                </ol>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gradient-to-br from-blue-600 to-orange-500 rounded-xl p-8 text-white">
              <h2 className="text-2xl font-semibold mb-6">Informasi Kontak</h2>
              <p className="text-blue-100 mb-6">
                Untuk pertanyaan lebih lanjut mengenai syarat dan ketentuan ini, silakan hubungi kami:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-blue-100">legal@cv-aljuar.com</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Telepon</h4>
                  <p className="text-blue-100">082382466266</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg md:col-span-2">
                  <h4 className="font-semibold mb-2">Alamat Kantor</h4>
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
                <Gavel className="w-6 h-6 text-white" />
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