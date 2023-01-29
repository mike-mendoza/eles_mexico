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
var format_V_50_3 = new ol.format.GeoJSON();
var features_V_50_3 = format_V_50_3.readFeatures(json_V_50_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_V_50_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_V_50_3.addFeatures(features_V_50_3);
var lyr_V_50_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_V_50_3, 
                style: style_V_50_3,
                interactive: true,
    title: 'V_50<br />\
    <img src="styles/legend/V_50_3_0.png" /> 454 - 537<br />\
    <img src="styles/legend/V_50_3_1.png" /> 537 - 663<br />\
    <img src="styles/legend/V_50_3_2.png" /> 663 - 820<br />\
    <img src="styles/legend/V_50_3_3.png" /> 820 - 1014<br />\
    <img src="styles/legend/V_50_3_4.png" /> 1014 - 1359<br />\
    <img src="styles/legend/V_50_3_5.png" /> 1359 - 2719<br />'
        });
var format_V_50_r_4 = new ol.format.GeoJSON();
var features_V_50_r_4 = format_V_50_r_4.readFeatures(json_V_50_r_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_V_50_r_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_V_50_r_4.addFeatures(features_V_50_r_4);
var lyr_V_50_r_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_V_50_r_4, 
                style: style_V_50_r_4,
                interactive: true,
    title: 'V_50_r<br />\
    <img src="styles/legend/V_50_r_4_0.png" /> 0.41 - 0.65<br />\
    <img src="styles/legend/V_50_r_4_1.png" /> 0.65 - 0.83<br />\
    <img src="styles/legend/V_50_r_4_2.png" /> 0.83 - 1.01<br />\
    <img src="styles/legend/V_50_r_4_3.png" /> 1.01 - 1.2<br />\
    <img src="styles/legend/V_50_r_4_4.png" /> 1.20 - 1.42<br />\
    <img src="styles/legend/V_50_r_4_5.png" /> 1.42 - 1.76<br />'
        });
var format_M_50_r_5 = new ol.format.GeoJSON();
var features_M_50_r_5 = format_M_50_r_5.readFeatures(json_M_50_r_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_M_50_r_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_M_50_r_5.addFeatures(features_M_50_r_5);
var lyr_M_50_r_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_M_50_r_5, 
                style: style_M_50_r_5,
                interactive: true,
    title: 'M_50_r<br />\
    <img src="styles/legend/M_50_r_5_0.png" /> 0.42 - 0.67<br />\
    <img src="styles/legend/M_50_r_5_1.png" /> 0.67 - 0.86<br />\
    <img src="styles/legend/M_50_r_5_2.png" /> 0.86 - 1.11<br />\
    <img src="styles/legend/M_50_r_5_3.png" /> 1.11 - 1.28<br />\
    <img src="styles/legend/M_50_r_5_4.png" /> 1.28 - 1.54<br />\
    <img src="styles/legend/M_50_r_5_5.png" /> 1.54 - 1.74<br />'
        });
