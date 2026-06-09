const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

/** Normalize the current app route, stripping GitHub Pages basePath when present. */
export function normalizeRoute(pathname?: string | null): string {
  if (typeof window !== 'undefined') {
    let path = window.location.pathname

    if (basePath && path.startsWith(basePath)) {
      path = path.slice(basePath.length) || '/'
    }

    return normalizePath(path)
  }

  if (pathname) {
    let path = pathname
    if (basePath && path.startsWith(basePath)) {
      path = path.slice(basePath.length) || '/'
    }
    return normalizePath(path)
  }

  return '/'
}

function normalizePath(path: string): string {
  if (!path || path === '/') return '/'
  const trimmed = path.endsWith('/') ? path.slice(0, -1) : path
  return trimmed.startsWith('/') ? trimmed : `/${trimmed}`
}

export function isHomeRoute(route: string): boolean {
  return route === '/'
}
