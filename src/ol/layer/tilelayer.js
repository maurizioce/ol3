goog.provide('ol.layer.Tile');

goog.require('ol.layer.Layer');


/**
 * @enum {string}
 */
ol.layer.TileProperty = {
  PRELOAD: 'preload'
};



/**
 * @constructor
 * @extends {ol.layer.Layer}
 * @param {olx.layer.TileOptions} options Tile layer options.
 * @todo stability experimental
 * @todo observable preload {number} the level to preload tiles up to
 */
ol.layer.Tile = function(options) {
  goog.base(this, options);

};
goog.inherits(ol.layer.Tile, ol.layer.Layer);


/**
 * @return {number|undefined} Preload.
 * @todo stability experimental
 */
ol.layer.Tile.prototype.getPreload = function() {
  return /** @type {number|undefined} */ (
      this.get(ol.layer.TileProperty.PRELOAD));
};
goog.exportProperty(
    ol.layer.Tile.prototype,
    'getPreload',
    ol.layer.Tile.prototype.getPreload);


/**
 * @param {number} preload Preload.
 * @todo stability experimental
 */
ol.layer.Tile.prototype.setPreload = function(preload) {
  this.set(ol.layer.TileProperty.PRELOAD, preload);
};
goog.exportProperty(
    ol.layer.Tile.prototype,
    'setPreload',
    ol.layer.Tile.prototype.setPreload);
