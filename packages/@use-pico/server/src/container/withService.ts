import {proxyOf}           from "@use-pico/utils";
import {type FactoryValue} from "pumpit";
import {type Container}    from "./Container";

export namespace withService {
	export interface Service<TService> {
		service: TService;

		key: string;

		inject: symbol;

		use(container: Container): TService;

		bind<T extends new (...args: any) => TService>(container: Container, value: T, options?: Container.Options.Class<T>): void;

		factory<T extends FactoryValue>(container: Container, factory: T, options?: Container.Options.Factory<T>): void;

		value(container: Container, value: TService): void;
	}
}

/**
 * Creates a service binding for the container; it could be used to bind a class, factory, or value to the container and resolve it.
 */
export const withService = <TService>(key: string): withService.Service<TService> => {
	return {
		service: proxyOf,
		key,
		inject:  Symbol.for(key),
		use(container) {
			return container.resolve<TService>(this.inject);
		},
		bind(container, value, options) {
			container.useClass(this.inject, value, options);
		},
		factory(container, factory, options) {
			container.useFactory(this.inject, factory, options);
		},
		value(container, value) {
			container.useValue(this.inject, value);
		},
	};
};
