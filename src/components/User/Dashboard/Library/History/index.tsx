import { getHistory } from "@/api/history/getHistory";
import LoadingScreen from "@/components/LoadingScreen";
import { useUserStore } from "@/stores/user";
import { useQuery } from "@tanstack/react-query";
import HistoryCard, { HistoryCardProps } from "./HistoryCard";

export default function History() {
  const { getUser } = useUserStore();
  const userId = getUser().id;
  const { isFetching, status, data, error } = useQuery({
    queryKey: ["history", userId],
    queryFn: ({ queryKey }) => getHistory(queryKey[1]),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  if (isFetching) {
    return <LoadingScreen />;
  }

  if (status === "error") {
    return <p>{error.message}</p>;
  }

  return (
    <section className="flex flex-col gap-y-8">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
        History
      </h1>
      <div className="flex flex-col gap-y-6 lg:gap-y-7 w-full md:w-1/2 lg:w-2/3 mx-auto">
        {data?.history.map((item: HistoryCardProps, index: number) => {
          return <HistoryCard key={index} history={item} />;
        })}
      </div>
    </section>
  );
}
