"use client";
//icons
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import BrushIcon from '@mui/icons-material/Brush';
import StorageIcon from '@mui/icons-material/Storage';
import ApiIcon from '@mui/icons-material/Api';
import SpeedIcon from '@mui/icons-material/Speed';
import DnsIcon from '@mui/icons-material/Dns';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

import { useI18n } from '@/app/locales/client';
export default function Skills() {
    const t = useI18n();
    return(
        <>
        <section id="skills" className="px-5 md:px-20 max-w-[1200px] mx-auto w-full">
            <div className="flex flex-col gap-2 mb-12">
                <h2 className="text-[32px] font-bold text-[#1b1c1c]">{t('skills.mainWord')}</h2>
                <div className="h-1 w-16 bg-[#0058c3]"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div
                    className="border border-[#c1c6d7]/50 p-6 flex flex-col items-center justify-center gap-4 rounded-md hover:border-[#0058c3] hover:shadow-sm transition-all duration-300 bg-[#ffffff]">
                    <span className="material-symbols-outlined text-4xl text-[#5e5e5e]"><CodeIcon fontSize="large"/></span>
                    <span className="font-mono text-[14px] font-bold text-[#1b1c1c]">React</span>
                </div>

                <div
                    className="border border-[#c1c6d7]/50 p-6 flex flex-col items-center justify-center gap-4 rounded-md hover:border-[#0058c3] hover:shadow-sm transition-all duration-300 bg-[#ffffff]">
                    <span className="material-symbols-outlined text-4xl text-[#5e5e5e]"><TerminalIcon fontSize="large"/></span>
                    <span className="font-mono text-[14px] font-bold text-[#1b1c1c]">Next.js</span>
                </div>

                <div
                    className="border border-[#c1c6d7]/50 p-6 flex flex-col items-center justify-center gap-4 rounded-md hover:border-[#0058c3] hover:shadow-sm transition-all duration-300 bg-[#ffffff]">
                    <span className="material-symbols-outlined text-4xl text-[#5e5e5e]"><BrushIcon fontSize="large"/></span>
                    <span className="font-mono text-[14px] font-bold text-[#1b1c1c]">Tailwind CSS</span>
                </div>

                <div
                    className="border border-[#c1c6d7]/50 p-6 flex flex-col items-center justify-center gap-4 rounded-md hover:border-[#0058c3] hover:shadow-sm transition-all duration-300 bg-[#ffffff]">
                    <span className="material-symbols-outlined text-4xl text-[#5e5e5e]"><StorageIcon fontSize="large"/></span>
                    <span className="font-mono text-[14px] font-bold text-[#1b1c1c]">TypeScript</span>
                </div>

                <div
                    className="border border-[#c1c6d7]/50 p-6 flex flex-col items-center justify-center gap-4 rounded-md hover:border-[#0058c3] hover:shadow-sm transition-all duration-300 bg-[#ffffff]">
                    <span className="material-symbols-outlined text-4xl text-[#5e5e5e]"><ApiIcon fontSize='large'/></span>
                    <span className="font-mono text-[14px] font-bold text-[#1b1c1c]">GraphQL</span>
                </div>

                <div
                    className="border border-[#c1c6d7]/50 p-6 flex flex-col items-center justify-center gap-4 rounded-md hover:border-[#0058c3] hover:shadow-sm transition-all duration-300 bg-[#ffffff]">
                    <span className="material-symbols-outlined text-4xl text-[#5e5e5e]"><SpeedIcon fontSize='large'/></span>
                    <span className="font-mono text-[14px] font-bold text-[#1b1c1c]">Performance</span>
                </div>

                <div
                    className="border border-[#c1c6d7]/50 p-6 flex flex-col items-center justify-center gap-4 rounded-md hover:border-[#0058c3] hover:shadow-sm transition-all duration-300 bg-[#ffffff]">
                    <span className="material-symbols-outlined text-4xl text-[#5e5e5e]"><DnsIcon fontSize='large'/></span>
                    <span className="font-mono text-[14px] font-bold text-[#1b1c1c]">Node.js</span>
                </div>

                <div
                    className="border border-[#c1c6d7]/50 p-6 flex flex-col items-center justify-center gap-4 rounded-md hover:border-[#0058c3] hover:shadow-sm transition-all duration-300 bg-[#ffffff]">
                    <span className="material-symbols-outlined text-4xl text-[#5e5e5e]"><CloudQueueIcon fontSize='large'/></span>
                    <span className="font-mono text-[14px] font-bold text-[#1b1c1c]">Vercel/AWS</span>
                </div>
            </div>
        </section>

        </>
    )
}