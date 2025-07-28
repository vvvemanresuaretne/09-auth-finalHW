import { fetchNoteByIdServer } from "@/lib/api/serverApi"; // Функція для отримання нотатки за id
import type { Metadata } from "next";
import type { Note } from "@/types/note";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  // Викликаємо серверний API для отримання ОДНІЄЇ нотатки (не fetchNotesServer)
  const note: Note | null = await fetchNoteByIdServer(params.id);

  const title = note ? `${note.title} — NoteHub` : "Нотатка — NoteHub";
  const description =
    note?.content?.slice(0, 100) || "Деталі нотатки у NoteHub.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://your-site-url.com/notes/${params.id}`,
      images: [
        {
          url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        },
      ],
    },
  };
}
