import type { ReactNode } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"

interface PathwayCardProps {
  icon: ReactNode
  title: string
  description: string
  ctaText: string
  href: string
  backgroundImage: string
}

export default function PathwayCard({ icon, title, description, href, backgroundImage, ctaText }: PathwayCardProps) {
  return (
    <div className="h-full">
      <Card className="relative h-full overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 p-6 text-white h-full flex flex-col">
          <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm mb-4">
            {icon}
          </div>
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <p className="text-white/90 mb-16 font-medium">{description}</p>
          
          <div className="absolute bottom-4 left-6 right-6">
            <Link href={href} className="block w-full bg-white text-black px-4 py-2 rounded-md hover:bg-gray-100 transition-colors text-center">
              {ctaText} →
            </Link>
          </div>
        </div>
      </Card>
    </div>
  )
}