import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mis datos",
  description: "App creada para mostrar los datos de una persona.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
