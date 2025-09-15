import Image from "next/image";
import Link from "next/link";

export default function NewsDetails({ news, id, isModal = false, dictionary }) {
  const headerClassName = isModal
    ? "mb-8 sticky top-0 bg-white z-10 pt-8"
    : "mb-8";

  return news ? (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <article className="lg:col-span-3">
          <header className={headerClassName}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6">
              {news.title}
            </h1>
          </header>

          <div className="mb-8">
            <Image
              src={news?.image_url}
              alt="Ferris wheel against sky"
              className="w-full h-auto rounded-lg shadow-sm"
              width={600}
              height={600}
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">{news?.description}</p>

            <p className="text-lg leading-relaxed mb-8">{news?.content}</p>
          </div>

          <div className="flex items-center space-x-6 mb-8">
            <button className="flex items-center space-x-2 text-sm hover:text-gray-600 transition-colors">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                />
              </svg>
              <span>{dictionary?.share}</span>
            </button>

            <button className="flex items-center space-x-2 text-sm hover:text-gray-600 transition-colors">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
              <span>{dictionary.bookmark}</span>
            </button>

            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>7 min read</span>
            </div>
          </div>
        </article>

        <aside className="lg:col-span-1">
          <div className="sticky top-8 space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">{news?.author}</h3>
              <p className="text-sm text-gray-600 mb-4">{news?.pubDate}</p>
            </div>

            <div>
              <p className="text-lg font-medium mb-2">
                {news?.comments} comments
              </p>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-black transition-colors"
              >
                Join the discussion
              </a>
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-1">Category</p>
              {news.category.map((cat) => (
                <p key={cat} className="font-medium">
                  {cat}
                </p>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  ) : (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 p-4 sm:p-6 md:p-8">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-red-700 mb-6 animate-fade-in-down">
        News Not Found
      </h1>
      <p className="text-xl sm:text-2xl text-gray-700 mb-10 text-center max-w-lg animate-fade-in">
        The news article with ID{" "}
        <span className="font-extrabold text-blue-700 bg-blue-100 px-2 py-1 rounded-md shadow-sm">
          "{id}"
        </span>{" "}
        could not be found.
      </p>

      <Link
        href="/"
        className="px-10 py-4 bg-gray-900 text-white font-semibold rounded-xl shadow-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300 animate-fade-in-up"
      >
        Go back to Home
      </Link>
    </div>
  );
}
