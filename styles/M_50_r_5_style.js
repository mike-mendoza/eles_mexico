var size = 0;
var placement = 'point';

var style_M_50_r_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("M_50_r");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.420000 && value <= 0.670000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.8 + size, points: 5,
            stroke: new ol.style.Stroke({color: 'rgba(85,85,85,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(128,191,172,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.670000 && value <= 0.860000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.8 + size, points: 5,
            stroke: new ol.style.Stroke({color: 'rgba(85,85,85,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(199,233,173,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.860000 && value <= 1.110000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.8 + size, points: 5,
            stroke: new ol.style.Stroke({color: 'rgba(85,85,85,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(247,240,141,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.110000 && value <= 1.280000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.8 + size, points: 5,
            stroke: new ol.style.Stroke({color: 'rgba(85,85,85,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(254,201,128,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.280000 && value <= 1.540000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.8 + size, points: 5,
            stroke: new ol.style.Stroke({color: 'rgba(85,85,85,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(241,124,74,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.540000 && value <= 1.740000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.8 + size, points: 5,
            stroke: new ol.style.Stroke({color: 'rgba(85,85,85,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(154,0,2,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
