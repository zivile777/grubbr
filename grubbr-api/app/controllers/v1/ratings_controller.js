'use strict';

const Nodal = require('nodal');
const Rating = Nodal.require('app/models/rating.js');
const Adjective = Nodal.require('app/models/adjective.js');

const defaultResponse = [{adjective: ['memo']}, 'dish_id',
                          'user_id', 'image', 'rating', 'review', 'created_at']

class V1RatingsController extends Nodal.Controller {

  index() {

    Rating.query()
      .join('adjective')
      .where(this.params.query)
      .end((err, models) => {

        this.respond(err || models, defaultResponse);

      });

  }

  show() {

    Rating.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  create() {

    Rating.create(this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  update() {

    Rating.update(this.params.route.id, this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  destroy() {

    Rating.destroy(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

}

module.exports = V1RatingsController;
