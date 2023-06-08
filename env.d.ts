/*
 * @Author: xiangshangzhi
 * @Date: 2023-06-01 15:25:58
 * @FilePath: \vuedemo\env.d.ts
 * @Description: 参考 https://juejin.cn/post/7054163548221472799
 */


/// <reference types="vite/client" />

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_ENV: string; // 环境
  readonly VITE_OUTPUT_DIR: string; // 打包目录
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}

