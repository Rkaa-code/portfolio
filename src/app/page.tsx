"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  Braces,
  FileCode2,
  Atom,
  Database,
  Layers,
  Phone, 
} from "lucide-react";
import { use, useEffect, useRef, useState } from "react";
import Aurora from "@/components/Aurora";
// import Lanyard from '@/components/ui/Lanyard';

/* ---------- Intersection Observer Hook ---------- */
function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, show };
}
const techStack = [
  { name: "HTML", icon: <Code2 className="h-8 w-8 text-orange-400" /> },
  { name: "CSS", icon: <Braces className="h-8 w-8 text-blue-400" /> },
  { name: "JavaScript", icon: <FileCode2 className="h-8 w-8 text-yellow-400" /> },
  {
    name: "Laravel",
    icon: <Image src="/icons/laravelIcon.png" alt="Laravel" width={32} height={32} />,
  },
  {
    name: "Next.js",
    icon: <Image src="/icons/nextjs.webp" alt="Next.js" width={32} height={32} />,
  },
  { name: "MySQL", icon: <Database className="h-8 w-8 text-emerald-400" /> },
  {
    name: "Supabase",
    icon: <Image src="/icons/supabase.png" alt="Supabase" width={32} height={32} />,
  },
  {
    name: "Tailwind",
    icon: (
      <Image
        src="/icons/tailwind-css-icon.webp"
        alt="Tailwind"
        width={32}
        height={32}
      />
    ),
  },
];


