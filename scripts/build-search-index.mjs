// Generates public/search-index.json from the clause markup in src/pages/*.astro,
// and (idempotently) stamps each <article class="clause"> with a stable id="a{n}"
// so search results can deep-link straight to the matching article.
//
// Runs as the "prebuild" npm script, so the index is always in sync with content.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pagesDir = join(__dirname, '..', 'src', 'pages');

const pages = [
  { file: 'general.astro', slug: 'general', title: 'General', code: 'GN', colorVar: '--b-general' },
  { file: 'ems.astro', slug: 'ems', title: 'Sanidad', code: 'EMS', colorVar: '--b-ems' },
  { file: 'policia.astro', slug: 'policia', title: 'Policía', code: 'PD', colorVar: '--b-policia' },
  { file: 'ilegales.astro', slug: 'ilegales', title: 'Ilegales', code: 'IL', colorVar: '--b-ilegales' },
  { file: 'locales.astro', slug: 'locales', title: 'Locales', code: 'LC', colorVar: '--b-locales' },
  { file: 'talleres.astro', slug: 'talleres', title: 'Talleres', code: 'TL', colorVar: '--b-talleres' },
  { file: 'crews.astro', slug: 'crews', title: 'Crews', code: 'CR', colorVar: '--b-crews' },
  { file: 'abogados.astro', slug: 'abogados', title: 'Juzgado', code: 'AB', colorVar: '--b-abogados' },
];

function stripTags(html) {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const index = [];

for (const page of pages) {
  const path = join(pagesDir, page.file);
  let content = readFileSync(path, 'utf8');

  let n = 0;
  let changed = false;

  // Match each clause article, whether or not it already has an id.
  content = content.replace(
    /<article class="clause"(?: id="a\d+")?>([\s\S]*?)<\/article>/g,
    (full, inner) => {
      n += 1;
      const id = `a${n}`;

      const numMatch = inner.match(/<span class="clause-num">([^<]*)<\/span>/);
      const titleMatch = inner.match(/<h2>([^<]*)<\/h2>/);
      const clauseNum = numMatch ? numMatch[1].trim() : '';
      const title = titleMatch ? titleMatch[1].trim() : '';
      const text = stripTags(inner);

      index.push({
        slug: page.slug,
        pageTitle: page.title,
        code: page.code,
        colorVar: page.colorVar,
        id,
        clauseNum,
        title,
        text,
      });

      if (!full.startsWith(`<article class="clause" id="${id}">`)) changed = true;
      return `<article class="clause" id="${id}">${inner}</article>`;
    }
  );

  if (changed) {
    writeFileSync(path, content, 'utf8');
    console.log(`stamped ids in ${page.file}`);
  }
}

const outPath = join(__dirname, '..', 'public', 'search-index.json');
writeFileSync(outPath, JSON.stringify(index), 'utf8');
console.log(`wrote ${index.length} entries to public/search-index.json`);
