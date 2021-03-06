const Nodal = require('nodal');

const router = new Nodal.Router();

const relationships = Nodal.require('app/relationships.js')

/* Middleware */
/* executed *before* Controller-specific middleware */

const CORSMiddleware = Nodal.require('middleware/cors_middleware.js');
// const CORSAuthorizationMiddleware = Nodal.require('middleware/cors_authorization_middleware.js');
// const ForceWWWMiddleware = Nodal.require('middleware/force_www_middleware.js');
// const ForceHTTPSMiddleware = Nodal.require('middleware/force_https_middleware.js');

router.middleware.use(CORSMiddleware);
// router.middleware.use(CORSAuthorizationMiddleware);
// router.middleware.use(ForceWWWMiddleware);
// router.middleware.use(ForceHTTPSMiddleware);

/* Renderware */
/* executed *after* Controller-specific renderware */

const GzipRenderware = Nodal.require('renderware/gzip_renderware.js');

router.renderware.use(GzipRenderware);

/* Routes */

const IndexController = Nodal.require('app/controllers/index_controller.js');

/* generator: begin imports */

const V1RatingsController = Nodal.require('app/controllers/v1/ratings_controller.js');
const V1AdjectivesController = Nodal.require('app/controllers/v1/adjectives_controller.js');
const V1MenuTypesController = Nodal.require('app/controllers/v1/menu_types_controller.js');
const V1DishTypesController = Nodal.require('app/controllers/v1/dish_types_controller.js');
const V1DishesController = Nodal.require('app/controllers/v1/dishes_controller.js');
const V1FavoritesController = Nodal.require('app/controllers/v1/favorites_controller.js');
const V1RestaurantsController = Nodal.require('app/controllers/v1/restaurants_controller.js');
const V1ScoreController = Nodal.require('app/controllers/v1/score_controller.js');
const V1DishesDishTypesController = Nodal.require('app/controllers/v1/dishes_dish_types_controller.js');
const V1TenderController = Nodal.require('app/controllers/v1/tender_controller.js');
const V1RatedmenuController = Nodal.require('app/controllers/v1/ratedmenu_controller.js');
const V1SearchController = Nodal.require('app/controllers/v1/search_controller.js');
const V1PlacesController = Nodal.require('app/controllers/v1/places_controller.js');
const V1NewdishController = Nodal.require('app/controllers/v1/newdish_controller.js');
const V1UsersController = Nodal.require('app/controllers/v1/users_controller.js');
const V1AccessTokensController = Nodal.require('app/controllers/v1/access_tokens_controller.js');

/* generator: end imports */

router.route('/').use(IndexController);

/* generator: begin routes */

router.route('/v1/ratings/{id}').use(V1RatingsController);
router.route('/v1/adjectives/{id}').use(V1AdjectivesController);
router.route('/v1/menu_types/{id}').use(V1MenuTypesController);
router.route('/v1/dish_types/{id}').use(V1DishTypesController);
router.route('/v1/dishes/{id}').use(V1DishesController);
router.route('/v1/favorites/{id}').use(V1FavoritesController);
router.route('/v1/restaurants/{id}').use(V1RestaurantsController);
router.route('/v1/score/{id}').use(V1ScoreController);
router.route('/v1/dishes_dish_types/{id}').use(V1DishesDishTypesController);
router.route('/v1/tender/{id}').use(V1TenderController);
router.route('/v1/ratedmenu/{id}').use(V1RatedmenuController);
router.route('/v1/search/{id}').use(V1SearchController);
router.route('/v1/places/{id}').use(V1PlacesController);
router.route('/v1/newdish/{id}').use(V1NewdishController);
router.route('/v1/restaurants/{id}').use(V1RestaurantsController);
router.route('/v1/users/{id}').use(V1UsersController);
router.route('/v1/access_tokens/{id}').use(V1AccessTokensController);

/* generator: end routes */

module.exports = router;
