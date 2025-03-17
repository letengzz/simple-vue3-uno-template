// 自动重启
import ViteRestart from 'vite-plugin-restart'

export function ViteRestartPlugin() {
  return ViteRestart({
    restart: ['*.config.[jt]s', '**/config/*.[jt]s', '*.config.cjs', './.eslintrc.cjs'],
  })
}