export default function Home() {
  const about = useReveal();
  const stack = useReveal();
  const skill1 = useReveal();
  const skill2 = useReveal();
  const project = useReveal();
  const contact = useReveal();
  const judul = useReveal();
  return (
    <>
      <Aurora
        colorStops={["#5227FF", "#7cff67", "#5227FF"]}
        amplitude={1}
        blend={0.5}
        className="fixed inset-0 z-0 pointer-events-none"
      />
      <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-zinc-800 text-gray-100 px-6 py-20">

        <section className="max-w-5xl mx-auto space-y-28">

  {/* ===== ABOUT ===== */}
        <section
          ref={about.ref}
          className={`relative overflow-hidden transition-all duration-700 ${
            about.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } flex flex-col items-center text-center`}
        >

          {/* BACKGROUND ABOUT */}
          {/* <div className="relative inset-0 -z-10">
            <Background />
          </div> */}

          {/* PROFILE IMAGE */}
          <Image
            src="/orang_ganteng.png"
            alt="Foto Profil Raka"
            height={500}
            width={500}
            className="relative rounded-full overflow-hidden mb-6
              [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]
              [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
            priority
          />

          <h1 className="text-4xl font-bold mb-6">
            Halo, saya Raka Aditya Putra
          </h1>

            {/* ABOUT ME CARD */}


            <Card className="bg-zinc-900 border-zinc-700 max-w-3xl w-full text-left">
              <CardContent className="pt-6 space-y-4">
                <h2 className="text-xl font-semibold">About Me</h2>

                <p className="text-gray-400 leading-relaxed">
                  Nama saya Raka Aditya Putra, saya siswa SMK kelas 2 yang sedang fokus
                  mendalami Backend Web Development. Saya tertarik membangun sistem
                  backend yang menjadi dasar sebuah aplikasi agar berjalan stabil,
                  rapi, dan mudah dikembangkan.
                </p>

                <p className="text-gray-400 leading-relaxed">
                  Saat ini saya menggunakan Laravel untuk menangani logika backend
                  seperti routing, autentikasi, dan pembuatan API. Untuk pengelolaan
                  database, saya terbiasa menggunakan Supabase serta HeidiSQL dalam
                  mengatur struktur tabel, relasi data, dan proses CRUD. Saya juga
                  masih mempelajari PostgreSQL untuk memperdalam pemahaman database.
                </p>

                <p className="text-gray-400 leading-relaxed">
                  Saya terbiasa membaca dokumentasi, mencoba implementasi langsung,
                  serta melakukan debugging sampai masalah terselesaikan. Dari proses
                  tersebut, saya belajar pentingnya backend yang terstruktur dan mudah
                  dipelihara.
                </p>
              </CardContent>
            </Card>
          </section>



                {/* ===== TECH STACK ===== */}
        <section
          ref={stack.ref}
          className={`transition-all duration-700 ${
            stack.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>

          <div className="overflow-hidden ">
            <div className="flex w-max gap-6 animate-marquee">
              {[...techStack, ...techStack].map((item, i) => (
                <Card
                  key={i}
                  className="bg-zinc-900 border-zinc-700 text-center min-w-[140px]"
                >
                  <CardContent className="flex flex-col items-center gap-3 py-6">
                    {item.icon}
                    <p className="font-medium">{item.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>



                {/* ===== KEAHLIAN ===== */}
              <section
                ref={judul.ref}
                className={`transition-all duration-700 ${
                  judul.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <h2 className="text-2xl font-semibold mb-6">Keahlian</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-zinc-900 border-zinc-700">
                    <CardContent>
                      <h3 className="font-semibold mb-2">Frontend Development</h3>
                      <p className="text-gray-400">
                        Mampu membangun tampilan website yang responsif dan rapi sebagai pendukung integrasi dengan sistem backend.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-zinc-900 border-zinc-700">
                    <CardContent>
                      <h3 className="font-semibold mb-2">Backend Dasar</h3>
                      <p className="text-gray-400">
                        Backend Developer yang fokus pada pembuatan sistem yang efisien, aman, dan mudah dikembangkan.
                        Menguasai Laravel, Supabase, manajemen database dengan HeidiSQL, serta backend logic di Next.js.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

                {/* ===== PROJECT ===== */}
                <section
                  ref={project.ref}
                  className={`transition-all duration-700 ${
                    project.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  <h2 className="text-2xl font-semibold mb-6">Proyek</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-zinc-900 border-zinc-700 hover:border-zinc-500 transition">
                      <CardContent>
                        <h3 className="font-semibold mb-2">Website Komik</h3>
                        <p className="text-gray-400 mb-4">
                          Website Komik pribadi menggunakan Supabase, Next.js & Tailwind CSS. Dikerjakan bersama Febrian (Exn4z)
                        </p>
                        <Link href="https://flux-ink-verse.vercel.app/" target="_blank">
                        <Button variant="secondary">Lihat</Button>
                        </Link>
                      </CardContent>
                    </Card>

                  </div>
                </section>

                {/* ===== CONTACT ===== */}
        <section
          ref={contact.ref}
          className={`transition-all duration-700 ${
            contact.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-6">

            {/* CARD KONTAK */}
            <Card>
              <CardContent>
                <h2 className="text-2xl font-semibold mb-4">Kontak</h2>

                <div className="mb-4 text-sm text-gray-300">
                  <div className="flex gap-2 items-center mb-2">
                    <Mail className="h-4 w-4" />
                    <span>rakaadit932@gmail.com</span>
                  </div>
                  <div className="flex gap-2 items-center mb-2">
                    <Phone className="h-4 w-4" />
                    <span>+62 895-7062-40908</span>
                  </div>
                  <div className="flex gap-2 items-center mb-2">
                    <Github className="h-4 w-4" />
                    <span>github.com/rkaa-code</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link href="https://github.com/rkaa-code" target="_blank">
                    <Button size="icon" variant="outline" className="h-14 w-14">
                      <Github />
                    </Button>
                  </Link>

                  <Link href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWscznFBDKrhzBNNcjpWlQTtdnJFCFMhjtmmfGDrsJrGLhjdPjgMSQQPVqdCfZTkBFzLvzWmb" target="_blank">
                    <Button size="icon" variant="outline" className="h-14 w-14">
                      <Mail />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* CARD AVAILABILITY */}
            <Card>
              <CardContent>
                <h2 className="text-2xl font-semibold mb-4">Ketersediaan</h2>

                <p className="text-sm text-gray-400 leading-relaxed">
                  Terbuka untuk kesempatan magang, kerja praktik, atau kolaborasi
                  pengembangan sistem backend. Siap mengerjakan task nyata seperti
                  perbaikan bug, integrasi API, dan pengelolaan database.
                </p>
              </CardContent>
            </Card>

          </div>
        </section>

        <footer className="mt-6 text-center text-gray-500 text-sm">
          © 2026 Raka Aditya Putra
        </footer>

        </section>
      </main>
    </>
  );
}
