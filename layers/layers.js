var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Federalentities_1 = new ol.format.GeoJSON();
var features_Federalentities_1 = format_Federalentities_1.readFeatures(json_Federalentities_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Federalentities_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Federalentities_1.addFeatures(features_Federalentities_1);
var lyr_Federalentities_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Federalentities_1, 
                style: style_Federalentities_1,
                interactive: false,
                title: '<img src="styles/legend/Federalentities_1.png" /> Federal entities'
            });
var format_Majorhighwaycorridors_2 = new ol.format.GeoJSON();
var features_Majorhighwaycorridors_2 = format_Majorhighwaycorridors_2.readFeatures(json_Majorhighwaycorridors_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Majorhighwaycorridors_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Majorhighwaycorridors_2.addFeatures(features_Majorhighwaycorridors_2);
var lyr_Majorhighwaycorridors_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Majorhighwaycorridors_2, 
                style: style_Majorhighwaycorridors_2,
                interactive: false,
                title: '<img src="styles/legend/Majorhighwaycorridors_2.png" /> Major highway corridors'
            });
var format_V50_3 = new ol.format.GeoJSON();
var features_V50_3 = format_V50_3.readFeatures(json_V50_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_V50_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_V50_3.addFeatures(features_V50_3);
var lyr_V50_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_V50_3, 
                style: style_V50_3,
                interactive: true,
    title: 'V50<br />\
    <img src="styles/legend/V50_3_0.png" /> 371 - 487<br />\
    <img src="styles/legend/V50_3_1.png" /> 487 - 605<br />\
    <img src="styles/legend/V50_3_2.png" /> 605 - 772<br />\
    <img src="styles/legend/V50_3_3.png" /> 772 - 970<br />\
    <img src="styles/legend/V50_3_4.png" /> 970 - 1229<br />\
    <img src="styles/legend/V50_3_5.png" /> 1229 - 1752<br />'
        });
var format_M50_4 = new ol.format.GeoJSON();
var features_M50_4 = format_M50_4.readFeatures(json_M50_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_M50_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_M50_4.addFeatures(features_M50_4);
var lyr_M50_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_M50_4, 
                style: style_M50_4,
                interactive: true,
    title: 'M50<br />\
    <img src="styles/legend/M50_4_0.png" /> 592 - 800<br />\
    <img src="styles/legend/M50_4_1.png" /> 800 - 1327<br />\
    <img src="styles/legend/M50_4_2.png" /> 1327 - 2507<br />\
    <img src="styles/legend/M50_4_3.png" /> 2507 - 4198<br />\
    <img src="styles/legend/M50_4_4.png" /> 4198 - 9320<br />\
    <img src="styles/legend/M50_4_5.png" /> 9320 - 16124<br />'
        });
var format_V50r_5 = new ol.format.GeoJSON();
var features_V50r_5 = format_V50r_5.readFeatures(json_V50r_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_V50r_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_V50r_5.addFeatures(features_V50r_5);
var lyr_V50r_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_V50r_5, 
                style: style_V50r_5,
                interactive: true,
    title: 'V50r<br />\
    <img src="styles/legend/V50r_5_0.png" /> 0.41 - 0.65<br />\
    <img src="styles/legend/V50r_5_1.png" /> 0.65 - 0.83<br />\
    <img src="styles/legend/V50r_5_2.png" /> 0.83 - 1.01<br />\
    <img src="styles/legend/V50r_5_3.png" /> 1.01 - 1.2<br />\
    <img src="styles/legend/V50r_5_4.png" /> 1.20 - 1.42<br />\
    <img src="styles/legend/V50r_5_5.png" /> 1.42 - 1.76<br />'
        });
