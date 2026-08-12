import "@testing-library/jest-dom";

/*
 * jsdom implements neither of these, but components mount observers on load
 * (the header's active-link tracking, the footer seal, the beams backdrop).
 * Standing in with a no-op lets them mount; nothing is ever on screen in jsdom,
 * so a callback that never fires is the honest result rather than a fake one.
 */
class NoopObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
        return [];
    }
}

if (!window.IntersectionObserver) {
    window.IntersectionObserver = NoopObserver;
}

if (!window.ResizeObserver) {
    window.ResizeObserver = NoopObserver;
}

/*
 * Several components ask whether motion is welcome or whether there is a real
 * hovering cursor before they wire anything up. jsdom has no matchMedia at all,
 * so they would throw on mount; answering "no match" is the safe reading — it
 * is what a plain, non-hovering, reduced-motion client would say.
 */
if (!window.matchMedia) {
    window.matchMedia = (query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener() {},
        removeListener() {},
        addEventListener() {},
        removeEventListener() {},
        dispatchEvent: () => false,
    });
}
