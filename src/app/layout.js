import { LanguageProvider } from "./components/LanguageContext";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <title>Samira MVOGO - Portfolio</title>    
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
