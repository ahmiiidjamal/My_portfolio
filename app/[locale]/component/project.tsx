"use client";
import { useI18n } from '@/app/locales/client';
export default function Projects() {
    const t = useI18n();
    return (
        <section id="projects" className="px-5 md:px-20 max-w-[1200px] mx-auto w-full pt-14 pb-14">
            <div className="flex flex-col gap-2 mb-12">
                <h2 className="text-[32px] font-bold text-[#1b1c1c]">{t('project.mainWord')}</h2>
                <div className="h-1 w-16 bg-[#0058c3]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <article className="group flex flex-col gap-4">
                    <div className="aspect-[16/9] w-full overflow-hidden border border-[#c1c6d7]/30 rounded-lg relative">
                        <img alt="Project 1 preview"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPVaYr7LDdPM1TVKatsWHwp_HgzEQ-Y1WxjdQ1pgboXXDDdXTwbVSVXy9YnN9MZP5okBZbtn8JtURDW9GbhqmjqUVqhUPZco8Yu1CjCcRpbzBqUhh1gEMWLUU-QaqvpJ1c2wv0wThsy-EDE3X_tdHW5s8ILCZMz1lH54Uunatkm_NWIHkDQcgwPiZoKp4JNWNMLlbYUAA4temuH67JAow_7E55alQMr-RRRLf9TKKGQMrPk0S0WUEw"></img>
                        <div
                            className="absolute inset-0 bg-[#0058c3]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[28px] font-bold text-[#1b1c1c] group-hover:text-[#0058c3] transition-colors">
                            {t('project.projectTwo.mainWords')}
                        </h3>
                        <p className="text-[#414754] mt-2 text-[16px] leading-[1.6]">
                            {t('project.projectTwo.explain')}
                        </p>

                        <div className="flex gap-2 mt-4 flex-wrap">
                            <span
                                className="font-mono text-[12px] px-2 py-1 bg-[#f5f3f3] border border-[#c1c6d7]/20 rounded text-[#5e5e5e]">Next.js</span>
                            <span
                                className="font-mono text-[12px] px-2 py-1 bg-[#f5f3f3] border border-[#c1c6d7]/20 rounded text-[#5e5e5e]">Tailwind</span>
                            <span
                                className="font-mono text-[12px] px-2 py-1 bg-[#f5f3f3] border border-[#c1c6d7]/20 rounded text-[#5e5e5e]">tRPC</span>
                        </div>
                    </div>
                </article>

                <article className="group flex flex-col gap-4">
                    <div className="aspect-[16/9] w-full overflow-hidden border border-[#c1c6d7]/30 rounded-lg relative">
                        <img alt="Project 2 preview"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4maCz9Uu65v899NoE9OEnkJMgXEyGq51Erqr9NJnUHiQjNP_1fbpeasMQ2UUB_9LPDYMlXgzybTrGm4qZEGwxVDEdKLHM4eX0FzNjLe7o7KI7ZhQnkHiajEUggpOeaz_DsHB1GWkUlNXEpMEVKOv-H0XPkLWtdtYodZ1LbyhOwCWs9wNxUBKi2IkO65nEirvFvKVKxQrMwvMswVEZ7Bb7_gx1muQHwFfVIWez31vEB0tmntULy27Q"></img>
                        <div
                            className="absolute inset-0 bg-[#0058c3]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[28px] font-bold text-[#1b1c1c] group-hover:text-[#0058c3] transition-colors">
                            {t('project.projectOne.mainWords')}
                        </h3>
                        <p className="text-[#414754] mt-2 text-[16px] leading-[1.6]">
                            {t('project.projectOne.explain')}
                        </p>

                        <div className="flex gap-2 mt-4 flex-wrap">
                            <span
                                className="font-mono text-[12px] px-2 py-1 bg-[#f5f3f3] border border-[#c1c6d7]/20 rounded text-[#5e5e5e]">React</span>
                            <span
                                className="font-mono text-[12px] px-2 py-1 bg-[#f5f3f3] border border-[#c1c6d7]/20 rounded text-[#5e5e5e]">GraphQL</span>
                            <span
                                className="font-mono text-[12px] px-2 py-1 bg-[#f5f3f3] border border-[#c1c6d7]/20 rounded text-[#5e5e5e]">Framer
                                Motion</span>
                        </div>
                    </div>
                </article>
            </div>
        </section>

    )
}