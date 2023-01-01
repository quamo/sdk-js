class Manager {
    isReady = false;
    readyHandlers = [];
    static _instance;
    static get instance() {
        if (!Manager._instance) {
            Manager._instance = new Manager();
        }
        return Manager._instance;
    }
    constructor() {
        const onReady = () => {
            this.isReady = true;
            this.emitReady();
        };
        if (document.readyState === "complete" ||
            (document.readyState !== "loading" && !document.documentElement.doScroll)) {
            onReady();
        }
        else {
            document.addEventListener("DOMContentLoaded", onReady);
        }
    }
    emitReady() {
        while (0 < this.readyHandlers.length) {
            const handler = this.readyHandlers.shift();
            if (typeof handler === 'function') {
                handler();
            }
        }
    }
    onReady(handler) {
        this.readyHandlers.push(handler);
        if (this.isReady) {
            setTimeout(() => this.emitReady(), 10);
        }
    }
}
function requestResizeWindow(height) {
    // FIXME: targetOrigin
    window.parent.postMessage({ action: 'QM-Work-HeightChanged', data: { height } }, '*');
}
function observeElementHeight(element) {
    if (!element)
        return () => { };
    const request = () => {
        const height = Math.max(element.scrollHeight, element.offsetHeight, element.clientHeight);
        requestResizeWindow(height);
    };
    const fm = Manager.instance;
    fm.onReady(() => {
        request();
    });
    const observer = new ResizeObserver((entries) => {
        if (entries[0].target == element) {
            request();
        }
    });
    observer.observe(element);
    return () => {
        observer.disconnect();
    };
}
export default {
    observeElementHeight,
    requestResizeWindow,
};
