import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, Calendar, Users } from "lucide-react";
import type { Exhibition, Event, Artist } from "@shared/schema";

export default function Home() {
  const { data: exhibitions, isLoading: loadingExhibitions } = useQuery<Exhibition[]>({
    queryKey: ["/api/exhibitions"]
  });

  const { data: events, isLoading: loadingEvents } = useQuery<Event[]>({
    queryKey: ["/api/events"]
  });

  const { data: artists, isLoading: loadingArtists } = useQuery<Artist[]>({
    queryKey: ["/api/artists"]
  });

  return (
    <div className="flex flex-col gap-16 py-8">
      {/* Hero Section */}
      <section className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Celebrating Immigrant Artists Through Art & Culture
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Experience diverse perspectives and stories through exhibitions, events, and digital storytelling
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link href="/exhibitions">View Exhibitions</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/visit">Plan Your Visit</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Exhibitions */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Featured Exhibitions</h2>
          <Button variant="ghost" asChild>
            <Link href="/exhibitions">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loadingExhibitions ? (
            Array(3).fill(0).map((_, i) => (
              <Card key={i}>
                <CardContent className="p-4">
                  <Skeleton className="h-48 w-full mb-4" />
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </CardContent>
              </Card>
            ))
          ) : (
            exhibitions?.slice(0, 3).map((exhibition) => (
              <Card key={exhibition.id}>
                <CardContent className="p-4">
                  <img 
                    src={exhibition.imageUrl} 
                    alt={exhibition.title}
                    className="h-48 w-full object-cover mb-4 rounded"
                  />
                  <h3 className="text-xl font-bold mb-2">{exhibition.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {exhibition.description}
                  </p>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {loadingEvents ? (
            Array(2).fill(0).map((_, i) => (
              <Card key={i}>
                <CardContent className="p-4">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <div className="flex gap-4">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            events?.slice(0, 2).map((event) => (
              <Card key={event.id}>
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {event.description}
                  </p>
                  <div className="flex gap-4 text-sm">
                    <span className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      {new Date(event.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Users className="mr-2 h-4 w-4" />
                      {event.registrations}/{event.capacity} registered
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </section>

      {/* Artist Spotlight */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">Artist Spotlight</h2>
        {loadingArtists ? (
          <Card>
            <CardContent className="p-6">
              <Skeleton className="h-32 w-32 rounded-full mb-4" />
              <Skeleton className="h-6 w-48 mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4" />
            </CardContent>
          </Card>
        ) : artists?.[0] && (
          <Card>
            <CardContent className="p-6 flex flex-col md:flex-row gap-8 items-center">
              <img
                src={artists[0].imageUrl}
                alt={artists[0].name}
                className="h-32 w-32 rounded-full object-cover"
              />
              <div>
                <h3 className="text-2xl font-bold mb-2">{artists[0].name}</h3>
                <p className="text-muted-foreground mb-2">From {artists[0].origin}</p>
                <p className="max-w-2xl">{artists[0].bio}</p>
              </div>
            </CardContent>
          </Card>
        )}
      </section>
    </div>
  );
}
