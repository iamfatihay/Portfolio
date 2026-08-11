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
