"use client";

import CircleLoader from "@/components/circle-loader";
import CommonLayout from "@/components/common-layout";
import ManageAccounts from "@/components/manage-accounts";
import UnauthPage from "@/components/unauth-page";
import { GlobalContext } from "@/context";
import { getTvorMoviesByGenre } from "@/utils";
import { useSession } from "next-auth/react";
import { useContext, useEffect } from "react";

export default function TV() {
  const { data: session } = useSession();
  const {
    loggedInAccount,
    mediaData,
    setMediaData,
    setPageLoader,
    pageLoader,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getAllMedia() {
      const actionAdventure = await getTvorMoviesByGenre("tv", 10759);
      const crime = await getTvorMoviesByGenre("tv", 80);
      const comedy = await getTvorMoviesByGenre("tv", 35);
      const family = await getTvorMoviesByGenre("tv", 10751);
      const mystery = await getTvorMoviesByGenre("tv", 9648);
      const reality = await getTvorMoviesByGenre("tv", 10764);
      const scifiAndFantasy = await getTvorMoviesByGenre("tv", 10765);
      const war = await getTvorMoviesByGenre("tv", 10768);
      const western = await getTvorMoviesByGenre("tv", 37);
      const drama = await getTvorMoviesByGenre("tv", 18);
      setMediaData(
        [
          {
            title: "Action and adventure",
            medias: actionAdventure,
          },
          {
            title: "Crime",
            medias: crime,
          },
          {
            title: "Comedy",
            medias: comedy,
          },
          {
            title: "Family",
            medias: family,
          },
          {
            title: "Mystery",
            medias: mystery,
          },
          {
            title: "Reality",
            medias: reality,
          },
          {
            title: "Sci-Fi and Fantasy",
            medias: scifiAndFantasy,
          },
          {
            title: "Western",
            medias: western,
          },
          {
            title: "War",
            medias: war,
          },
          {
            title: "Dramas",
            medias: drama,
          },
        ].map((item) => ({
          ...item,
          medias: item.medias.map((mediaItem) => ({
            ...mediaItem,
            type: "tv",
            addedToFavourites: false,
          })),
        }))
      );
      setPageLoader(false);
    }

    getAllMedia();
  }, [loggedInAccount]);

  if (session === null) return <UnauthPage />;
  if (loggedInAccount === null) return <ManageAccounts />;

  if (pageLoader) return <CircleLoader />;

  return (
    <main className="flex min-h-screen flex-col">
      <CommonLayout mediaData={mediaData} />
    </main>
  );
}
