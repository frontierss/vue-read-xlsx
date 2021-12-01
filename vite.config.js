import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: { // 設置路徑別名
            '@': path.resolve(__dirname, './src'),
            '@plugins': path.resolve(__dirname, './src/plugins'),
            '@assets': path.resolve(__dirname, './src/assets')
        }
    },
    server: { // 在文件中添加以下内容做ip配置
        host: '0.0.0.0'
    }
})
