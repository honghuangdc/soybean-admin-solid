import type { PluginOption } from 'vite';
import html from './html';
import solid from './solid';
import unocss from './unocss';

/**
 * vite插件
 * @param viteEnv - 环境变量配置
 */
export function setupVitePlugins(viteEnv: ImportMetaEnv): (PluginOption | PluginOption[])[] {
  const plugins = [html(viteEnv), solid, unocss];

  return plugins;
}
