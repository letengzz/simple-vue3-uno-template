/// <reference types="vite/client" />
declare module '*.vue' {
  import type { ComponentOptions } from 'vue'

  const componentOptions: ComponentOptions
  export default componentOptions
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // 更多环境变量...
  readonly VITE_CHECK: boolean
  readonly VITE_BASE_URL: string
  readonly VITE_IS_PORXY: boolean
  readonly VITE_OPEN_GIZP: boolean
  readonly VITE_OPEN_VISUALIZER: boolean
  readonly VITE_PORT: number
  readonly VITE_OPEN_MOCK: boolean
  readonly VITE_MOCK_ALL: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface ViteEnv extends ImportMetaEnv {}
