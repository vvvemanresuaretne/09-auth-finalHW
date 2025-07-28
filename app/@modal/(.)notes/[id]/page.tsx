import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import PreviewClient from "./NotePreview.client";
import { fetchNoteByIdServer } from "@/lib/api/serverApi";

interface Props {
  params: Promise<{ id: string }>;
}

const NoteDetailsModal = async ({ params }: Props) => {
  const { id } = await params; // await - важливо!

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
