import React, { createContext, useContext, useMemo } from "react";
import en from "./en";
import de from "./de";

export const DEFAULT_LOCALE = "en";

export const LOCALES = { en, de };

/*
 * Paths, not preferences. The language is part of the address because it has to
 * be indexable: /de/ is served as its own document with its own <head>, which
 * is what lets the two versions point at each other with hreflang and lets a
 * crawler, or anyone sharing a link, land on the language they meant. A
 * switcher that only flipped React state would leave both languages sharing
 * one URL, and neither would rank.
 */
export const localePath = { en: "/", de: "/de/" };

export function detectLocale(pathname) {
    const path =
        pathname ?? (typeof window === "undefined" ? "/" : window.location.pathname);
    return path === "/de" || path.startsWith("/de/") ? "de" : DEFAULT_LOCALE;
}

const CopyContext = createContext({
    locale: DEFAULT_LOCALE,
    copy: LOCALES[DEFAULT_LOCALE],
});

export const CopyProvider = ({ locale = DEFAULT_LOCALE, children }) => {
    const value = useMemo(
        () => ({
            locale,
            copy: LOCALES[locale] ?? LOCALES[DEFAULT_LOCALE],
        }),
        [locale]
    );

    return <CopyContext.Provider value={value}>{children}</CopyContext.Provider>;
};

/* The whole dictionary; sections destructure the branch they need */
export const useCopy = () => useContext(CopyContext).copy;

export const useLocale = () => useContext(CopyContext).locale;
