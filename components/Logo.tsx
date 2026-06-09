import Image from 'next/image'
import { cn } from '@/lib/utils'
import { assetPath } from '@/lib/assetPath'
import { StaticLink } from '@/lib/staticLink'

const sizes = {
  sm: { width: 120, height: 36, className: 'h-8 w-auto' },
  md: { width: 160, height: 48, className: 'h-10 w-auto' },
  lg: { width: 220, height: 66, className: 'h-16 w-auto' },
} as const

type LogoSize = keyof typeof sizes

interface LogoProps {
  size?: LogoSize
  className?: string
  linked?: boolean
}

export function Logo({ size = 'md', className, linked = true }: LogoProps) {
  const { width, height, className: sizeClass } = sizes[size]

  const image = (
    <Image
      src={assetPath('/logo.png')}
      alt="Acculeap Analytics"
      width={width}
      height={height}
      priority={size !== 'sm'}
      className={cn(sizeClass, 'object-contain', className)}
    />
  )

  if (!linked) {
    return image
  }

  return (
    <StaticLink href="/" className="inline-flex items-center transition-opacity duration-300 hover:opacity-90">
      {image}
    </StaticLink>
  )
}
