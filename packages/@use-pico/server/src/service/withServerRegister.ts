import {type Container}    from "../container/Container";
import {withClient}        from "../database/withClient";
import {withClientFactory} from "../database/withClientFactory";
import {withPool}          from "../database/withPool";
import {withPoolFactory}   from "../database/withPoolFactory";

/**
 * Register all common services exposed by @use-pico.
 */
export const withServerRegister: Container.Register = container => {
	withPool.factory(container, () => withPoolFactory());
	withClient.factory(container, () => withClientFactory({pool: withPool.use(container)}));
	return container;
};
