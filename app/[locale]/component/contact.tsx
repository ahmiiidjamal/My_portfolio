"use client";
import EmailIcon from '@mui/icons-material/Email';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import {useI18n} from "@/app/locales/client";
export default function Contact(){
    const t= useI18n();
    return(
        <section id="contact" className="px-5 md:px-20 max-w-[1200px] mx-auto w-full">
            <div
                className="bg-[#ffffff] border border-[#c1c6d7]/30 p-8 md:p-12 rounded-xl flex flex-col md:flex-row gap-12">
                <div className="flex-1 flex flex-col gap-6">
                    <h2 className="text-[32px] font-bold text-[#1b1c1c]">{t('contact.contact')}</h2>

                    <p className="text-[18px] leading-[1.6] text-[#414754]">
                       {t('contact.text')}
                    </p>

                    <div className="flex flex-col gap-4 mt-4">
                        <div className="flex items-center gap-3 text-[#5e5e5e]">
                            <span className="material-symbols-outlined"><EmailIcon fontSize='large'/></span>
                            <span className="font-mono text-[14px]">ahmedsoftdev123@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-3 text-[#5e5e5e]">
                            <span className="material-symbols-outlined"><AddLocationAltIcon fontSize='large'/></span>
                            <span className="font-mono text-[14px]">Remote / Global</span>
                        </div>
                        <div className="flex items-center gap-3 text-[#5e5e5e]">
                            <span className="material-symbols-outlined"><PhoneInTalkIcon fontSize='large'/></span>
                            <span className="font-mono text-[14px]">963-998958684</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <form className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="font-mono text-[20px] text-[#414754]">{t('contact.labelName')}</label>
                            <input id="name" type="text" placeholder={t('contact.inputName')}
                                className="bg-transparent border-0 border-b border-[#c1c6d7] focus:border-[#0058c3] focus:ring-0 px-0 py-2 text-[#1b1c1c] placeholder:text-[#c6c6c6]"></input>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-mono text-[20px] text-[#414754]">{t('contact.labelEmail')}</label>
                            <input id="email" type="email" placeholder={t('contact.inputEmail')}
                                className="bg-transparent border-0 border-b border-[#c1c6d7] focus:border-[#0058c3] focus:ring-0 px-0 py-2 text-[#1b1c1c] placeholder:text-[#c6c6c6]"></input>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-mono text-[20px] text-[#414754]">{t('contact.labelMassage')}</label>
                            <textarea id="message" placeholder={t('contact.inputMassage')}
                                className="bg-transparent border-0 border-b border-[#c1c6d7] focus:border-[#0058c3] focus:ring-0 px-0 py-2 text-[#1b1c1c] placeholder:text-[#c6c6c6] resize-none"></textarea>
                        </div>

                        <button type="button"
                            className="mt-4 bg-[#0058c3] hover:bg-[#0070f3] text-[#ffffff] font-mono text-[14px] px-6 py-3 rounded-md transition-all duration-300 self-start">
                            {t('contact.send')}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}