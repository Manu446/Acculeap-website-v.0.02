import { writeFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const outDir = join(process.cwd(), 'out')
const noJekyll = join(outDir, '.nojekyll')

if (existsSync(outDir)) {
  writeFileSync(noJekyll, '')
  console.log('Created .nojekyll for GitHub Pages')
}
