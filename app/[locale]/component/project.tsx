"use client";
import pc from '@/public/pc.png'
import clean from '@/public/clean.png'
import portfolio from '@/public/portfolio.png'
import todo from '@/public/todo.png'
import Image from 'next/image';
import Link from 'next/link';
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

                {/* project 1 */}
                <Link
                    href='https://ahmiiidjamal.github.io/To-Do-List'
                    target='_blank'>
                    <article className="group flex flex-col gap-4">
                        <div className="aspect-[16/9] w-full overflow-hidden border border-[#c1c6d7]/30 rounded-lg relative">
                            <Image alt="Project 1 preview"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                src={todo}
                                width={600}
                                height={400}
                            />
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
                                    className="font-mono text-[12px] px-2 py-1 bg-[#f5f3f3] border border-[#c1c6d7]/20 rounded text-[#5e5e5e]">ReactJs</span>
                                <span
                                    className="font-mono text-[12px] px-2 py-1 bg-[#f5f3f3] border border-[#c1c6d7]/20 rounded text-[#5e5e5e]">React Router</span>
                                <span
                                    className="font-mono text-[12px] px-2 py-1 bg-[#f5f3f3] border border-[#c1c6d7]/20 rounded text-[#5e5e5e]">Context API</span>
                            </div>
                        </div>
                    </article>
                </Link>

                {/* project 2 */}
                <Link
                    href='https://pc-shop-mu.vercel.app'
                    target='_blank'>

                    <article className="group flex flex-col gap-4">
                        <div className="aspect-[16/9] w-full overflow-hidden border border-[#c1c6d7]/30 rounded-lg relative">
                            <Image alt="Project 1 preview"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                src={pc}
                                width={600}
                                height={400}
                            />
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
                                    className="font-mono text-[12px] px-2 py-1 bg-[#f5f3f3] border border-[#c1c6d7]/20 rounded text-[#5e5e5e]">Zustand</span>
                                <span
                                    className="font-mono text-[12px] px-2 py-1 bg-[#f5f3f3] border border-[#c1c6d7]/20 rounded text-[#5e5e5e]">Tailwind</span>
                                <span
                                    className="font-mono text-[12px] px-2 py-1 bg-[#f5f3f3] border border-[#c1c6d7]/20 rounded text-[#5e5e5e]">React router</span>
                            </div>
                        </div>
                    </article>
                </Link>
                {/* project 3 */}
                <Link href='https://ahmiiidjamal.github.io/My-Porfolio/'
                    target='_blank'>
                    <article className="group flex flex-col gap-4">
                        <div className="aspect-[16/9] w-full overflow-hidden border border-[#c1c6d7]/30 rounded-lg relative">
                            <Image alt="Project 1 preview"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                src={portfolio}
                                width={600}
                                height={400}
                            />
                            <div
                                className="absolute inset-0 bg-[#0058c3]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[28px] font-bold text-[#1b1c1c] group-hover:text-[#0058c3] transition-colors">
                                {t('project.projectThree.mainWords')}
                            </h3>
                            <p className="text-[#414754] mt-2 text-[16px] leading-[1.6]">
                                {t('project.projectThree.explain')}
                            </p>

                            <div className="flex gap-2 mt-4 flex-wrap">
                                <span
                                    className="font-mono text-[12px] px-2 py-1 bg-[#f5f3f3] border border-[#c1c6d7]/20 rounded text-[#5e5e5e]">HTML</span>
                                <span
                                    className="font-mono text-[12px] px-2 py-1 bg-[#f5f3f3] border border-[#c1c6d7]/20 rounded text-[#5e5e5e]">CSS</span>
                                <span
                                    className="font-mono text-[12px] px-2 py-1 bg-[#f5f3f3] border border-[#c1c6d7]/20 rounded text-[#5e5e5e]">JavaScript</span>

                            </div>
                        </div>
                    </article>
                </Link>
                {/* project 4 */}
                <Link href='https://ahmiiidjamal.github.io/Sparklen-clean'
                    target='_blank'>
                    <article className="group flex flex-col gap-4">
                        <div className="aspect-[16/9] w-full overflow-hidden border border-[#c1c6d7]/30 rounded-lg relative">
                            <Image alt="Project 1 preview"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                src={clean}
                                width={600}
                                height={400}
                            />
                            <div
                                className="absolute inset-0 bg-[#0058c3]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[28px] font-bold text-[#1b1c1c] group-hover:text-[#0058c3] transition-colors">
                                {t('project.projectFour.mainWords')}
                            </h3>
                            <p className="text-[#414754] mt-2 text-[16px] leading-[1.6]">
                                {t('project.projectFour.explain')}
                            </p>

                            <div className="flex gap-2 mt-4 flex-wrap">
                                <span
                                    className="font-mono text-[12px] px-2 py-1 bg-[#f5f3f3] border border-[#c1c6d7]/20 rounded text-[#5e5e5e]">HTML</span>
                                <span
                                    className="font-mono text-[12px] px-2 py-1 bg-[#f5f3f3] border border-[#c1c6d7]/20 rounded text-[#5e5e5e]">CSS</span>
                                <span
                                    className="font-mono text-[12px] px-2 py-1 bg-[#f5f3f3] border border-[#c1c6d7]/20 rounded text-[#5e5e5e]">JavaScript</span>

                            </div>
                        </div>
                    </article>
                </Link>
            </div>
        </section>

    )
}