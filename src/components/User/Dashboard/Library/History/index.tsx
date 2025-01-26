import { getHistory } from "@/api/history/getHistory";
import { useUserStore } from "@/stores/user";
import { useQuery } from "@tanstack/react-query";
import HistoryCard, { HistoryCardProps } from "./HistoryCard";
import { Skeleton } from "@/components/ui/skeleton";

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

  if (status === "error") {
    return <p>{error.message}</p>;
  }

  return (
    <section className="flex flex-col gap-y-8">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
        History
      </h1>
      {isFetching ? (
        <SkeletonHistory />
      ) : (
        <div className="flex flex-col gap-y-6 lg:gap-y-7 w-full md:w-1/2 lg:w-2/3 mx-auto">
          {data?.history.map((item: HistoryCardProps, index: number) => (
            <HistoryCard key={index} history={item} />
          ))}
        </div>
      )}
    </section>
  );
}

function SkeletonHistory() {
  return (
    <div className="flex flex-col gap-y-6 lg:gap-y-7 w-full md:w-1/2 lg:w-2/3 mx-auto">
      <Skeleton className="h-[122px] rounded-2xl shadow-2xl w-full" />
      <Skeleton className="h-[122px] rounded-2xl shadow-2xl w-full" />
      <Skeleton className="h-[122px] rounded-2xl shadow-2xl w-full" />
    </div>
  );
}
