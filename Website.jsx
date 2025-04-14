import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function KirchbuehlWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-olive-500">
          Digitale Bildung. Einfach gemacht.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
          Die Kirchbühl Group bietet iPads für Schulen zum Bildungspreis – inklusive Einrichtung, Support und persönlicher Beratung.
        </p>
        <Button className="mt-8 text-black bg-olive-500 hover:bg-olive-600">
          Angebot anfordern
        </Button>
      </section>

      {/* Angebot Section */}
      <section className="bg-gray-900 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-olive-500 mb-6">Unser Angebot</h2>
          <Card className="bg-black border border-olive-500">
            <CardContent className="p-6">
              <p className="text-lg">
                <strong>Produkt:</strong> Apple iPad 11" Wi-Fi (A16 Chip)<br />
                <strong>Preis:</strong> 449,00 € (inkl. Einrichtung & Support)<br />
                <strong>Lieferzeit:</strong> ca. 3–5 Werktage<br />
                <strong>Extras:</strong> MDM-Einrichtung, Schutzhüllen, Displayschutz optional erhältlich
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Kontakt Section */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-olive-500 mb-6 text-center">Kontakt aufnehmen</h2>
          <form className="space-y-4">
            <Input placeholder="Ihr Name" className="bg-gray-800 text-white border border-olive-500" />
            <Input placeholder="Ihre E-Mail" className="bg-gray-800 text-white border border-olive-500" />
            <Input placeholder="Ihre Schule / Einrichtung" className="bg-gray-800 text-white border border-olive-500" />
            <Button className="w-full text-black bg-olive-500 hover:bg-olive-600">Absenden</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-center py-6 text-sm text-gray-400">
        Kirchbühl Group • Kirchbühlstr. 6, 79677 Schönau im Schwarzwald • kirchbuehlgroup@gmail.com
      </footer>
    </div>
  );
}