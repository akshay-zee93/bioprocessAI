import { Dongle, Poppins } from "next/font/google";
import "./globals.css";

const dongle = Dongle({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-dongle",
});
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
export const metadata = {
  title: "BioProcessAI",
  description:
    "Bioprocess development, simplified. Our AI platform automates tasks and empowers informed decisions, accelerating your path from bench to market.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${dongle.variable}`}>
        {children}
      </body>
    </html>
  );
}
