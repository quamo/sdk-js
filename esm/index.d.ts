declare const _default: {
    version: string;
    Frame: {
        observeElementHeight: (element: HTMLElement) => import("./frame").ObserveElementHeightUnscriber;
        requestResizeWindow: (height: number) => void;
    };
};
export default _default;
