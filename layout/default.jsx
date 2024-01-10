import { Montserrat } from "next/font/google";
import Footer from "./footer";
import { Head } from "./head";
import Header from "./header";

const main = Montserrat({
    weight: ['400', '500', '600', '700'],
    variable: '--font-montserrat',
    subsets: ['cyrillic', 'latin'],
})

export default function DefaultLayout({ children }) {
    return (
        <div className="flex flex-col w-full mx-auto bg-[#F1EBF5]">
            <Head />
            <Header />
            <main className={`${main.variable} font-main flex flex-col w-full`}>
                {children}
            </main>
            <Footer />
        </div>
    )
}