import type React from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import ReactMarkdown from 'react-markdown'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export interface IconProps {
  active: boolean
  icon: React.ReactNode
  className?: string
  toolTip?: string
}

export interface ArticleProps {
  articleNumber: string
  totalArticles: string
  title?: string
  icons: IconProps[]
  body: string
  className?: string
}

export function Icon({ active = true, icon, className, toolTip }: IconProps) {
  if (!toolTip) {
    return (
      <div
        className={cn(
          "w-8 h-8 border border-black flex items-center justify-center p-1",
          active ? "opacity-100" : "opacity-20",
          className
        )}
      >
        {icon}
      </div>
    )
  }
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={cn(
            "w-8 h-8 border border-black flex items-center justify-center p-1",
            active ? "opacity-100" : "opacity-20",
            className
          )}
        >
          {icon}
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{toolTip}</p>
      </TooltipContent>
    </Tooltip>
  )
}

export function Article({
  articleNumber,
  totalArticles,
  icons,
  body,
  className,
}: ArticleProps) {
  const formattedNumber = articleNumber.padStart(2, "0")

  return (
    <TooltipProvider>
      <Card
        className={cn(
          "relative h-full overflow-hidden border-2 border-black/80 bg-white text-black",
          className
        )}
      >
        <div className="flex flex-col h-full">
          {/* Top section: small icons, border, large number */}
          <div className="w-full border-b-2 border-black/80 p-4">
            <div className="flex flex-col space-y-4">
              {/* Small Icons grid */}
              <div className="grid grid-cols-5 gap-1 w-auto mr-auto">
                {icons.slice(0, 5).map((iconProps, index) => (
                  <Icon key={index} {...iconProps} />
                ))}
              </div>

              <div className="w-full border-b-2 border-black/80 my-2"></div>

              <div className="w-full flex justify-center">
                <div className="flex items-center justify-center">
                  <span
                    className="text-12xl md:text-mega"
                    aria-hidden="true"
                  >
                    {formattedNumber}
                  </span>
                </div>
              </div>
            </div>
            <div className="p-2 flex justify-beginning items-center">
              {formattedNumber}/{totalArticles}
            </div>
          </div>

          {/* Barcode section (replaces Title) */}
          <div className="p-4 flex-grow">
            <div
              className="w-2/3 h-6 bg-repeat-x"
              style={{
                backgroundImage: "url('/icons/barcode-line.svg')",
                backgroundSize: "auto 24px", // Use auto for width to respect SVG width, 24px for height
              }}
              aria-hidden="true"
            ></div>
          </div>
          

          {/* Body */}
          <div className="p-4 border-b-2 border-black/80 prose prose-lg max-w-none">
            <ReactMarkdown>{body}</ReactMarkdown>
          </div>

          {/* Bottom section */}
          <div className="p-4 flex justify-end items-center">
            {formattedNumber}/{totalArticles}
          </div>
        </div>
      </Card>
    </TooltipProvider>
  )
}
