import { AnimationOptions } from './contracts';
export declare class AnimationBuilder {
    [key: string]: any;
    private _type;
    private _fillMode;
    private _timingFunction;
    private _playState;
    private _direction;
    private _duration;
    private _delay;
    private _iterationCount;
    private _mode;
    private _animationClasses;
    private _classHistory;
    private _listeners;
    show(element: HTMLElement): Promise<HTMLElement>;
    hide(element: HTMLElement): Promise<HTMLElement>;
    stop(element: HTMLElement, reset?: boolean, detach?: boolean): Promise<HTMLElement>;
    animate(element: HTMLElement, mode?: string): Promise<HTMLElement>;
    setOptions(options: AnimationOptions): AnimationBuilder;
    setType(type: string): AnimationBuilder;
    setFillMode(fillMode: string): AnimationBuilder;
    setTimingFunction(timingFunction: string): AnimationBuilder;
    setPlayState(playState: string): AnimationBuilder;
    setDirection(direction: string): AnimationBuilder;
    setDuration(duration: string | number): AnimationBuilder;
    setDelay(delay: string | number): AnimationBuilder;
    setIterationCount(iterationCount: string | number): AnimationBuilder;
    applyAllProperties(element: HTMLElement): AnimationBuilder;
    applyFillMode(element: HTMLElement): AnimationBuilder;
    applyTimingFunction(element: HTMLElement): AnimationBuilder;
    applyPlayState(element: HTMLElement): AnimationBuilder;
    applyDirection(element: HTMLElement): AnimationBuilder;
    applyDuration(element: HTMLElement): AnimationBuilder;
    applyDelay(element: HTMLElement): AnimationBuilder;
    applyIterationCount(element: HTMLElement): AnimationBuilder;
    type: string;
    fillMode: string;
    timingFunction: string;
    playState: string;
    direction: string | number;
    delay: string | number;
    iterationCount: string | number;
    private applyStyle(element, property, value, shim?);
    private removeCssClasses(element);
    private removeListenersForElement(element, detach?, reject?);
    private resetElement(element);
    private whichAnimationEvent(element);
    private applyCssClasses(element, add?);
    private getElementPosition(element);
    private getElementInitialProperties(element);
    private pinElement(element, initialProps);
    private checkValue(value);
    private getValueOrDefault(obj, objKey, fallback?);
}
