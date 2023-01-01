export type ReadyHandler = () => void;
export type ObserveElementHeightUnscriber = () => void;
declare function requestResizeWindow(height: number): void;
declare function observeElementHeight(element: HTMLElement): ObserveElementHeightUnscriber;
declare const _default: {
    observeElementHeight: typeof observeElementHeight;
    requestResizeWindow: typeof requestResizeWindow;
};
export default _default;
