import Link from "next/link";
export default function CV() {
    return (
        <div className="bg-gray-50 m-0 px-5 py-10 antialiased">

            <div
                className="max-w-[800px] my-0 mx-auto font-['Segoe_UI',_Arial,_sans-serif] text-gray-700 leading-relaxed bg-white p-10 shadow-[0_4px_6px_rgba(0,0,0,0.05)] rounded-lg relative">

                {/* <!-- الاسم والمسمى الوظيفي --> */}
                <h1 className="text-[26px] font-bold text-center mt-0 mb-1 text-gray-900 tracking-[0.5px]">Ahmed Dabah Al-Jmal</h1>
                <p className="text-base font-semibold text-center text-gray-600 m-0 mb-4 uppercase tracking-widest">Software Developer
                </p>

                {/* <!-- معلومات الاتصال --> */}
                <p className="text-center text-sm text-gray-500 mb-8 border-b-2 border-gray-100 pb-5">
                    +963 998 958 684 &nbsp;|&nbsp;
                    <a href="mailto:ahmed@gmail.com"
                        className="text-gray-500 no-underline hover:text-blue-700 hover:underline">ahmed@gmail.com</a> &nbsp;|&nbsp;
                    <a href="https://github.com" target="_blank"
                        className="text-gray-500 no-underline hover:text-blue-700 hover:underline">://github.com</a> &nbsp;|&nbsp;
                    Aleppo, Syria
                </p>

                {/* <!-- النبذة الشخصية --> */}
                <h2 className="text-[15px] font-bold tracking-widest border-b border-gray-200 pb-1 mt-7 mb-4 text-blue-600">PROFESSIONAL
                    SUMMARY</h2>
                <p className="text-sm text-gray-600 m-0 mb-4 text-justify">
                    Motivated and detail-oriented Front-End Developer with practical experience in building responsive, user-friendly,
                    and dynamic web applications. Proficient in React.js, Next.js, and modern styling frameworks like Tailwind CSS.
                    Possesses a strong academic foundation in English literature, facilitating excellent communication, technical
                    documentation understanding, and global team collaboration.
                </p>

                {/* <!-- الخبرة المهنية --> */}
                <h2 className="text-[15px] font-bold tracking-widest border-b border-gray-200 pb-1 mt-7 mb-4 text-blue-600">WORK
                    EXPERIENCE</h2>
                <div className="mb-5">
                    <div className="flex justify-between items-baseline m-0 mb-[2px]">
                        <h3 className="text-[14.5px] font-bold text-gray-800 m-0">Front-End Developer</h3>
                        <span className="font-medium text-gray-500 text-xs">September 2025 – Present</span>
                    </div>
                    <p className="text-[13.5px] italic text-gray-600 m-0 mb-2">Local Development Team – Syria</p>
                    <ul className="m-0 pl-5 list-disc">
                        <li className="text-sm text-gray-600 mb-[6px]">Developed and deployed high-performance, responsive user interfaces
                            for local client websites using React.js and Next.js.</li>
                        <li className="text-sm text-gray-600 mb-[6px]">Utilized Tailwind CSS to implement modern, clean, mobile-first web
                            designs, improving user engagement.</li>
                        <li className="text-sm text-gray-600 mb-[6px]">Managed global application state efficiently across complex
                            components using Zustand.</li>
                        <li className="text-sm text-gray-600 mb-[6px]">Collaborated with team members through Git and GitHub for streamlined
                            version control and code deployment.</li>
                    </ul>
                </div>

                {/* <!-- التعليم --> */}
                <h2 className="text-[15px] font-bold tracking-widest border-b border-gray-200 pb-1 mt-7 mb-4 text-blue-600">EDUCATION
                </h2>
                <div className="mb-5">
                    <div className="flex justify-between items-baseline m-0 mb-[2px]">
                        <h3 className="text-[14.5px] font-bold text-gray-800 m-0">Bachelor of Arts in English Literature</h3>
                        <span className="font-medium text-gray-500 text-xs">Ongoing / Completed</span>
                    </div>
                    <p className="text-[13.5px] italic text-gray-600 m-0 mb-2">University of Aleppo – Aleppo, Syria</p>
                </div>

                {/* <!-- المهارات التقنية --> */}
                <h2 className="text-[15px] font-bold tracking-widest border-b border-gray-200 pb-1 mt-7 mb-4 text-blue-600">TECHNICAL
                    SKILLS</h2>
                <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-800">Frontend Technologies: <span
                        className="font-normal text-gray-600">HTML5, CSS3, JavaScript (ES6+), React.js, Next.js</span></div>
                    <div className="text-sm font-semibold text-gray-800">Styling & State Management: <span
                        className="font-normal text-gray-600">Tailwind CSS, Zustand</span></div>
                    <div className="text-sm font-semibold text-gray-800">Tools & Workflows: <span className="font-normal text-gray-600">Git,
                        GitHub, Version Control, Responsive Web Design</span></div>
                    <div className="text-sm font-semibold text-gray-800">Languages: <span className="font-normal text-gray-600">Arabic
                        (Native), English (Professional)</span></div>
                </div>

                {/* <!-- معرض الأعمال --> */}
                <h2 className="text-[15px] font-bold tracking-widest border-b border-gray-200 pb-1 mt-7 mb-4 text-blue-600">PORTFOLIO
                </h2>
                <p className="text-sm text-gray-600 m-0 mb-4 text-justify">
                    Personal Portfolio Website: <a href="https://yourportfolio.com" target="_blank"
                        className="text-blue-600 underline">yourportfolio.com</a> (Visit to view my latest live frontend web deployment
                    projects).
                </p>

               
                <a
                    href="https://drive.google.com/file/d/1M84C8cqveR2-C0YnuUUDm1h5L1El4xoD/view?usp=drive_link"
                    target="_blank"
                    className="bg-blue-600 text-white no-underline px-5 py-2.5 rounded hover:bg-blue-700 fixed bottom-5 left-5 shadow-md transition-colors">
                    Download CV
                </a>


                <Link
                    href="/"
                    className="bg-blue-600 text-white no-underline px-5 py-2.5 rounded hover:bg-blue-700 fixed bottom-5 right-5 shadow-md transition-colors">Back to page</Link>
            </div>

        </div>
    )
}