import NewsCard from "@/components/NewsCard";
import Link from "next/link";

export default function NewsGrid({ newsArray, dictionary, lang }) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-8">{dictionary.latestStories}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsArray.map((news) => (
          <Link key={news.article_id} href={`${lang}/news/${news.article_id}`}>
            <NewsCard news={news} />
          </Link>
        ))}
      </div>
    </section>
  );
}
