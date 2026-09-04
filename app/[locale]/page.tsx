import Nav from './component/nav'
import Hero from './component/hero';
import Footer from './component/footer';
import Skills from './component/skills';
import { getI18n } from '../locales/server'
import { setStaticParamsLocale } from 'next-international/server'; // <-- التعديل هنا
import Projects from './component/project';
import Contact from './component/contact';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setStaticParamsLocale(locale);

  const t = await getI18n()

  return (
    <>
      <Nav />
      <main className="pt-24 pb-24 flex flex-col gap-32">
        <Hero />

        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
