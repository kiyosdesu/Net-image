import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";

interface Images {
  urls: {
    small: string;
  };
  description: string;
  title: string;
  likes: number;
  user: {
    name: string;
  };
}

interface FetchedImages {
  results: Images[];
  total_pages: number;
}

const useImage = (imgQuery: string | undefined) =>
  useInfiniteQuery<FetchedImages, Error>({
    queryKey: [imgQuery, "images"],
    queryFn: ({ pageParam = 1 }) => {
      if (!imgQuery) {
        return apiClient
          .get<Images[]>("/photos", {
            params: {
              per_page: 20,
              page: pageParam,
            },
          })
          .then((res) => ({
            results: res.data,
            total_pages: res.headers["pages"],
          }));
      }

      return apiClient
        .get<FetchedImages>("/search/photos", {
          params: { query: imgQuery, per_page: 20, page: pageParam },
        })
        .then((res) => res.data);
    },
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length < lastPage.total_pages
        ? allPages.length + 1
        : undefined;
    },
    keepPreviousData: true,
  });

export default useImage;
