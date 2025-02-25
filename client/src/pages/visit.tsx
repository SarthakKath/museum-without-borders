import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Visit() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl font-bold mb-4">Plan Your Visit</h1>
        <p className="text-lg text-muted-foreground">
          Experience art and culture from around the world at Museum Without Borders. 
          We welcome visitors of all backgrounds to explore our diverse exhibitions and events.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Opening Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>10:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday</span>
                <span>10:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday - Sunday</span>
                <span>11:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Location & Contact
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>123 Art Avenue, Cultural District</p>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:+1234567890" className="hover:underline">
                (123) 456-7890
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:info@museumwithoutborders.org" className="hover:underline">
                info@museumwithoutborders.org
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-3xl mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Do I need to book tickets in advance?</AccordionTrigger>
            <AccordionContent>
              While walk-ins are welcome, we recommend booking tickets in advance for special exhibitions and events to ensure availability.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Are guided tours available?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer guided tours in multiple languages. Tours can be booked through our events page or at the information desk.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is the museum accessible?</AccordionTrigger>
            <AccordionContent>
              Yes, our facility is fully accessible with ramps, elevators, and accessible restrooms. We also provide wheelchairs free of charge.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Can I take photographs?</AccordionTrigger>
            <AccordionContent>
              Photography for personal use is permitted in most exhibition areas, without flash. Some special exhibitions may have restrictions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Is there parking available?</AccordionTrigger>
            <AccordionContent>
              Yes, we have a parking facility adjacent to the museum. Members receive discounted parking rates.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Getting Here</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Interactive map would be displayed here</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="font-bold mb-2">By Public Transport</h3>
              <ul className="space-y-2 text-sm">
                <li>Bus: Lines 12, 15, 28 (Cultural District stop)</li>
                <li>Metro: Blue Line (Art Center station)</li>
                <li>Tram: T1, T3 (Museum Quarter stop)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">By Car</h3>
              <ul className="space-y-2 text-sm">
                <li>From Downtown: 10 minutes via Arts Avenue</li>
                <li>From Airport: 25 minutes via Highway 101</li>
                <li>Parking available on-site ($5/hour)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
