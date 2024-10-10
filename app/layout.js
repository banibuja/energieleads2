
import '../styles/global.css';
import localFont from "next/font/local";
import Home from './components/Home';
import ScrollingProviders from './components/ScrollingProviders';
// import { usePathname } from 'next/navigation';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "HeroLeads",
  description: "created by banozz",
};


export default function Layout({ children }) {
  // const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <main>
          {/* {pathname === '/' ? <Home /> : children} */}
          <Home />
          {/* <ScrollingProviders/> */}

        </main>
      </body>
    </html>
  );
}
