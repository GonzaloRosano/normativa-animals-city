export interface Faction {
  slug: string;
  code: string;
  title: string;
  kicker: string;
  colorVar: string;
  blurb: string;
  count: string;
  countLabel: string;
  badge?: string;
}

export const factions: Faction[] = [
  {
    slug: 'general',
    code: 'GN',
    title: 'General',
    kicker: 'Expediente 01 — General',
    colorVar: '--b-general',
    blurb: 'Convivencia, WARNs, conceptos IC/OOC, atracos y zonas seguras.',
    count: '13',
    countLabel: 'artículos',
  },
  {
    slug: 'ems',
    code: 'EMS',
    title: 'Sanidad',
    kicker: 'Expediente 02 — Sanidad',
    colorVar: '--b-ems',
    blurb: 'Servicio médico, rangos, embarazo IC y protocolo de presunto CK.',
    count: '13',
    countLabel: 'artículos',
    badge: '/img/badge-ems.webp',
  },
  {
    slug: 'policia',
    code: 'PD',
    title: 'Policía',
    kicker: 'Expediente 03 — Orden público',
    colorVar: '--b-policia',
    blurb: 'Jerarquía, códigos radiales, Miranda y código penal.',
    count: '9',
    countLabel: 'artículos',
    badge: '/img/badge-policia.webp',
  },
  {
    slug: 'ilegales',
    code: 'IL',
    title: 'Ilegales',
    kicker: 'Expediente 04 — Actividad criminal',
    colorVar: '--b-ilegales',
    blurb: 'Robos, bandas, negociación de atracos y conflicto territorial.',
    count: '12',
    countLabel: 'artículos',
    badge: '/img/badge-ilegales.webp',
  },
  {
    slug: 'locales',
    code: 'LC',
    title: 'Locales',
    kicker: 'Expediente 05 — Comercio',
    colorVar: '--b-locales',
    blurb: 'Propiedad de negocios, empleados, eventos y convenios.',
    count: '4',
    countLabel: 'páginas',
    badge: '/img/badge-locales.webp',
  },
  {
    slug: 'talleres',
    code: 'TL',
    title: 'Talleres',
    kicker: 'Expediente 06 — Mecánica',
    colorVar: '--b-talleres',
    blurb: 'Tuneo, tarifas, personal y límites de capital.',
    count: '3',
    countLabel: 'reglas',
    badge: '/img/badge-talleres.webp',
  },
  {
    slug: 'crews',
    code: 'CR',
    title: 'Crews',
    kicker: 'Expediente 07 — Competición',
    colorVar: '--b-crews',
    blurb: 'Carreras, fair play, clasificación de vehículos y sanciones.',
    count: '7',
    countLabel: 'artículos',
  },
  {
    slug: 'abogados',
    code: 'AB',
    title: 'Juzgado',
    kicker: 'Expediente 08 — Régimen judicial',
    colorVar: '--b-abogados',
    blurb: 'Constitución judicial: derechos, procedimiento y apelaciones.',
    count: '21',
    countLabel: 'artículos',
    badge: '/img/badge-abogados.webp',
  },
];

export function getFaction(slug: string): Faction {
  const f = factions.find((f) => f.slug === slug);
  if (!f) throw new Error(`Unknown faction slug: ${slug}`);
  return f;
}
