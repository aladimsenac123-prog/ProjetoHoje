import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = join(root, 'dist');
const sourceFiles = ['index.html', 'manifest.json', 'robots.txt', 'sitemap.xml', 'sw.js', '.nojekyll', 'assets', 'css', 'js', 'pages'];

const minify = (content, extension) => {
  if (extension === '.html') return content.replace(/<!--(?!\[if)[\s\S]*?-->/g, '').replace(/\s{2,}/g, ' ').replace(/>\s+</g, '><').trim();
  if (extension === '.css') return content.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s{2,}/g, ' ').replace(/\s*([{}:;,])\s*/g, '$1').trim();
  if (extension === '.js') return content.replace(/\/\/.*$/gm, '').replace(/\s{2,}/g, ' ').trim();
  return content;
};

const isBinary = (extension) => ['.gif', '.ico', '.jpeg', '.jpg', '.png', '.webp'].includes(extension);

const copy = async (source, target) => {
  const entries = await readdir(source, { withFileTypes: true });
  await mkdir(target, { recursive: true });
  await Promise.all(entries.map(async (entry) => {
    const sourcePath = join(source, entry.name);
    const targetPath = join(target, entry.name);
    if (entry.isDirectory()) return copy(sourcePath, targetPath);
    const extension = extname(entry.name);
    const content = await readFile(sourcePath, isBinary(extension) ? undefined : 'utf8');
    await writeFile(targetPath, extension === '.html' || extension === '.css' || extension === '.js' ? minify(content, extension) : content);
  }));
};

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
for (const entry of sourceFiles) {
  const source = join(root, entry);
  const target = join(dist, entry);
  const info = await import('node:fs/promises').then(({ stat }) => stat(source));
  if (info.isDirectory()) await copy(source, target);
  else {
    const extension = extname(entry);
    const content = await readFile(source, isBinary(extension) ? undefined : 'utf8');
    await writeFile(target, extension === '.html' || extension === '.css' || extension === '.js' ? minify(content, extension) : content);
  }
}
console.log(`Build concluído em ${relative(root, dist)}`);
