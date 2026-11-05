import React from 'react';
import Image from 'next/image';

export default function Home() {
  const projects = [
    {
      title: "KAI Access Redesign: Nusantara Pass",
      category: "UI/UX Design & Product Strategy",
      description: "Proposal redesain aplikasi KAI Access untuk wisatawan mancanegara dalam kompetisi KAI Ideation Challenge 2025. Mengusung konsep 'KAI Nusantara Pass' yang mengatasi hambatan bahasa, pembayaran (GlobalPay), dan rigiditas tiket (FlexiPass) melalui antarmuka berbahasa asing dan integrasi ekosistem perjalanan cerdas.",
      tags: ["UI/UX Design", "Figma", "Behance", "Product Strategy"],
      link: "https://www.behance.net/gallery/258076381/KAI-Nusantara-Pass-UIUX-Case-Study" 
    },
    {
      title: "Capsee",
      category: "Mobile & Machine Learning",
      description: "Aplikasi mobile pemindai kesehatan tanaman untuk diagnosis penyakit daun dan buah cabai dengan penilaian tingkat keparahan dan integrasi API cuaca BMKG.",
      tags: ["Flutter", "Dart", "Machine Learning", "BMKG API", "Ongoing PBL"],
      link: "https://github.com/mochamadx5"
    },
    {
      title: "Sistem Grading Mahasiswa",
      category: "Web Development",
      description: "Platform akademik berbasis web dengan arsitektur MVC yang mengimplementasikan fitur penguncian nilai berbasis triwulan (quarter-based locking) untuk dosen.",
      tags: ["Laravel", "PHP", "MVC"],
      link: "https://github.com/mochamadx5/sistem-grading-college"
    },
    {
      title: "EVENTLY",
      category: "Web Development & QA",
      description: "Platform manajemen dan pemesanan tiket acara berbasis web yang melalui serangkaian pengujian Quality Assurance dan integrasi database relasional.",
      tags: ["Web Development", "Database Design", "QA Testing"],
      link: "https://github.com/mochamadx5/evently-showcase"
    },
  ];

  const skills = [
    "UI/UX Design", "Figma", "Flutter & Dart", "Next.js", 
    "Laravel / PHP", "Python","Tailwind CSS"
  ];

  return (
    <main className="relative min-h-screen bg-slate-50 text-slate-800 selection:bg-emerald-200 selection:text-emerald-900 px-6 py-16 md:px-12 md:py-24 overflow-hidden scroll-smooth">
      
      {/* CSS Khusus untuk Animasi Grid Latar Belakang */}
      {/* CSS Khusus Animasi Grid Halus */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes moveGrid {
          0% { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }
        .animated-grid {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px);
          animation: moveGrid 6s linear infinite;
          will-change: background-position;
        }
      `}} />

      {/* Elemen Latar Belakang Grid */}
      <div className="absolute inset-0 z-0 animated-grid pointer-events-none"></div>

      {/* Konten Utama diletakkan di atas Grid (z-10) */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-20">

        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Kolom Teks (Kiri) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="inline-block px-3 py-1 text-[14px] font-mono font-medium tracking-wide text-emerald-700 bg-emerald-100 border border-emerald-300 rounded-full shadow-sm">
              ● Tersedia untuk Bekerja ^_^
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
              Mochamad Reza Firdaus
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
              Mahasiswa D4 Teknik Informatika Politeknik Negeri Malang yang berfokus pada <span className="text-slate-900 font-medium">UI/UX Design</span>, <span className="text-slate-900 font-medium">Software Development</span>, dan <span className="text-slate-900 font-medium">Frontend Development</span>.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://github.com/mochamadx5"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 rounded-lg transition-colors shadow-sm"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mochamad-reza-firdaus-30951a27b/"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 rounded-lg transition-colors shadow-sm"
              >
                LinkedIn
              </a>
              <a
                href="https://www.behance.net/mochamarezafi"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 rounded-lg transition-colors shadow-sm"
              >
                Behance
              </a>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 rounded-lg transition-colors shadow-sm"
              >
                Curriculum Vitae
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mochamadrezafirdaus4@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-sm font-medium bg-white text-slate-700 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 rounded-lg transition-colors shadow-sm"
              >
                Hubungi Saya
              </a>
            </div>

            {/* Tautan Lihat Proyek */}
            <div className="pt-2">
              <a
                href="#projects"
                className="text-sm md:text-base font-mono font-medium text-slate-900 underline underline-offset-4 hover:text-emerald-600 transition-colors"
              >
                Lihat Proyek ↓
              </a>
            </div>
          </div>

          {/* Kolom Foto (Kanan) */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-54 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-white">
              <Image 
                src="/profile.jpg" 
                alt="Foto Profil Mochamad Reza Firdaus" 
                fill 
                className="object-cover object-center transition-all duration-500"
                priority
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-slate-500">Tech Stack & Tools</h2>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="px-3.5 py-2 text-xs md:text-sm font-medium bg-white text-slate-800 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 rounded-lg transition-all duration-200 shadow-sm cursor-default select-none"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-500">Karya & Proyek Terpilih</h2>
            <span className="text-xs text-slate-500 font-mono">{projects.length} Proyek</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((item, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-xl border border-slate-200 bg-white hover:shadow-lg hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="text-xs font-mono text-slate-500">{item.category}</div>
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className={`text-[11px] px-2 py-0.5 rounded font-medium transition-colors ${
                          tag === "Ongoing PBL" 
                          ? "bg-amber-100 text-amber-700 border border-amber-300 animate-pulse" 
                          : "bg-slate-100 text-slate-600 border border-slate-200"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-emerald-600 transition-colors"
                  >
                    {item.title.includes('KAI') ? 'Lihat di Behance →' : 'Lihat di GitHub →'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 border-t border-slate-200 text-slate-500 text-xs font-mono flex flex-col md:flex-row justify-between gap-4">
          <div>© 2026 Mochamad Reza Firdaus. All rights reserved.</div>
          <div>Dibangun dengan Next.js & Tailwind CSS</div>
        </footer>

      </div>
    </main>
  );
}