import { defineConfig, loadEnv } from 'vite';
import { setupVitePlugins, getRootPath, getSrcPath } from './build';

export default defineConfig(configEnv => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd()) as ImportMetaEnv;

  const rootPath = getRootPath();
  const srcPath = getSrcPath();

  return {
    base: viteEnv.VITE_BASE_URL,
    resolve: {
      alias: {
        '~': rootPath,
        '@': srcPath
      }
    },
    plugins: setupVitePlugins(viteEnv),
    server: {
      host: '0.0.0.0',
      open: true
    },
    build: {
      target: 'esnext'
    }
  };
});
