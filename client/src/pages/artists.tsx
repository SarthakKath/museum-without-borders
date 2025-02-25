import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { MapPin } from "lucide-react";
import type { Artist } from "@shared/schema";

export default function Artists() {
  const { data: artists, isLoading } = useQuery<Artist[]>({
    queryKey: ["/api/artists"]
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl font-bold mb-4">Featured Artists</h1>
        <p className="text-lg text-muted-foreground">
          Discover the talented immigrant artists who bring diverse perspectives and cultural richness to our community through their exceptional work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {isLoading
          ? Array(4).fill(0).map((_, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <Skeleton className="h-40 w-40 rounded-full" />
                    <div className="flex-1">
                      <Skeleton className="h-8 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-1/2 mb-4" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-2/3" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          : artists?.map((artist) => (
              <Card key={artist.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <img
                      src={artist.imageUrl}
                      alt={artist.name}
                      className="h-40 w-40 rounded-full object-cover"
                    />
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{artist.name}</h2>
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <MapPin className="h-4 w-4" />
                        <span>From {artist.origin}</span>
                      </div>
                      <p className="mb-4">{artist.bio}</p>
                      <div className="flex flex-wrap gap-2">
                        {artist.artworks.map((artwork, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                          >
                            {artwork}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
      </div>
    </div>
  );
}