var format_M_50_6 = new ol.format.GeoJSON();
var features_M_50_6 = format_M_50_6.readFeatures(json_M_50_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_M_50_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_M_50_6.addFeatures(features_M_50_6);
var lyr_M_50_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_M_50_6, 
                style: style_M_50_6,
                interactive: true,
    title: 'M_50<br />\
    <img src="styles/legend/M_50_6_0.png" /> 445 - 725<br />\
    <img src="styles/legend/M_50_6_1.png" /> 725 - 1268<br />\
    <img src="styles/legend/M_50_6_2.png" /> 1268 - 2314<br />\
    <img src="styles/legend/M_50_6_3.png" /> 2314 - 4124<br />\
    <img src="styles/legend/M_50_6_4.png" /> 4124 - 7778<br />\
    <img src="styles/legend/M_50_6_5.png" /> 7778 - 14667<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Federalentities_1.setVisible(true);lyr_Majorhighwaycorridors_2.setVisible(true);lyr_V_50_3.setVisible(true);lyr_V_50_r_4.setVisible(true);lyr_M_50_r_5.setVisible(true);lyr_M_50_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Federalentities_1,lyr_Majorhighwaycorridors_2,lyr_V_50_3,lyr_V_50_r_4,lyr_M_50_r_5,lyr_M_50_6];
lyr_Federalentities_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COV_': 'COV_', 'COV_ID': 'COV_ID', 'ENTIDAD': 'ENTIDAD', 'CAPITAL': 'CAPITAL', 'RASGO_GEOG': 'RASGO_GEOG', 'NUM_EDO': 'NUM_EDO', });
lyr_Majorhighwaycorridors_2.set('fieldAliases', {'ID': 'ID', 'TIPOVIA': 'TIPOVIA', 'TIPO': 'TIPO', 'NUMERO': 'NUMERO', 'DERE_TRAN': 'DERE_TRAN', 'ADMINISTRA': 'ADMINISTRA', 'NUME_CARR': 'NUME_CARR', 'CONDICION': 'CONDICION', 'ORIGEN': 'ORIGEN', 'CALI_REPR': 'CALI_REPR', 'CVEGEO': 'CVEGEO', 'NOMVIAL': 'NOMVIAL', 'SENTIDO': 'SENTIDO', 'LONGITUD': 'LONGITUD', 'UNIDAD': 'UNIDAD', });
lyr_V_50_3.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'MHC': 'MHC', 'Year of const': 'Year of const', 'No of lanes': 'No of lanes', 'No of spans': 'No of spans', 'Total lenght': 'Total lenght', 'y_lat': 'y_lat', 'x_long': 'x_long', 'AADTT': 'AADTT', 'C2': 'C2', 'C3': 'C3', 'T3S2': 'T3S2', 'T3S3': 'T3S3', 'T3S2R4': 'T3S2R4', 'DLL': 'DLL', 'M_50': 'M_50', 'V_50': 'V_50', 'M_50_r': 'M_50_r', 'V_50_r': 'V_50_r', });
lyr_V_50_r_4.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'MHC': 'MHC', 'Year of const': 'Year of const', 'No of lanes': 'No of lanes', 'No of spans': 'No of spans', 'Total lenght': 'Total lenght', 'y_lat': 'y_lat', 'x_long': 'x_long', 'AADTT': 'AADTT', 'C2': 'C2', 'C3': 'C3', 'T3S2': 'T3S2', 'T3S3': 'T3S3', 'T3S2R4': 'T3S2R4', 'DLL': 'DLL', 'M_50': 'M_50', 'V_50': 'V_50', 'M_50_r': 'M_50_r', 'V_50_r': 'V_50_r', });
lyr_M_50_r_5.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'MHC': 'MHC', 'Year of const': 'Year of const', 'No of lanes': 'No of lanes', 'No of spans': 'No of spans', 'Total lenght': 'Total lenght', 'y_lat': 'y_lat', 'x_long': 'x_long', 'AADTT': 'AADTT', 'C2': 'C2', 'C3': 'C3', 'T3S2': 'T3S2', 'T3S3': 'T3S3', 'T3S2R4': 'T3S2R4', 'DLL': 'DLL', 'M_50': 'M_50', 'V_50': 'V_50', 'M_50_r': 'M_50_r', 'V_50_r': 'V_50_r', });
lyr_M_50_6.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'MHC': 'MHC', 'Year of const': 'Year of const', 'No of lanes': 'No of lanes', 'No of spans': 'No of spans', 'Total lenght': 'Total lenght', 'y_lat': 'y_lat', 'x_long': 'x_long', 'AADTT': 'AADTT', 'C2': 'C2', 'C3': 'C3', 'T3S2': 'T3S2', 'T3S3': 'T3S3', 'T3S2R4': 'T3S2R4', 'DLL': 'DLL', 'M_50': 'M_50', 'V_50': 'V_50', 'M_50_r': 'M_50_r', 'V_50_r': 'V_50_r', });
lyr_Federalentities_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'COV_': 'TextEdit', 'COV_ID': 'TextEdit', 'ENTIDAD': 'TextEdit', 'CAPITAL': 'TextEdit', 'RASGO_GEOG': 'TextEdit', 'NUM_EDO': 'TextEdit', });
lyr_Majorhighwaycorridors_2.set('fieldImages', {'ID': 'TextEdit', 'TIPOVIA': 'TextEdit', 'TIPO': 'TextEdit', 'NUMERO': 'TextEdit', 'DERE_TRAN': 'TextEdit', 'ADMINISTRA': 'TextEdit', 'NUME_CARR': 'TextEdit', 'CONDICION': 'TextEdit', 'ORIGEN': 'TextEdit', 'CALI_REPR': 'TextEdit', 'CVEGEO': 'TextEdit', 'NOMVIAL': 'TextEdit', 'SENTIDO': 'TextEdit', 'LONGITUD': 'TextEdit', 'UNIDAD': 'TextEdit', });
lyr_V_50_3.set('fieldImages', {'ID': 'Range', 'Name': 'TextEdit', 'MHC': 'Range', 'Year of const': 'Range', 'No of lanes': 'Range', 'No of spans': 'Range', 'Total lenght': 'TextEdit', 'y_lat': 'Hidden', 'x_long': 'Hidden', 'AADTT': 'Range', 'C2': 'TextEdit', 'C3': 'TextEdit', 'T3S2': 'TextEdit', 'T3S3': 'TextEdit', 'T3S2R4': 'TextEdit', 'DLL': 'TextEdit', 'M_50': 'Hidden', 'V_50': 'TextEdit', 'M_50_r': 'Hidden', 'V_50_r': 'Hidden', });
lyr_V_50_r_4.set('fieldImages', {'ID': 'Range', 'Name': 'TextEdit', 'MHC': 'Range', 'Year of const': 'Range', 'No of lanes': 'Range', 'No of spans': 'Range', 'Total lenght': 'TextEdit', 'y_lat': 'Hidden', 'x_long': 'Hidden', 'AADTT': 'Range', 'C2': 'TextEdit', 'C3': 'TextEdit', 'T3S2': 'TextEdit', 'T3S3': 'TextEdit', 'T3S2R4': 'TextEdit', 'DLL': 'TextEdit', 'M_50': 'Hidden', 'V_50': 'Hidden', 'M_50_r': 'Hidden', 'V_50_r': 'TextEdit', });
lyr_M_50_r_5.set('fieldImages', {'ID': 'Range', 'Name': 'TextEdit', 'MHC': 'Range', 'Year of const': 'Range', 'No of lanes': 'Range', 'No of spans': 'Range', 'Total lenght': 'TextEdit', 'y_lat': 'Hidden', 'x_long': 'Hidden', 'AADTT': 'Range', 'C2': 'TextEdit', 'C3': 'TextEdit', 'T3S2': 'TextEdit', 'T3S3': 'TextEdit', 'T3S2R4': 'TextEdit', 'DLL': 'TextEdit', 'M_50': 'Hidden', 'V_50': 'Hidden', 'M_50_r': 'TextEdit', 'V_50_r': 'Hidden', });
lyr_M_50_6.set('fieldImages', {'ID': 'Range', 'Name': 'TextEdit', 'MHC': 'Range', 'Year of const': 'Range', 'No of lanes': 'Range', 'No of spans': 'Range', 'Total lenght': 'TextEdit', 'y_lat': 'Hidden', 'x_long': 'Hidden', 'AADTT': 'Range', 'C2': 'TextEdit', 'C3': 'TextEdit', 'T3S2': 'TextEdit', 'T3S3': 'TextEdit', 'T3S2R4': 'TextEdit', 'DLL': 'TextEdit', 'M_50': 'TextEdit', 'V_50': 'Hidden', 'M_50_r': 'Hidden', 'V_50_r': 'Hidden', });
lyr_Federalentities_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'COV_': 'no label', 'COV_ID': 'no label', 'ENTIDAD': 'no label', 'CAPITAL': 'no label', 'RASGO_GEOG': 'no label', 'NUM_EDO': 'no label', });
lyr_Majorhighwaycorridors_2.set('fieldLabels', {'ID': 'no label', 'TIPOVIA': 'no label', 'TIPO': 'no label', 'NUMERO': 'no label', 'DERE_TRAN': 'no label', 'ADMINISTRA': 'no label', 'NUME_CARR': 'no label', 'CONDICION': 'no label', 'ORIGEN': 'no label', 'CALI_REPR': 'no label', 'CVEGEO': 'no label', 'NOMVIAL': 'no label', 'SENTIDO': 'no label', 'LONGITUD': 'no label', 'UNIDAD': 'no label', });
lyr_V_50_3.set('fieldLabels', {'ID': 'header label', 'Name': 'header label', 'MHC': 'header label', 'Year of const': 'header label', 'No of lanes': 'header label', 'No of spans': 'header label', 'Total lenght': 'header label', 'AADTT': 'header label', 'C2': 'header label', 'C3': 'header label', 'T3S2': 'header label', 'T3S3': 'header label', 'T3S2R4': 'header label', 'DLL': 'header label', 'V_50': 'header label', });
lyr_V_50_r_4.set('fieldLabels', {'ID': 'header label', 'Name': 'header label', 'MHC': 'header label', 'Year of const': 'header label', 'No of lanes': 'header label', 'No of spans': 'header label', 'Total lenght': 'header label', 'AADTT': 'header label', 'C2': 'header label', 'C3': 'header label', 'T3S2': 'header label', 'T3S3': 'header label', 'T3S2R4': 'header label', 'DLL': 'header label', 'V_50_r': 'header label', });
lyr_M_50_r_5.set('fieldLabels', {'ID': 'header label', 'Name': 'header label', 'MHC': 'header label', 'Year of const': 'header label', 'No of lanes': 'header label', 'No of spans': 'header label', 'Total lenght': 'header label', 'AADTT': 'header label', 'C2': 'header label', 'C3': 'header label', 'T3S2': 'header label', 'T3S3': 'header label', 'T3S2R4': 'header label', 'DLL': 'header label', 'M_50_r': 'header label', });
lyr_M_50_6.set('fieldLabels', {'ID': 'header label', 'Name': 'header label', 'MHC': 'header label', 'Year of const': 'header label', 'No of lanes': 'header label', 'No of spans': 'header label', 'Total lenght': 'header label', 'AADTT': 'header label', 'C2': 'header label', 'C3': 'header label', 'T3S2': 'header label', 'T3S3': 'header label', 'T3S2R4': 'header label', 'DLL': 'header label', 'M_50': 'header label', });
lyr_M_50_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});