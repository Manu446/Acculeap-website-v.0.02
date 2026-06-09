'use client'

import Link from 'next/link'
import { ComponentProps } from 'react'
import { assetPath } from './assetPath'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

function toStaticHref(href: string): string {
  const [path, ...hashParts] = href.split('#')
  const hash = hashParts.length ? `#${hashParts.join('#')}` : ''
  const url = path === '/' ? `${basePath}/` : assetPath(path)
  return `${url}${hash}`
}

type StaticLinkProps = ComponentProps<typeof Link>

/** Use full-page navigation on GitHub Pages; Next.js client routing breaks for the home route. */
export function StaticLink({ href, children, ...props }: StaticLinkProps) {
  if (basePath && typeof href === 'string' && !href.startsWith('http')) {
    return (
      <a href={toStaticHref(href)} {...(props as ComponentProps<'a'>)}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  )
}
