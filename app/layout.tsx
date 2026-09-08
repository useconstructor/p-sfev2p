import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La Cucina di Marco | Cocina italiana en Ciudad de México",
  description: "Cocina italiana de raíz toscana, recetas familiares y una cuidada selección de vinos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
