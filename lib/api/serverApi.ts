import { nextServer } from "./api";
import { cookies } from "next/headers";
import type { Note, NotesResponse } from "@/types/note";
import type { User } from "@/types/user";

// Асинхронно формируем заголовок Cookie из объекта cookies()
const getCookieHeader = async (): Promise<string> => {
  const cookieStore = await cookies();
  const cookieArray: string[] = [];
  for (const [key, value] of cookieStore.entries()) {
    cookieArray.push(`${key}=${value}`);
  }
  return cookieArray.join("; ");
};

export const fetchNotesServer = async (
  searchText: string,
  page = 1,
  perPage = 10,
  tag?: string
): Promise<NotesResponse> => {
  const cookie = await getCookieHeader();
  try {
    const res = await nextServer.get<NotesResponse>("/notes", {
      params: {
        ...(searchText && { search: searchText }),
        page,
        perPage,
        ...(tag && tag !== "All" ? { tag } : {}),
      },
      headers: {
        Cookie: cookie,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching notes:", error);
    throw error;
  }
};

export const fetchNoteByIdServer = async (id: string): Promise<Note> => {
  const cookie = await getCookieHeader();
  try {
    const res = await nextServer.get<Note>(`/notes/${id}`, {
      headers: {
        Cookie: cookie,
      },
    });
    return res.data;
  } catch (error) {
    console.error(`Error fetching note by id ${id}:`, error);
    throw error;
  }
};

export const getUserFromServer = async (): Promise<User> => {
  const cookie = await getCookieHeader();
  try {
    const res = await nextServer.get<User>("/users/me", {
      headers: {
        Cookie: cookie,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

export const checkServerSession = async () => {
  const cookie = await getCookieHeader();
  try {
    return await nextServer.get("/auth/session", {
      headers: {
        Cookie: cookie,
      },
    });
  } catch (error) {
    console.error("Error checking session:", error);
    throw error;
  }
};
