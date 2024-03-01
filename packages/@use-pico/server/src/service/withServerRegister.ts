import {type Container} from "../container/Container";
import {withClient}     from "../database/withClient";
import {withConnection} from "../database/withConnection";

/**
 * Register all common services exposed by @use-pico.
 */
export const withServerRegister: Container.Register = container => {
	withConnection.factory(container, () => withClient({}));
	return container;
};
