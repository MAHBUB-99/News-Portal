import Modal from "@/components/Modal";
import { getNewsById } from "@/lib/news-data";
import { getDictionary } from "../../dictionaries";
import NewsDetails from "@/components/NewsDetails";

export default async function InterceptingNewsPage({ params: { id, lang } }) {
  const news = getNewsById(id);
  const dictionary = await getDictionary(lang);

  let renderedContent = null;
  if (!news) {
    renderedContent = (
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
  } else {
    renderedContent = (
      <NewsDetails news={news} id={id} isModal={true} dictionary={dictionary} />
    );
  }

  return <Modal>{renderedContent}</Modal>;
}
