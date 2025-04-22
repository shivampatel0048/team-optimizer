'use client';

import { useEffect, useState } from "react";
import { hasCookie, getCookie, setCookie } from 'cookies-next';

const languages = [
    { label: 'English', value: '/auto/en' },
    { label: 'हिन्दी', value: '/auto/hi' },
    { label: 'मराठी', value: '/auto/mr' },
    { label: 'తెలుగు', value: '/auto/te' },
    { label: 'தமிழ்', value: '/auto/ta' },
    { label: 'ગુજરાતી', value: '/auto/gu' },
    { label: 'ਪੰਜਾਬੀ', value: '/auto/pa' },
    { label: 'বাংলা', value: '/auto/bn' },
    { label: 'ಕನ್ನಡ', value: '/auto/kn' },
    { label: 'മലയാളം', value: '/auto/ml' }
];

const GoogleTranslate = ({scrolled}:{scrolled:boolean}) => {
    const [selected, setSelected] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        try {
            const addScript = document.createElement('script');
            addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
            document.body.appendChild(addScript);
            window.googleTranslateElementInit = googleTranslateElementInit;
        } catch (error) {
            console.error('Failed to initialize Google Translate:', error);
        }

        // Check for existing language preference
        if (hasCookie('googtrans')) {
            setSelected(decodeURI(getCookie('googtrans') as string));
        } else {
            setSelected('/auto/en');
        }
    }, []);

    const googleTranslateElementInit = () => {
        if (typeof window === 'undefined' || !window.google?.translate?.TranslateElement) {
            console.warn('Google Translate API not loaded');
            return;
        }

        try {
            new window.google.translate.TranslateElement({
                pageLanguage: 'auto',
                autoDisplay: false,
                includedLanguages: "en,hi,mr,te,ta,gu,pa,bn,kn,ml", // Indian languages
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
            },
                'google_translate_element');
        } catch (error) {
            console.error('Failed to initialize Google Translate Element:', error);
        }
    }

    const langChange = (value: string) => {
        if (hasCookie('googtrans')) {
            setCookie('googtrans', decodeURI(value));
        } else {
            setCookie('googtrans', value);
        }
        setSelected(value);
        setIsOpen(false);
        window.location.reload();
    }

    // Find the current language label
    const currentLanguage = languages.find(lang => lang.value === selected)?.label ?? 'English';

    return (
        <>
            <div id="google_translate_element" className="hidden" style={{ width: '0px', height: '0px', position: 'absolute', left: '50%', zIndex: -99999 }}></div>

            {/* Custom language dropdown styled to match the site theme */}
            <div className="relative notranslate">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`flex items-center space-x-0.5 hover:text-[#A7C957] transition-colors ${scrolled ? 'text-[#386641]' : 'text-white'}`}
                >
                    <span>{currentLanguage}</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {isOpen && (
                    <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-50">
                        {languages.map((language) => (
                            <button
                                key={language.value}
                                className={`block w-full text-left px-4 py-2 text-sm ${selected === language.value ? 'bg-[#A7C957]/20 text-[#386641] font-medium' : 'text-gray-700 hover:bg-[#F7F9F3]'}`}
                                onClick={() => langChange(language.value)}
                            >
                                {language.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default GoogleTranslate;

// Add TypeScript declarations for global Google Translate API
declare global {
    interface Window {
        googleTranslateElementInit: () => void;
        google: {
            translate: {
                TranslateElement: any;
            };
        };
    }
}
