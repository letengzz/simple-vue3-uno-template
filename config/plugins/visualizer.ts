// 代码分析
import { visualizer } from 'rollup-plugin-visualizer'

export function visualizerPlugin() {
  return visualizer({
    open: true, // 注意这里要设置为true，否则无效
    gzipSize: true,
    brotliSize: true,
  })
}
