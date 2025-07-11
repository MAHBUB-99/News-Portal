import { getDictionary } from "@/app/[lang]/dictionaries";
import NewsDetails from "@/components/NewsDetails";
import { getNewsById } from "@/lib/news-data";

export default async function NewsDetailsPage({ params: { id, lang } }) {
  const dictionary = await getDictionary(lang);
  const news = await getNewsById(id);
  return (
    <div>
      <NewsDetails news={news} id={id} dictionary={dictionary} />
    </div>
  );
}
