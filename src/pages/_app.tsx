import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { Commissioner } from 'next/font/google'

const commissioner = Commissioner({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
  variable: '--font-commissioner'
})
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={`${commissioner.variable} font-sans`}>
      <Component {...pageProps} />
    </div>)
};

export default MyApp;
