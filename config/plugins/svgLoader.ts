// svg
import svgLoader from 'vite-svg-loader'

export function svgLoaderPlugin() {
  return svgLoader({
    defaultImport: 'url', // or 'raw'
    svgo: true,
  })
}
