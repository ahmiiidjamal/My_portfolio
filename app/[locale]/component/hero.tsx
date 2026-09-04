"use client";
import { useI18n } from '@/app/locales/client';
import Link from 'next/link';
export default function Hero() {
    const t = useI18n();
    return (
        <section id="about" className="px-5 md:px-20 max-w-[1200px] mx-auto w-full min-h-[716px] flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 flex flex-col gap-6 items-start">
                {/* <span className="font-mono text-[14px] text-[#0058c3] bg-[#0058c3]/10 px-3 py-1 rounded-full border border-[#0058c3]/20">
          System Status: Online
        </span> */}

                <h1 className="text-[40px] md:text-[64px] font-bold leading-[1.1] tracking-[-0.04em] text-[#1b1c1c]">
                    {t('hero.intero')}<span className="text-[#0058c3]"> Next.js</span>
                </h1>

                <p className="text-[18px] leading-[1.6] text-[#414754] max-w-2xl">
                    {t('hero.text')}
                </p>

                <div className="flex gap-2 mt-4">
                    <a href="#projects" className="bg-[#0058c3] hover:bg-[#0070f3] text-[#ffffff] px-6 py-3 rounded-md transition-all duration-300 text-center">
                        {t('hero.btnVeiw')}
                    </a>
                    <a href="#contact" className="bg-transparent border border-[#727786] text-[#1b1c1c] hover:border-[#0058c3] hover:text-[#0058c3] px-6 py-3 rounded-md transition-all duration-300 text-center">
                        {t('hero.btnContact')}
                    </a>
                    <Link
                        href="/cv"
                        className="inline-flex items-center gap-2 bg-transparent border border-[#727786] text-[#1b1c1c] hover:border-[#0058c3] hover:text-[#0058c3] px-6 py-3 rounded-md transition-all duration-300 text-center"
                    >
                        <span>{t('hero.btnCv')}</span>
                    </Link>
                </div>
            </div>

            <div className="flex-1 w-full max-w-md relative aspect-square group">
                <div className="absolute inset-0 bg-[#0058c3]/5 rounded-2xl transform translate-x-4 translate-y-4 border border-[#c1c6d7]/30"></div>
                <img
                    alt="Developer Portrait"
                    className="relative w-full h-full object-cover rounded-2xl border border-[#c1c6d7]/50 shadow-sm grayscale hover:grayscale-0 transition-all duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvAk4qYHxjSFSEBB7XDmU-7fweodHZussSCsJPfQS_38NSb5h4xCfL2mfqPIu6MXWLmZRfOWuFHWG_IQXCoTiWT3f2ptH32A3iGFbhXqNuul4dAJkaV_zZ4Qv3XYTM6QjEZT4L4N8UbWciDx8KL9dHoK_SG-6AhC8M-BYDZCJSBWwT6CVoxpxNfEmRad0sKYc3ZesvRmRCwNVGKhy096ANQsGu8El5jH2cY6Ao8GCjJxNMIllLhJIy"></img>
            </div>
        </section>

    )
}