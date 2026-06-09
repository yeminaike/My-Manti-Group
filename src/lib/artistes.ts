export type Artiste = {
  id: number;
  slug: string;
  name: string;
  src: string;
  role: string;
  about: string;
//   headline: string;
};

export const ARTISTES: Artiste[] = [
  {
    id: 1,
    slug: "alee-azar",
    name: "Alee Azar",
    src: "/images/Leke.jpeg",
    role: "Recording Artiste",
    // headline: "A rising voice in modern Afro-pop, blending soulful melodies with bold storytelling.",
    about:
      "Adeleke “Leke Play” Ogunnaike aka “Alee Azar” is the founder & owner of The Manti Group & Affiliates Limited. Leke, who has a great ear for sonics, started as a producer in his room in Yaba, making beats with friends. After his MBA from the University of Northampton, UK.  He then worked on developing a company built on appreciating not just artistes but all members of the creative community alike.",
  },
  {
    id: 2,
    slug: "shamz",
    name: "Shamz",
    src: "/images/Shamz.jpeg",
    role: "Recording Artiste",
    // headline: "Spotlight energy with hard-hitting rhythms and magnetic performance flair.",
    about:
      "Shamz got into music-making fully in his third year of University, combining his love for music with school work. This theme of love and affection can be found across his music catalog, mixed with stories and adventures that encourage one to enjoy every moment of life." ,
  },
  {
    id: 3,
    slug: "teddie-bankz",
    name: "Teddie Bankz",
    src: "/images/Teddy.jpeg",
    role: "Recording Artiste",
    // headline: "A storyteller and rhythm architect from Abeokuta, blending street-smarts with melody.",
    about:
      'O.Temidayo Teddison, also known as Teddie Bankz, born in Abeokuta, Ogun State, is a Nigerian recording artiste, songwriter, singer & performer. He released his first single "Day & Night" in February 2022 featuring Ivy, which had a really positive feedback and went viral in his university and neighboring universities. His verse "Canadian loud is sweeter than Igbo" went on trending for months. "I\'m always trying to connect the dots of sounds & rhythm to make that different kind of music that would always sound new even after a million plays" - Teddie Bankz',
  },
];

export function getArtisteBySlug(slug: string) {
  return ARTISTES.find((artiste) => artiste.slug === slug);
}
