'use client'

import { useRouter, usePathname } from 'next/navigation';
import { useTransition } from 'react';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const locale = useLocale();
    const pathname = usePathname();
    const otherLocale = locale === 'en' ? 'fr' : 'en';
    const handleLanguageChange = (newLocale: string) => {
        startTransition(() => {
            const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
            router.push(newPath);
        });
    };

    return (
        <button
            onClick={() => handleLanguageChange(otherLocale)}
            disabled={isPending}
        >{otherLocale === 'en' ? 'English' : 'Français'}
        </button>
    );
};
