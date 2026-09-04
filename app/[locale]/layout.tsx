import './globals.css'
import { I18nProviderClient } from '../locales/client'

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return [{ locale: 'ar' }, { locale: 'en' }]
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params
  const direction = locale === 'ar' ? 'rtl' : 'ltr'

  return (
    <html lang={locale} dir={direction}>
      <body className="min-h-full flex flex-col">
        <I18nProviderClient locale={locale}>
     
          
          {children}
        </I18nProviderClient>
      </body>
    </html>
  );
}
