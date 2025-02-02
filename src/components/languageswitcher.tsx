'use client'

import { useRouter, usePathname } from 'next/navigation';
import { useTransition } from 'react';
import { useLocale } from 'next-intl';
import { Locale } from '../types/global';


export default function LanguageSwitcher() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const locale = useLocale();
    const pathname = usePathname();
    const otherLocale: Locale = locale === 'en' ? 'fr' : 'en';
    const handleLanguageChange = (newLocale: Locale) => {
        startTransition(() => {
            const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
            router.push(newPath);
        });
    };

    return (
        <button
            onClick={() => handleLanguageChange(otherLocale)}
            disabled={isPending}
            className='w-16 bg-ghost-white hover:bg-transparent text-charcoal hover:text-ghost-white border-solid border border-transparent hover:border-ghost-white font-bold rounded-md'
        >{otherLocale === 'en' ? 'EN' : 'FR'}
        </button>
    );
};
