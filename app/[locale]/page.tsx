import Nav from './component/nav'
import Hero from './component/hero';
import Footer from './component/footer';
import Skills from './component/skills';
import { getI18n } from '../locales/server'
import Projects from './component/project';
import Contact from './component/contact';
export default async function Home() {
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
