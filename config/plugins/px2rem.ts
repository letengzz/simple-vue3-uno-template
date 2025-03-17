// px2rem
import { px2rem } from 'vite-plugin-px2rem'

export function px2remPlugin() {
  return px2rem({
    width: 750, // 设计稿宽度 核心
    rootFontSize: 16, // 根字体大小
  })
}
