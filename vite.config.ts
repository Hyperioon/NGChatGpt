import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    VueDevTools(),
    cssInjectedByJsPlugin(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      vueTemplate: true,
      resolvers: [ElementPlusResolver()],
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      }
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  build: {
    outDir: 'docs'
    // lib: {
    //   entry: 'src/main.ts',
    //   name: 'new-grand-chatgpt',
    //   fileName: 'new-grand-chatgpt.js',
    //   formats: ['umd']
    // },
    // sourcemap: false, // 输出.map文件
    // rollupOptions: {
    //   // 确保外部化处理那些你不想打包进库的依赖
    //   external: ['vue'],
    //   output: {
    //     // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
    //     globals: {
    //       vue: 'Vue',
    //       newGrandChatgpt: 'new-grand-chatgpt' // 这里暴露出去一个全局变量
    //     }
    //   }
    // }
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
