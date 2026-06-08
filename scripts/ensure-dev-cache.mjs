import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const nextDir = path.join(root, '.next')
const chunksDir = path.join(nextDir, 'static', 'chunks')

function shouldClean() {
  if (!fs.existsSync(nextDir)) {
    return { clean: false, reason: 'no .next directory' }
  }

  if (!fs.existsSync(chunksDir)) {
    return { clean: true, reason: 'incomplete .next (missing chunks)' }
  }

  const files = fs.readdirSync(chunksDir)
  const hasHashedMainApp = files.some((f) => /^main-app-[a-f0-9]+\.js$/.test(f))
  const hasUnhashedMainApp = files.includes('main-app.js')
  const hasDevMain = files.includes('main.js')
  const hasExportOut = fs.existsSync(path.join(root, 'out', 'index.html'))

  // Production build writes hashed chunk names; dev server expects unhashed names
  if (hasHashedMainApp && !hasUnhashedMainApp) {
    return { clean: true, reason: 'production-hashed chunks incompatible with dev server' }
  }

  // Mixed prod export cache + dev server artifacts causes chunk 404s
  if (hasHashedMainApp && hasDevMain) {
    return { clean: true, reason: 'mixed production and dev chunk artifacts' }
  }

  if (hasExportOut && !hasUnhashedMainApp) {
    return { clean: true, reason: 'static export build cache before dev server' }
  }

  return { clean: false, reason: 'dev cache looks valid' }
}

const decision = shouldClean()

if (decision.clean) {
  fs.rmSync(nextDir, { recursive: true, force: true })
  console.log(`[dev] Cleared stale .next cache (${decision.reason}).`)
}
