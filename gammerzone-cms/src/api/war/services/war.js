'use strict';

/**
 * war service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::war.war');
