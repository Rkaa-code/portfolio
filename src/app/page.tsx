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
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

export default function Home() {
  const about = useReveal();
  const stack = useReveal();
  const skill = useReveal();
  const project = useReveal();
  const contact = useReveal();

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-zinc-800 text-gray-100 px-6 py-20">
      <section className="max-w-5xl mx-auto space-y-28">

        {/* ===== ABOUT ===== */}
        <section
          ref={about.ref}
          className={`transition-all duration-700 ${
            about.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl font-bold mb-4">Halo, saya Raka 👋</h1>
          <p className="text-gray-400 leading-relaxed max-w-3xl">
            Saya pelajar yang tertarik pada dunia Backend Development.
Fokus saya saat ini adalah membangun sistem backend yang terstruktur, efisien, dan mudah dikembangkan, termasuk pengelolaan database, autentikasi, dan API.
          </p>
        </section>

        {/* ===== TECH STACK ===== */}
<section
  ref={stack.ref}
  className={`transition-all duration-700 ${
    stack.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
>
  <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
    <Card className="bg-zinc-900 border-zinc-700 text-center">
  <CardContent className="flex flex-col items-center gap-3">
    <Code2 className="h-8 w-8 text-orange-400" />
    <p className="font-medium">HTML</p>
  </CardContent>
</Card>

<Card className="bg-zinc-900 border-zinc-700 text-center">
  <CardContent className="flex flex-col items-center gap-3">
    <Braces className="h-8 w-8 text-blue-400" />
    <p className="font-medium">CSS</p>
  </CardContent>
</Card>

<Card className="bg-zinc-900 border-zinc-700 text-center">
  <CardContent className="flex flex-col items-center gap-3">
    <FileCode2 className="h-8 w-8 text-yellow-400" />
    <p className="font-medium">JavaScript</p>
  </CardContent>
</Card>

<Card className="bg-zinc-900 border-zinc-700 text-center">
  <CardContent className="flex flex-col items-center gap-3">
    <Image
  src="/icons/laravelIcon.png"
  alt="Laravel"
  width={32}
  height={32}
  className="opacity-100"
/>
    <p className="font-medium">Laravel</p>
  </CardContent>
</Card>

<Card className="bg-zinc-900 border-zinc-700 text-center">
  <CardContent className="flex flex-col items-center gap-3">
    <Layers className="h-8 w-8 text-gray-300" />
    <p className="font-medium">Next.js</p>
  </CardContent>
</Card>

<Card className="bg-zinc-900 border-zinc-700 text-center">
  <CardContent className="flex flex-col items-center gap-3">
    <Database className="h-8 w-8 text-emerald-400" />
    <p className="font-medium">MySQL</p>
  </CardContent>
</Card>

  </div>
</section>


        {/* ===== KEAHLIAN ===== */}
        <section
          ref={skill.ref}
          className={`transition-all duration-700 ${
            skill.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl font-semibold mb-6">Keahlian</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-zinc-900 border-zinc-700">
              <CardContent>
                <h3 className="font-semibold mb-2">Frontend Development</h3>
                <p className="text-gray-400">
                  Membuat tampilan website yang responsif, modern, dan user-friendly.
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
                  Website Komik pribadi menggunakan Next.js & Tailwind CSS. Dikerjakan bersama Febrian (Exn4z)
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
          <h2 className="text-2xl font-semibold mb-6">Kontak</h2>
          <div className="flex gap-4">
            <Link href="https://github.com/HDFranco" target="_blank">
              <Button size="icon" variant="outline" className="h-14 w-14">
                <Github />
              </Button>
            </Link>

            <Link href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfrLZgpnlscmsSZzmxlwhjJPnChDWJsbHdRSRBCSbvCmxRPRGsGFQQsCQSNgVCXthcQwkL" target="_blank">
              <Button size="icon" variant="outline" className="h-14 w-14">
                <Mail />
              </Button>
            </Link>
          </div>
        </section>

        <footer className="text-gray-500 text-sm">
          © 2026 Raka Aditya Putra
        </footer>
      </section>
    </main>
  );
}
