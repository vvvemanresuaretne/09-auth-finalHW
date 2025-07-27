// app/(private routes)/notes/[id]/page.tsx

import { fetchNoteByIdServer } from "@/lib/api/serverApi"; 
import type { Metadata } from "next";
import type { Note } from "@/types/note";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
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

export default async function NotePage({
  params,
}: {
  params: { id: string };
}) {
  const note: Note | null = await fetchNoteByIdServer(params.id);

  if (!note) {
    return <div>Нотатку не знайдено</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{note.title}</h1>
      <p>{note.content}</p>
    </div>
  );
}
