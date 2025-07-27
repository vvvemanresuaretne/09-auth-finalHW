"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api/clientApi";
import type { Note } from "@/types/note";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal"; 

interface Props {
  noteId: string;
  onClose?: () => void; // 🔧 опційна функція закриття
}

export default function NotePreview({ noteId, onClose }: Props) {
  const router = useRouter();

  const {
    data: note,
    isLoading,
    isError,
  } = useQuery<Note>({
    queryKey: ["note", noteId],
    queryFn: () => fetchNoteById(noteId),
    refetchOnMount: false,
  });

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      router.back(); // fallback закриття
    }
  };

  return (
    <Modal onClose={handleClose}>
      {isLoading && <p>Завантаження нотатки...</p>}
      {isError || !note ? (
        <p>Нотатку не знайдено.</p>
      ) : (
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{note.title}</h2>
          <p className="mb-2">{note.content}</p>
          <p className="text-sm text-gray-500">
            <strong>Тег:</strong> {note.tag}
          </p>
        </div>
      )}

      <button
        onClick={handleClose}
        className="mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
      >
        Закрити
      </button>
    </Modal>
  );
}