var format_M50r_6 = new ol.format.GeoJSON();
var features_M50r_6 = format_M50r_6.readFeatures(json_M50r_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_M50r_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_M50r_6.addFeatures(features_M50r_6);
var lyr_M50r_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_M50r_6, 
                style: style_M50r_6,
                interactive: true,
    title: 'M50r<br />\
    <img src="styles/legend/M50r_6_0.png" /> 0.39 - 0.63<br />\
    <img src="styles/legend/M50r_6_1.png" /> 0.63 - 0.88<br />\
    <img src="styles/legend/M50r_6_2.png" /> 0.88 - 1.00<br />\
    <img src="styles/legend/M50r_6_3.png" /> 1.00 - 1.28<br />\
    <img src="styles/legend/M50r_6_4.png" /> 1.28 - 1.55<br />\
    <img src="styles/legend/M50r_6_5.png" /> 1.55 - 1.72<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Federalentities_1.setVisible(true);lyr_Majorhighwaycorridors_2.setVisible(true);lyr_V50_3.setVisible(false);lyr_M50_4.setVisible(false);lyr_V50r_5.setVisible(false);lyr_M50r_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Federalentities_1,lyr_Majorhighwaycorridors_2,lyr_V50_3,lyr_M50_4,lyr_V50r_5,lyr_M50r_6];
lyr_Federalentities_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COV_': 'COV_', 'COV_ID': 'COV_ID', 'ENTIDAD': 'ENTIDAD', 'CAPITAL': 'CAPITAL', 'RASGO_GEOG': 'RASGO_GEOG', 'NUM_EDO': 'NUM_EDO', });
lyr_Majorhighwaycorridors_2.set('fieldAliases', {'ID': 'ID', 'TIPOVIA': 'TIPOVIA', 'TIPO': 'TIPO', 'NUMERO': 'NUMERO', 'DERE_TRAN': 'DERE_TRAN', 'ADMINISTRA': 'ADMINISTRA', 'NUME_CARR': 'NUME_CARR', 'CONDICION': 'CONDICION', 'ORIGEN': 'ORIGEN', 'CALI_REPR': 'CALI_REPR', 'CVEGEO': 'CVEGEO', 'NOMVIAL': 'NOMVIAL', 'SENTIDO': 'SENTIDO', 'LONGITUD': 'LONGITUD', 'UNIDAD': 'UNIDAD', });
lyr_V50_3.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'MHC': 'MHC', 'Year of const': 'Year of const', 'No of lanes': 'No of lanes', 'No of spans': 'No of spans', 'Max span length': 'Max span length', 'Total lenght': 'Total lenght', 'y_lat': 'y_lat', 'x_long': 'x_long', 'AADTT': 'AADTT', 'C2': 'C2', 'C3': 'C3', 'T3S2': 'T3S2', 'T3S3': 'T3S3', 'T3S2R4': 'T3S2R4', 'DLL': 'DLL', 'M50': 'M50', 'V50': 'V50', 'M50r': 'M50r', 'V50r': 'V50r', });
lyr_M50_4.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'MHC': 'MHC', 'Year of const': 'Year of const', 'No of lanes': 'No of lanes', 'No of spans': 'No of spans', 'Max span length': 'Max span length', 'Total lenght': 'Total lenght', 'y_lat': 'y_lat', 'x_long': 'x_long', 'AADTT': 'AADTT', 'C2': 'C2', 'C3': 'C3', 'T3S2': 'T3S2', 'T3S3': 'T3S3', 'T3S2R4': 'T3S2R4', 'DLL': 'DLL', 'M50': 'M50', 'V50': 'V50', 'M50r': 'M50r', 'V50r': 'V50r', });
lyr_V50r_5.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'MHC': 'MHC', 'Year of const': 'Year of const', 'No of lanes': 'No of lanes', 'No of spans': 'No of spans', 'Max span length': 'Max span length', 'Total lenght': 'Total lenght', 'y_lat': 'y_lat', 'x_long': 'x_long', 'AADTT': 'AADTT', 'C2': 'C2', 'C3': 'C3', 'T3S2': 'T3S2', 'T3S3': 'T3S3', 'T3S2R4': 'T3S2R4', 'DLL': 'DLL', 'M50': 'M50', 'V50': 'V50', 'M50r': 'M50r', 'V50r': 'V50r', });
lyr_M50r_6.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'MHC': 'MHC', 'Year of const': 'Year of const', 'No of lanes': 'No of lanes', 'No of spans': 'No of spans', 'Max span length': 'Max span length', 'Total lenght': 'Total lenght', 'y_lat': 'y_lat', 'x_long': 'x_long', 'AADTT': 'AADTT', 'C2': 'C2', 'C3': 'C3', 'T3S2': 'T3S2', 'T3S3': 'T3S3', 'T3S2R4': 'T3S2R4', 'DLL': 'DLL', 'M50': 'M50', 'V50': 'V50', 'M50r': 'M50r', 'V50r': 'V50r', });
lyr_Federalentities_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'COV_': 'TextEdit', 'COV_ID': 'TextEdit', 'ENTIDAD': 'TextEdit', 'CAPITAL': 'TextEdit', 'RASGO_GEOG': 'TextEdit', 'NUM_EDO': 'TextEdit', });
lyr_Majorhighwaycorridors_2.set('fieldImages', {'ID': 'TextEdit', 'TIPOVIA': 'TextEdit', 'TIPO': 'TextEdit', 'NUMERO': 'TextEdit', 'DERE_TRAN': 'TextEdit', 'ADMINISTRA': 'TextEdit', 'NUME_CARR': 'TextEdit', 'CONDICION': 'TextEdit', 'ORIGEN': 'TextEdit', 'CALI_REPR': 'TextEdit', 'CVEGEO': 'TextEdit', 'NOMVIAL': 'TextEdit', 'SENTIDO': 'TextEdit', 'LONGITUD': 'TextEdit', 'UNIDAD': 'TextEdit', });
lyr_V50_3.set('fieldImages', {'ID': 'Range', 'Name': 'TextEdit', 'MHC': 'Range', 'Year of const': 'Range', 'No of lanes': 'Range', 'No of spans': 'Range', 'Max span length': 'TextEdit', 'Total lenght': 'TextEdit', 'y_lat': 'Hidden', 'x_long': 'Hidden', 'AADTT': 'Range', 'C2': 'TextEdit', 'C3': 'TextEdit', 'T3S2': 'TextEdit', 'T3S3': 'TextEdit', 'T3S2R4': 'TextEdit', 'DLL': 'TextEdit', 'M50': 'Hidden', 'V50': 'TextEdit', 'M50r': 'Hidden', 'V50r': 'Hidden', });
lyr_M50_4.set('fieldImages', {'ID': 'Range', 'Name': 'TextEdit', 'MHC': 'Range', 'Year of const': 'Range', 'No of lanes': 'Range', 'No of spans': 'Range', 'Max span length': 'TextEdit', 'Total lenght': 'TextEdit', 'y_lat': 'Hidden', 'x_long': 'Hidden', 'AADTT': 'Range', 'C2': 'TextEdit', 'C3': 'TextEdit', 'T3S2': 'TextEdit', 'T3S3': 'TextEdit', 'T3S2R4': 'TextEdit', 'DLL': 'TextEdit', 'M50': 'TextEdit', 'V50': 'Hidden', 'M50r': 'Hidden', 'V50r': 'Hidden', });
lyr_V50r_5.set('fieldImages', {'ID': 'Range', 'Name': 'TextEdit', 'MHC': 'Range', 'Year of const': 'Range', 'No of lanes': 'Range', 'No of spans': 'Range', 'Max span length': 'TextEdit', 'Total lenght': 'TextEdit', 'y_lat': 'Hidden', 'x_long': 'Hidden', 'AADTT': 'Range', 'C2': 'TextEdit', 'C3': 'TextEdit', 'T3S2': 'TextEdit', 'T3S3': 'TextEdit', 'T3S2R4': 'TextEdit', 'DLL': 'TextEdit', 'M50': 'Hidden', 'V50': 'Hidden', 'M50r': 'Hidden', 'V50r': 'TextEdit', });
lyr_M50r_6.set('fieldImages', {'ID': 'Range', 'Name': 'TextEdit', 'MHC': 'Range', 'Year of const': 'Range', 'No of lanes': 'Range', 'No of spans': 'Range', 'Max span length': 'TextEdit', 'Total lenght': 'TextEdit', 'y_lat': 'Hidden', 'x_long': 'Hidden', 'AADTT': 'Range', 'C2': 'TextEdit', 'C3': 'TextEdit', 'T3S2': 'TextEdit', 'T3S3': 'TextEdit', 'T3S2R4': 'TextEdit', 'DLL': 'TextEdit', 'M50': 'Hidden', 'V50': 'Hidden', 'M50r': 'TextEdit', 'V50r': 'Hidden', });
lyr_Federalentities_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'COV_': 'no label', 'COV_ID': 'no label', 'ENTIDAD': 'no label', 'CAPITAL': 'no label', 'RASGO_GEOG': 'no label', 'NUM_EDO': 'no label', });
lyr_Majorhighwaycorridors_2.set('fieldLabels', {'ID': 'no label', 'TIPOVIA': 'no label', 'TIPO': 'no label', 'NUMERO': 'no label', 'DERE_TRAN': 'no label', 'ADMINISTRA': 'no label', 'NUME_CARR': 'no label', 'CONDICION': 'no label', 'ORIGEN': 'no label', 'CALI_REPR': 'no label', 'CVEGEO': 'no label', 'NOMVIAL': 'no label', 'SENTIDO': 'no label', 'LONGITUD': 'no label', 'UNIDAD': 'no label', });
lyr_V50_3.set('fieldLabels', {'ID': 'header label', 'Name': 'header label', 'MHC': 'header label', 'Year of const': 'header label', 'No of lanes': 'header label', 'No of spans': 'header label', 'Max span length': 'header label', 'Total lenght': 'header label', 'AADTT': 'inline label', 'C2': 'inline label', 'C3': 'inline label', 'T3S2': 'inline label', 'T3S3': 'inline label', 'T3S2R4': 'inline label', 'DLL': 'inline label', 'V50': 'inline label', });
lyr_M50_4.set('fieldLabels', {'ID': 'header label', 'Name': 'header label', 'MHC': 'header label', 'Year of const': 'header label', 'No of lanes': 'header label', 'No of spans': 'header label', 'Max span length': 'header label', 'Total lenght': 'header label', 'AADTT': 'inline label', 'C2': 'inline label', 'C3': 'inline label', 'T3S2': 'inline label', 'T3S3': 'inline label', 'T3S2R4': 'inline label', 'DLL': 'inline label', 'M50': 'inline label', });
lyr_V50r_5.set('fieldLabels', {'ID': 'header label', 'Name': 'header label', 'MHC': 'header label', 'Year of const': 'header label', 'No of lanes': 'header label', 'No of spans': 'header label', 'Max span length': 'header label', 'Total lenght': 'header label', 'AADTT': 'inline label', 'C2': 'inline label', 'C3': 'inline label', 'T3S2': 'inline label', 'T3S3': 'inline label', 'T3S2R4': 'inline label', 'DLL': 'inline label', 'V50r': 'inline label', });
lyr_M50r_6.set('fieldLabels', {'ID': 'header label', 'Name': 'header label', 'MHC': 'header label', 'Year of const': 'header label', 'No of lanes': 'header label', 'No of spans': 'header label', 'Max span length': 'header label', 'Total lenght': 'header label', 'AADTT': 'inline label', 'C2': 'inline label', 'C3': 'inline label', 'T3S2': 'inline label', 'T3S3': 'inline label', 'T3S2R4': 'inline label', 'DLL': 'inline label', 'M50r': 'inline label', });
lyr_M50r_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});