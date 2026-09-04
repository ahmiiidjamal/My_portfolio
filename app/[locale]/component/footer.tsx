import Link from "next/link";
export default function Footer(){
    return(
           <footer className="w-full py-12 border-t border-[#c1c6d7]/30 bg-[#fbf9f8]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-5 md:px-20 max-w-[1200px] mx-auto">
            <span className="font-mono text-[14px] text-[#414754]">© 2024 Developer Portfolio. Built with Next.js.</span>

            <div className="flex gap-6">
                <Link href="https://github.com/ahmiiidjamal"
                    target='_blank'
                    className="text-[#5e5e5e] hover:text-[#0058c3] transition-colors font-mono text-[14px]">GitHub</Link>
                <Link href="https://www.linkedin.com/in/%D8%A3%D8%AD%D9%85%D8%AF-%D8%A8%D9%86-%D9%85%D8%AD%D9%85%D8%AF-%D8%AF%D8%A8%D8%A7%D8%AD-%D8%A7%D9%84%D8%AC%D9%85%D8%A7%D9%84-5b71653a9/"
                    target='_blank'
                    className="text-[#5e5e5e] hover:text-[#0058c3] transition-colors font-mono text-[14px]">LinkedIn</Link>
                <Link href="https://www.facebook.com/patric.patrico.18"
                    target='_blank'
                    className="text-[#5e5e5e] hover:text-[#0058c3] transition-colors font-mono text-[14px]">Facebook</Link>
            </div>
        </div>
    </footer>

    )
}