import data from "@/data/data.json";
import Image from "next/image";
import Link from "next/link";
import timeAgo from "@/utils/timeAgo"
export default function FeaturedStory({ news, dictionary, lang }) {
  return (
    <section className="mb-12">
      <article className="bg-white rounded-lg shadow-sm overflow-hidden news-card">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="order-2 lg:order-1 p-8">
            <div className="flex items-center space-x-4 mb-4">
              <span className="px-3 py-1 bg-black text-white text-xs rounded-full">
                {dictionary.featured}
              </span>
              <span className="text-sm text-gray-600">5 min read</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-normal leading-tight mb-4">
              {news?.title}
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {news?.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                  <Image
                    src={news?.avatar}
                    alt={news?.author}
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">{news?.author}</p>
                  <p className="text-xs text-gray-500">{timeAgo(news?.pubDate)}</p>
                </div>
              </div>
              <Link
                href={`${lang}/news/${news.article_id}`}
                className="text-sm hover:text-gray-600 transition-colors"
              >
                {dictionary.readMore}
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Image
              src={news?.image_url}
              alt={news?.title}
              className="w-full h-64 lg:h-full object-cover"
              width={200}
              height={200}
            />
          </div>
        </div>
      </article>
    </section>
  );
}
