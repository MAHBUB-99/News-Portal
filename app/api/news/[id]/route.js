import {
  deleteNewsById,
  getNewsById,
  updateNewsById,
} from "@/lib/news-data.js";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const newsId = params?.id;
  const data = await getNewsById(newsId);
  return NextResponse.json(data);
}

export async function DELETE(request, { params }) {
  const newsId = params?.id;
  console.log(newsId);
  if (!newsId) {
    return NextResponse.json({ error: "Missing News ID" });
  }
  const success = await deleteNewsById(newsId);
  if (!success) {
    return NextResponse.json({ error: "News Not Found" }, { status: 404 });
  }
  return NextResponse.json({
    Message: "News deleted successfully.",
    id: newsId,
  });
}

export async function PATCH(request, { params }) {
  const newsId = params?.id;

  if (!newsId) {
    return NextResponse.json({ error: "Missing News ID" }, { status: 400 });
  }

  const updates = await request.json();

  const allowedFields = ["title", "description"];
  const invalidFields = Object.keys(updates).filter(
    (key) => !allowedFields.includes(key)
  );

  if (invalidFields.length > 0) {
    return NextResponse.json(
      { error: "Only 'title' and 'description' can be updated." },
      { status: 400 }
    );
  }

  const updatedNews = await updateNewsById(newsId, updates);

  if (!updatedNews) {
    return NextResponse.json({ error: "News not found" }, { status: 404 });
  }

  return NextResponse.json(updatedNews, { status: 200 });
}
