/* eslint-disable @typescript-eslint/no-unused-expressions */
// 插件配置 总入口
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// import { px2remPlugin } from './px2rem'
import { svgLoaderPlugin } from './svgLoader'
import { UnoCSSPlugin } from './UnoCSS'
import { visualizerPlugin } from './visualizer'
import { viteCompressionPlugin } from './viteCompression'
import { ViteImageOptimizerPlugin } from './ViteImageOptimizer'
import { ViteRestartPlugin } from './ViteRestart'
import { VueDevToolsPlugin } from './VueDevTools'

export function usePlugins(isBuild: boolean, viteEnv: ViteEnv) {
  const { VITE_OPEN_GIZP, VITE_OPEN_VISUALIZER } = viteEnv

  const plugins = [vue(), vueJsx()]

  // 开发环境&生产环境加载的插件
  // plugins.push(px2remPlugin())
  plugins.push(svgLoaderPlugin())
  plugins.push(UnoCSSPlugin())

  // 开发需要
  if (!isBuild) {
    plugins.push(VueDevToolsPlugin())
    plugins.push(ViteRestartPlugin())
  }

  // 生产环境需要
  if (isBuild) {
    // 图片压缩
    plugins.push(ViteImageOptimizerPlugin())

    VITE_OPEN_GIZP && plugins.push(viteCompressionPlugin())
    VITE_OPEN_VISUALIZER && plugins.push(visualizerPlugin())
  }

  return plugins
}
