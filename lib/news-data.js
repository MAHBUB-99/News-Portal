import data from "@/data/data.json";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "data.json");

const getAllNews = () => {
  return data;
};

const getNewsById = (id) => {
  return data.find((news) => news.article_id === id);
};

const deleteNewsById = (id) => {
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const newsArray = JSON.parse(jsonData);
  const index = newsArray.findIndex((news) => news.article_id === id);
  if (index === -1) return false;
  newsArray.splice(index, 1);
  fs.writeFileSync(filePath, JSON.stringify(newsArray, null, 2), "utf-8");
  return true;
};

function updateNewsById(id, updates) {
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const newsArray = JSON.parse(jsonData);

  const index = newsArray.findIndex((news) => news.article_id === id);
  if (index === -1) return null;

  if (updates.title !== undefined) {
    newsArray[index].title = updates.title;
  }
  if (updates.description !== undefined) {
    newsArray[index].description = updates.description;
  }

  fs.writeFileSync(filePath, JSON.stringify(newsArray, null, 2), "utf-8");
  return newsArray[index];
}

export { deleteNewsById, getAllNews, getNewsById, updateNewsById };
