import { ReactNode } from "react";
import StyledComponentsRegistry from "@/lib/styled-components-registry";
import ClientLayout from "@/lib/client-layout";
import localFont from 'next/font/local';

const elsieSwash = localFont({
  src: "./fonts/ElsieSwashCaps-900.ttf",
  variable: "--font-elsieswashcaps-black",
  weight: "900"
})

const montserratVF = localFont({
  src: "./fonts/MontserratVF.ttf",
  variable: "--font-montserrat",
  weight: "100 900"
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
      className={`${elsieSwash.variable} ${montserratVF.variable}`}
      >
        <StyledComponentsRegistry>
          <ClientLayout>{children}</ClientLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
