import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AdminBTP Belgium – Assistência Administrativa BTP",
  description:
    "Simplifique a administração da sua PME de construção na Bélgica: ONSS, LIMOSA, CheckIn@Work, faturação, seguros e licenças.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className="bg-white text-slate-800 antialiased">{children}</body>
    </html>
  );
}
