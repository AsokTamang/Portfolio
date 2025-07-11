"use client";
import { mySocials } from "@/constants";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
  <section id="footer" className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <Link href={social.href} key={index}>
            <Image src={social.icon} className="w-5 h-5" alt={social.name} />
          </Link>
        ))}
      </div>
      <p>© 2025 Ali. All rights reserved.</p>
    </section>
  );
}
