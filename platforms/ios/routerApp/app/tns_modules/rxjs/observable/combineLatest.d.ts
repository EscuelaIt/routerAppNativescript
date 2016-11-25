import { Observable, ObservableInput } from '../Observable';
import { Scheduler } from '../Scheduler';
export declare function combineLatest<T, T2>(v1: ObservableInput<T>, v2: ObservableInput<T2>, scheduler?: Scheduler): Observable<[T, T2]>;
export declare function combineLatest<T, T2, T3>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, scheduler?: Scheduler): Observable<[T, T2, T3]>;
export declare function combineLatest<T, T2, T3, T4>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, scheduler?: Scheduler): Observable<[T, T2, T3, T4]>;
export declare function combineLatest<T, T2, T3, T4, T5>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, scheduler?: Scheduler): Observable<[T, T2, T3, T4, T5]>;
export declare function combineLatest<T, T2, T3, T4, T5, T6>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>, scheduler?: Scheduler): Observable<[T, T2, T3, T4, T5, T6]>;
export declare function combineLatest<T, R>(v1: ObservableInput<T>, project: (v1: T) => R, scheduler?: Scheduler): Observable<R>;
export declare function combineLatest<T, T2, R>(v1: ObservableInput<T>, v2: ObservableInput<T2>, project: (v1: T, v2: T2) => R, scheduler?: Scheduler): Observable<R>;
export declare function combineLatest<T, T2, T3, R>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, project: (v1: T, v2: T2, v3: T3) => R, scheduler?: Scheduler): Observable<R>;
export declare function combineLatest<T, T2, T3, T4, R>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, project: (v1: T, v2: T2, v3: T3, v4: T4) => R, scheduler?: Scheduler): Observable<R>;
export declare function combineLatest<T, T2, T3, T4, T5, R>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, project: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5) => R, scheduler?: Scheduler): Observable<R>;
export declare function combineLatest<T, T2, T3, T4, T5, T6, R>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>, project: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R, scheduler?: Scheduler): Observable<R>;
export declare function combineLatest<T>(array: ObservableInput<T>[], scheduler?: Scheduler): Observable<T[]>;
export declare function combineLatest<R>(array: ObservableInput<any>[], scheduler?: Scheduler): Observable<R>;
export declare function combineLatest<T, R>(array: ObservableInput<T>[], project: (...values: Array<T>) => R, scheduler?: Scheduler): Observable<R>;
export declare function combineLatest<R>(array: ObservableInput<any>[], project: (...values: Array<any>) => R, scheduler?: Scheduler): Observable<R>;
export declare function combineLatest<T>(...observables: Array<ObservableInput<T> | Scheduler>): Observable<T[]>;
export declare function combineLatest<T, R>(...observables: Array<ObservableInput<T> | ((...values: Array<T>) => R) | Scheduler>): Observable<R>;
export declare function combineLatest<R>(...observables: Array<ObservableInput<any> | ((...values: Array<any>) => R) | Scheduler>): Observable<R>;
