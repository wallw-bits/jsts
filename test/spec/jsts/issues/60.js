describe('GitHub issue #60', function() {

  it('PrecisionModel on difference result should not be undefined', function() {

      var poly1 = OpenLayers.Geometry.Polygon.createRegularPolygon(
          new OpenLayers.Geometry.Point(0.0, 0.0), 2, 5);
      var poly2 = OpenLayers.Geometry.Polygon.createRegularPolygon(
          new OpenLayers.Geometry.Point(1.0, 1.0), 2, 4);
      
      var converter = new jsts.geom.OpenLayersConverter();
      poly1 = converter.convertFrom(poly1);
      poly2 = converter.convertFrom(poly2);
      
      var poly3 = poly1.difference(poly2);
      
      var precisionModel = poly3.getPrecisionModel();
      
      expect(precisionModel).toBeDefined();
  });
});