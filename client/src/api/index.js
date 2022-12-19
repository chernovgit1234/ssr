
import createProductsApi from './products';

export default http => ({
	products: createProductsApi(http)
});