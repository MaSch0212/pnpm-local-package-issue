import InjectorRegistry from 'diagram-js/lib/injector/registry';
import BaseInjector from 'diagram-js/lib/injector/injector';
import './registry';

export default class Injector extends BaseInjector {
  get<T extends keyof InjectorRegistry>(name: T, strict?: boolean): InjectorRegistry[T];
}
