import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import PreviewClient from "./NotePreview.client";
import { fetchNoteByIdServer } from "@/lib/api/serverApi"; // ✅ серверний запит з куками

type PageProps = {
  params: { id: string };
};

const NoteDetailsModal = async ({ params }: PageProps) => {
  const { id } = params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteByIdServer(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PreviewClient noteId={id} />
    </HydrationBoundary>
  );
};

export default NoteDetailsModal;
