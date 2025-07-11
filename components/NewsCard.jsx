import timeAgo from "@/utils/timeAgo";
import Image from "next/image";
export default function NewsCard({ news }) {
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden news-card">
      <Image
        src={news?.image_url || "/articles/article-1.jpg"}
        alt="Technology news"
        className="w-full h-48 object-cover"
        width={600}
        height={600}
      />
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-3">
          {news.category.map((cat) => (
            <span
              key={cat}
              className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
            >
              {cat}
            </span>
          ))}
          <span className="text-xs text-gray-500">3 min read</span>
        </div>
        <h3 className="text-xl font-medium mb-3 leading-tight">
          {news?.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {news?.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-200 rounded-full overflow-hidden">
              <Image
                src={news?.avatar}
                alt="Sarah Chen"
                width={60}
                height={60}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs text-gray-500">{news?.author}</span>
          </div>
          <span className="text-xs text-gray-400">
            {timeAgo(news?.pubDate)}
          </span>
        </div>
      </div>
    </article>
  );
}
