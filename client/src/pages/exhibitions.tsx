import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Exhibition } from "@shared/schema";

export default function Exhibitions() {
  const { data: exhibitions, isLoading } = useQuery<Exhibition[]>({
    queryKey: ["/api/exhibitions"]
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Current Exhibitions</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading
          ? Array(6).fill(0).map((_, i) => (
              <Card key={i}>
                <CardContent className="p-4">
                  <Skeleton className="h-64 w-full mb-4" />
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3" />
                </CardContent>
              </Card>
            ))
          : exhibitions?.map((exhibition) => (
              <Card key={exhibition.id}>
                <CardContent className="p-4">
                  <img
                    src={exhibition.imageUrl}
                    alt={exhibition.title}
                    className="h-64 w-full object-cover mb-4 rounded"
                  />
                  <h2 className="text-xl font-bold mb-2">{exhibition.title}</h2>
                  <p className="text-sm text-muted-foreground mb-2">
                    {new Date(exhibition.startDate).toLocaleDateString()} - {new Date(exhibition.endDate).toLocaleDateString()}
                  </p>
                  <p className="text-sm">{exhibition.description}</p>
                </CardContent>
              </Card>
            ))}
      </div>
    </div>
  );
}
