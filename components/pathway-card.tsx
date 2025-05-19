import type { ReactNode } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"

interface PathwayCardProps {
  icon: ReactNode
  title: string
  description: string
  ctaText: string
  href: string
  backgroundImage?: string
  articleNumber: string
  totalArticles?: string
  icons?: Array<{ active: boolean; icon: ReactNode }>
  testingStrategy?: string
}

export default function PathwayCard({
  title,
  href,
  ctaText,
  articleNumber,
  totalArticles = "42",
  icons = [],
}: PathwayCardProps) {
  const formattedNumber = articleNumber.padStart(2, "0")

  return (
    <Card className="relative h-full overflow-hidden border-2 border-black/80 bg-white text-black transition-all duration-300 hover:shadow-xl hover:-translate-y-1 p-0">
      <div className="flex flex-col h-full">
        {/* Top section wrapper for padding - THIS DIV HAS THE MAIN TOP BORDER */}
        <div className="w-full border-b-2 border-black/80 p-4">
          {/* This div no longer uses items-start. It's for vertical stacking. */}
          <div className="flex flex-col space-y-4">
            {/* Icons grid: use self-alignment to float left if w-auto */}
            <div className="grid grid-cols-5 gap-1 w-auto mr-auto"> {/* Added mr-auto to align left */}
              {icons && icons.length > 0 ? (
                icons.slice(0, 5).map((iconItem, index) => (
                  <div
                    key={index}
                    className={`w-8 h-8 border border-black flex items-center justify-center p-1 ${iconItem.active ? "opacity-100" : "opacity-20"}`}
                  >
                    {iconItem.icon}
                  </div>
                ))
              ) : (
                null
              )}
            </div>

            {/* Border between icons and numbers - this should now be full width */}
            <div className="w-full border-b-2 border-black/80 my-2"></div>

            {/* Wrapper for number graphics to allow centering */}
            <div className="w-full flex justify-center">
              {/* Centered number graphics - simplified to a single text block */}
              <div className="flex items-center justify-center">
                <span className="text-8xl font-bold font-zrnic" aria-hidden="true">
                  {formattedNumber}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Title - now flex container to align title text to bottom */}
        <div className="p-4 border-b-2 border-black/80 flex-grow flex flex-col justify-end">
          <h3 className="text-lg font-bold font-mono">{title}</h3>
        </div>

        {/* CTA Button */}
        <div className="p-4">
          <Link
            href={href}
            className="block w-full bg-black text-white px-4 py-2 font-mono text-center hover:bg-gray-800 transition-colors"
          >
            {ctaText} →
          </Link>
        </div>

        {/* Bottom section with testing strategy and article number */}
        <div className="p-4 flex justify-end items-center">
          {formattedNumber}/{totalArticles}
        </div>
      </div>
    </Card>
  )
}
