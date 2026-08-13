import { createRequire } from 'node:module'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const require = createRequire(import.meta.url)
const esbuild = require('esbuild')
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

await esbuild.build({
  absWorkingDir: root,
  entryPoints: [path.join(root, 'src/mp-entry.ts')],
  bundle: true,
  format: 'cjs',
  platform: 'neutral',
  target: ['es2018'],
  outfile: path.join(root, 'utils/core.js'),
  alias: { '@': path.join(root, 'src') },
  logLevel: 'info',
})

console.log('built utils/core.js')
