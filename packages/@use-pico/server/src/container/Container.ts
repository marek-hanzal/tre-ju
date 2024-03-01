import {
	type AvailableScopes,
	type BindKey,
	type ClassOptions,
	type ClassValue,
	type FactoryOptions,
	type FactoryValue,
	PumpIt
} from "pumpit";

export namespace Container {
	export type Key = BindKey;
	export namespace Options {
		export type Class<T extends ClassValue> = Omit<Partial<ClassOptions<T, AvailableScopes>>, "type">;
		export type Factory<T extends FactoryValue> = Omit<Partial<FactoryOptions<T, AvailableScopes>>, "type">;
	}

	export interface Props {
		container: PumpIt,
	}
}
export type Container = ReturnType<typeof Container>;

/**
 * Container wrapper around PumpIp. It provides a fluent interface for binding classes, factories, and values to the container.
 */
export const Container = (
	{
		container = new PumpIt(),
	}: Container.Props
) => {
	return {
		resolve:    function <T>(key: Container.Key) {
			return container.resolve<T>(key);
		},
		useClass:   function <TClass extends ClassValue>(key: Container.Key, use: TClass, options?: Container.Options.Class<TClass>) {
			container.bindClass(key, use, options);
			return this;
		},
		useFactory: function <TFactory extends FactoryValue>(key: Container.Key, factory: TFactory, options?: Container.Options.Factory<TFactory>) {
			container.bindFactory(key, factory, options);
			return this;
		},
		useValue:   function <T>(key: Container.Key, value: T) {
			container.bindValue(key, value);
			return this;
		},
		child:      function () {
			return Container({container: container.child()});
		},
	} as const;
};
