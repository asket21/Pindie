import "./globals.css";

import {Footer} from "./components/Footer/Footer";

import { Header } from "./components/Header/Header";


export const metadata = {
  title: "Pindie",
  description: "Сайт с Играми",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body >
       <Header/>
        {children}
        <Footer/>
    </body>
    </html>
  );
}
