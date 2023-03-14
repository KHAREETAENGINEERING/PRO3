var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 0.600000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_AREA2_1 = new ol.format.GeoJSON();
var features_AREA2_1 = format_AREA2_1.readFeatures(json_AREA2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREA2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA2_1.addFeatures(features_AREA2_1);
var lyr_AREA2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AREA2_1, 
                style: style_AREA2_1,
                interactive: true,
                title: '<img src="styles/legend/AREA2_1.png" /> AREA2'
            });
var format_ww_2 = new ol.format.GeoJSON();
var features_ww_2 = format_ww_2.readFeatures(json_ww_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ww_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ww_2.addFeatures(features_ww_2);
var lyr_ww_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ww_2, 
                style: style_ww_2,
                interactive: true,
                title: '<img src="styles/legend/ww_2.png" /> ww'
            });
var format_LINES_3 = new ol.format.GeoJSON();
var features_LINES_3 = format_LINES_3.readFeatures(json_LINES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LINES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LINES_3.addFeatures(features_LINES_3);
var lyr_LINES_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LINES_3, 
                style: style_LINES_3,
                interactive: true,
                title: '<img src="styles/legend/LINES_3.png" /> LINES'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_AREA2_1.setVisible(true);lyr_ww_2.setVisible(true);lyr_LINES_3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_AREA2_1,lyr_ww_2,lyr_LINES_3];
lyr_AREA2_1.set('fieldAliases', {'AREA': 'AREA', 'PLOT_NU 1': 'PLOT_NU 1', 'PLOT_NUM2': 'PLOT_NUM2', 'OWNER': 'OWNER', 'PHONE': 'PHONE', 'FRONTAGE': 'FRONTAGE', 'TANTHEEM': 'TANTHEEM', });
lyr_ww_2.set('fieldAliases', {'LAYER': 'LAYER', 'GM_TYPE': 'GM_TYPE', 'ELEVATION': 'ELEVATION', 'POINT_SYMB': 'POINT_SYMB', });
lyr_LINES_3.set('fieldAliases', {'LAYER': 'LAYER', 'GM_TYPE': 'GM_TYPE', 'ELEVATION': 'ELEVATION', 'LINE_STYLE': 'LINE_STYLE', 'LINE_COLOR': 'LINE_COLOR', 'LINE_WIDTH': 'LINE_WIDTH', });
lyr_AREA2_1.set('fieldImages', {'AREA': 'TextEdit', 'PLOT_NU 1': 'TextEdit', 'PLOT_NUM2': 'TextEdit', 'OWNER': 'TextEdit', 'PHONE': 'TextEdit', 'FRONTAGE': 'TextEdit', 'TANTHEEM': 'TextEdit', });
lyr_ww_2.set('fieldImages', {'LAYER': '', 'GM_TYPE': '', 'ELEVATION': '', 'POINT_SYMB': '', });
lyr_LINES_3.set('fieldImages', {'LAYER': 'TextEdit', 'GM_TYPE': 'TextEdit', 'ELEVATION': 'TextEdit', 'LINE_STYLE': 'TextEdit', 'LINE_COLOR': 'TextEdit', 'LINE_WIDTH': 'Range', });
lyr_AREA2_1.set('fieldLabels', {'AREA': 'header label', 'PLOT_NU 1': 'header label', 'PLOT_NUM2': 'header label', 'OWNER': 'header label', 'PHONE': 'header label', 'FRONTAGE': 'header label', 'TANTHEEM': 'header label', });
lyr_ww_2.set('fieldLabels', {'LAYER': 'no label', 'GM_TYPE': 'no label', 'ELEVATION': 'no label', 'POINT_SYMB': 'no label', });
lyr_LINES_3.set('fieldLabels', {'LAYER': 'no label', 'GM_TYPE': 'no label', 'ELEVATION': 'no label', 'LINE_STYLE': 'no label', 'LINE_COLOR': 'no label', 'LINE_WIDTH': 'no label', });
lyr_LINES_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});