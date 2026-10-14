// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// リポジトリ名が "website" のため、公開 URL は https://moriguchiyusei.github.io/website/ になる。
// リポジトリ名を "moriguchiyusei.github.io" に変える場合は base を削除する。
export default defineConfig({
  site: 'https://moriguchiyusei.github.io',
  base: '/website',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
