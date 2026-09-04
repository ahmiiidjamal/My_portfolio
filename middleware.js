import { createI18nMiddleware } from 'next-international/middleware'

export function middleware(request) {
  // نقوم بإنشاء وتشغيل الوسيط مباشرة هنا لضمان عدم حدوث أي تداخل
  const handleI18n = createI18nMiddleware({
    locales: ['ar', 'en'],
    defaultLocale: 'ar'
  })
  
  return handleI18n(request)
}

export const config = {
  // استثناء ملفات النظام والصور لتسريع الأداء
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
