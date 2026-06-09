export type Artiste = {
  id: number;
  slug: string;
  name: string;
  src: string;
  role: string;
  about: string;
  headline: string;
};

export const ARTISTES: Artiste[] = [
  {
    id: 1,
    slug: "alee-azar",
    name: "Alee Azar",
    src: "/images/Leke.jpeg",
    role: "Recording Artiste",
    headline: "A rising voice in modern Afro-pop, blending soulful melodies with bold storytelling.",
    about:
      "Alee Azar is a rising Afro-pop recording artiste whose sound blends soulful melodies with bold storytelling. Her music is built around warm vocals, memorable hooks, and a confident stage presence. Alee is quickly carving out a signature style that connects with listeners across the continent.",
  },
  {
    id: 2,
    slug: "shamz",
    name: "Shamz",
    src: "/images/Shamz.jpeg",
    role: "Recording Artiste",
    headline: "Spotlight energy with hard-hitting rhythms and magnetic performance flair.",
    about:
      "Shamz delivers high-energy performances, hard-hitting rhythms, and memorable hooks. She is a recording artiste known for commanding the stage and creating music that feels both modern and deeply rooted in contemporary Afrobeats culture.",
  },
  {
    id: 3,
    slug: "teddie-bankz",
    name: "Teddie Bankz",
    src: "/images/Teddy.jpeg",
    role: "Recording Artiste",
    headline: "A storyteller and rhythm architect from Abeokuta, blending street-smarts with melody.",
    about:
      'O.Temidayo Teddison, also known as Teddie Bankz, born in Abeokuta, Ogun State, is a Nigerian recording artiste, songwriter, singer & performer. He released his first single "Day & Night" in February 2022 featuring Ivy, which had a really positive feedback and went viral in his university and neighboring universities. His verse "Canadian loud is sweeter than Igbo" went on trending for months. "I\'m always trying to connect the dots of sounds & rhythm to make that different kind of music that would always sound new even after a million plays" - Teddie Bankz',
  },
];

export function getArtisteBySlug(slug: string) {
  return ARTISTES.find((artiste) => artiste.slug === slug);
}
