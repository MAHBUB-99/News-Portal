import FeaturedStory from "@/components/FeaturedStory";
import Footer from "@/components/Footer";
import NewsGrid from "@/components/NewsGrid";
import { getDictionary } from "./dictionaries";
import newsData from "@/data/data.json";

export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <main class="max-w-7xl mx-auto px-4 py-8">
        <FeaturedStory news={newsData[22]} dictionary={dictionary} lang={lang} />
        <NewsGrid newsArray={newsData} dictionary={dictionary} lang={lang} />
      </main>
      <Footer dictionary={dictionary}/>
    </>
  );
}
