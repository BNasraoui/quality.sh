import Link from "next/link";
import Image from "next/image"
import Logo from "@/components/logo"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-5">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Logo width={140} />
          </div>
          <p className="text-sm text-white/50">© 2025 Quality.sh All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="https://www.linkedin.com/in/ben-nasraoui/" className="text-white/70 hover:text-white transition-colors">
              <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://www.linkedin.com/in/ben-nasraoui/" className="text-white/70 hover:text-white transition-colors">
              <Image src="/icons/twitter.svg" alt="Twitter" width={24} height={24} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://github.com/BNasraoui" className="text-white/70 hover:text-white transition-colors">
              <Image src="/icons/github.svg" alt="GitHub" width={24} height={24} />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
