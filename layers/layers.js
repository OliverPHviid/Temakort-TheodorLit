var wms_layers = [];

var format_TemakortHvidovreFrededeomrder_0 = new ol.format.GeoJSON();
var features_TemakortHvidovreFrededeomrder_0 = format_TemakortHvidovreFrededeomrder_0.readFeatures(json_TemakortHvidovreFrededeomrder_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TemakortHvidovreFrededeomrder_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TemakortHvidovreFrededeomrder_0.addFeatures(features_TemakortHvidovreFrededeomrder_0);
var lyr_TemakortHvidovreFrededeomrder_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TemakortHvidovreFrededeomrder_0, 
                style: style_TemakortHvidovreFrededeomrder_0,
                popuplayertitle: 'Temakort Hvidovre — Fredede områder',
                interactive: false,
    title: 'Temakort Hvidovre — Fredede områder<br />\
    <img src="styles/legend/TemakortHvidovreFrededeomrder_0_0.png" /> Damhuså<br />\
    <img src="styles/legend/TemakortHvidovreFrededeomrder_0_1.png" /> Kalvebod Kile<br />\
    <img src="styles/legend/TemakortHvidovreFrededeomrder_0_2.png" /> Rehbæks Eng<br />\
    <img src="styles/legend/TemakortHvidovreFrededeomrder_0_3.png" /> Vestvolden<br />\
    <img src="styles/legend/TemakortHvidovreFrededeomrder_0_4.png" /> Vigerslevparken, Damhussøen, Damhusengen, Krogebjergparken<br />\
    <img src="styles/legend/TemakortHvidovreFrededeomrder_0_5.png" /> <br />' });
var format_TemakortHvidovreKommuneplaner_1 = new ol.format.GeoJSON();
var features_TemakortHvidovreKommuneplaner_1 = format_TemakortHvidovreKommuneplaner_1.readFeatures(json_TemakortHvidovreKommuneplaner_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TemakortHvidovreKommuneplaner_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TemakortHvidovreKommuneplaner_1.addFeatures(features_TemakortHvidovreKommuneplaner_1);
var lyr_TemakortHvidovreKommuneplaner_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TemakortHvidovreKommuneplaner_1, 
                style: style_TemakortHvidovreKommuneplaner_1,
                popuplayertitle: 'Temakort Hvidovre — Kommuneplaner',
                interactive: true,
                title: '<img src="styles/legend/TemakortHvidovreKommuneplaner_1.png" /> Temakort Hvidovre — Kommuneplaner'
            });
var format_TemakortHvidovreLokalplaner_2 = new ol.format.GeoJSON();
var features_TemakortHvidovreLokalplaner_2 = format_TemakortHvidovreLokalplaner_2.readFeatures(json_TemakortHvidovreLokalplaner_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TemakortHvidovreLokalplaner_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TemakortHvidovreLokalplaner_2.addFeatures(features_TemakortHvidovreLokalplaner_2);
var lyr_TemakortHvidovreLokalplaner_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TemakortHvidovreLokalplaner_2, 
                style: style_TemakortHvidovreLokalplaner_2,
                popuplayertitle: 'Temakort Hvidovre — Lokalplaner',
                interactive: true,
    title: 'Temakort Hvidovre — Lokalplaner<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_0.png" /> 1012930<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_1.png" /> 1024399<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_2.png" /> 1053515<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_3.png" /> 1054617<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_4.png" /> 1061002<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_5.png" /> 1061022<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_6.png" /> 1061038<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_7.png" /> 1061103<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_8.png" /> 1061140<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_9.png" /> 1061206<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_10.png" /> 1061209<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_11.png" /> 1061210<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_12.png" /> 1061704<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_13.png" /> 1061715<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_14.png" /> 1061718<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_15.png" /> 1061734<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_16.png" /> 1061739<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_17.png" /> 1061746<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_18.png" /> 1061753<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_19.png" /> 1061756<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_20.png" /> 1061757<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_21.png" /> 1061824<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_22.png" /> 1061828<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_23.png" /> 1061829<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_24.png" /> 1061833<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_25.png" /> 1062026<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_26.png" /> 1062080<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_27.png" /> 1062111<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_28.png" /> 1062117<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_29.png" /> 1062118<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_30.png" /> 1062121<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_31.png" /> 1070479<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_32.png" /> 1071381<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_33.png" /> 1074662<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_34.png" /> 1074664<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_35.png" /> 1074665<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_36.png" /> 1074675<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_37.png" /> 1075214<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_38.png" /> 1075219<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_39.png" /> 1075387<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_40.png" /> 1075393<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_41.png" /> 1075550<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_42.png" /> 1075552<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_43.png" /> 1075553<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_44.png" /> 1075577<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_45.png" /> 1075593<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_46.png" /> 1075598<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_47.png" /> 1075609<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_48.png" /> 1075667<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_49.png" /> 1075669<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_50.png" /> 1075682<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_51.png" /> 1075695<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_52.png" /> 1075708<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_53.png" /> 1075710<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_54.png" /> 1075718<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_55.png" /> 1075749<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_56.png" /> 1075751<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_57.png" /> 1075752<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_58.png" /> 1075779<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_59.png" /> 1075795<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_60.png" /> 1075800<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_61.png" /> 1075801<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_62.png" /> 1075815<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_63.png" /> 1075877<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_64.png" /> 1075891<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_65.png" /> 1075893<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_66.png" /> 1075897<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_67.png" /> 1075900<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_68.png" /> 1075902<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_69.png" /> 1075905<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_70.png" /> 1075906<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_71.png" /> 1075907<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_72.png" /> 1075908<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_73.png" /> 1076003<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_74.png" /> 1076004<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_75.png" /> 1076010<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_76.png" /> 1076019<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_77.png" /> 1076041<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_78.png" /> 1076064<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_79.png" /> 1076086<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_80.png" /> 1076094<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_81.png" /> 1076107<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_82.png" /> 1076114<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_83.png" /> 1076115<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_84.png" /> 1076126<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_85.png" /> 1076129<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_86.png" /> 1076287<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_87.png" /> 1076379<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_88.png" /> 1076865<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_89.png" /> 1076868<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_90.png" /> 1076874<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_91.png" /> 1076892<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_92.png" /> 1076901<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_93.png" /> 1076902<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_94.png" /> 1076905<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_95.png" /> 1076939<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_96.png" /> 1076943<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_97.png" /> 1076961<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_98.png" /> 1076968<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_99.png" /> 1077070<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_100.png" /> 1077082<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_101.png" /> 1077085<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_102.png" /> 1077086<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_103.png" /> 1077558<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_104.png" /> 1077565<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_105.png" /> 1077899<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_106.png" /> 1078061<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_107.png" /> 1078066<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_108.png" /> 1078074<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_109.png" /> 1078075<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_110.png" /> 1078077<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_111.png" /> 1078080<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_112.png" /> 1078184<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_113.png" /> 1078227<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_114.png" /> 1078229<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_115.png" /> 1078231<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_116.png" /> 1078248<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_117.png" /> 1078270<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_118.png" /> 1078272<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_119.png" /> 1078274<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_120.png" /> 1078275<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_121.png" /> 1078279<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_122.png" /> 1078282<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_123.png" /> 1078288<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_124.png" /> 1078289<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_125.png" /> 1078346<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_126.png" /> 1078447<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_127.png" /> 1078464<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_128.png" /> 1078465<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_129.png" /> 1078468<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_130.png" /> 1079122<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_131.png" /> 1079123<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_132.png" /> 1079666<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_133.png" /> 1079671<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_134.png" /> 1081381<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_135.png" /> 1084485<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_136.png" /> 1084491<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_137.png" /> 1084492<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_138.png" /> 1103656<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_139.png" /> 1103890<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_140.png" /> 1104764<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_141.png" /> 1109560<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_142.png" /> 1328884<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_143.png" /> 1359142<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_144.png" /> 1359145<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_145.png" /> 1369547<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_146.png" /> 1374739<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_147.png" /> 1792902<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_148.png" /> 1869505<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_149.png" /> 2136388<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_150.png" /> 2186492<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_151.png" /> 2269185<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_152.png" /> 2641209<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_153.png" /> 2702963<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_154.png" /> 2702964<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_155.png" /> 2702965<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_156.png" /> 2702968<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_157.png" /> 2702969<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_158.png" /> 2702993<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_159.png" /> 2702994<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_160.png" /> 2969850<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_161.png" /> 2978253<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_162.png" /> 3016098<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_163.png" /> 3016099<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_164.png" /> 3016102<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_165.png" /> 3016103<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_166.png" /> 3016105<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_167.png" /> 3186913<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_168.png" /> 3188617<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_169.png" /> 3188619<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_170.png" /> 3812280<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_171.png" /> 3964626<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_172.png" /> 3964627<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_173.png" /> 3964812<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_174.png" /> 9419556<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_175.png" /> 9431987<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_176.png" /> 9431989<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_177.png" /> 9431990<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_178.png" /> 9431991<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_179.png" /> 9431992<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_180.png" /> 9431993<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_181.png" /> 9431994<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_182.png" /> 9690454<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_183.png" /> 9717080<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_184.png" /> 9731022<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_185.png" /> 9732835<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_186.png" /> 9732862<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_187.png" /> 9753254<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_188.png" /> 10353005<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_189.png" /> 10456675<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_190.png" /> 10478656<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_191.png" /> 10840028<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_192.png" /> 10900534<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_193.png" /> 10906517<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_194.png" /> 10985743<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_195.png" /> 11021467<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_196.png" /> 11126774<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_197.png" /> 11159816<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_198.png" /> 11176926<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_199.png" /> 11185105<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_200.png" /> 11198619<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_201.png" /> 11228193<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_202.png" /> 11240317<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_203.png" /> 11252419<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_204.png" /> 11307736<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_205.png" /> 11307768<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_206.png" /> 11317442<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_207.png" /> 11347122<br />\
    <img src="styles/legend/TemakortHvidovreLokalplaner_2_208.png" /> <br />' });
var format_TemakortHvidovreLokalplanerforslag_3 = new ol.format.GeoJSON();
var features_TemakortHvidovreLokalplanerforslag_3 = format_TemakortHvidovreLokalplanerforslag_3.readFeatures(json_TemakortHvidovreLokalplanerforslag_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TemakortHvidovreLokalplanerforslag_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TemakortHvidovreLokalplanerforslag_3.addFeatures(features_TemakortHvidovreLokalplanerforslag_3);
var lyr_TemakortHvidovreLokalplanerforslag_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TemakortHvidovreLokalplanerforslag_3, 
                style: style_TemakortHvidovreLokalplanerforslag_3,
                popuplayertitle: 'Temakort Hvidovre — Lokalplaner forslag',
                interactive: true,
    title: 'Temakort Hvidovre — Lokalplaner forslag<br />\
    <img src="styles/legend/TemakortHvidovreLokalplanerforslag_3_0.png" /> 11367622<br />\
    <img src="styles/legend/TemakortHvidovreLokalplanerforslag_3_1.png" /> 11461117<br />\
    <img src="styles/legend/TemakortHvidovreLokalplanerforslag_3_2.png" /> 11484598<br />\
    <img src="styles/legend/TemakortHvidovreLokalplanerforslag_3_3.png" /> <br />' });
var format_TemakortHvidovreStrandbeskyttelseHvidovre_4 = new ol.format.GeoJSON();
var features_TemakortHvidovreStrandbeskyttelseHvidovre_4 = format_TemakortHvidovreStrandbeskyttelseHvidovre_4.readFeatures(json_TemakortHvidovreStrandbeskyttelseHvidovre_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TemakortHvidovreStrandbeskyttelseHvidovre_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TemakortHvidovreStrandbeskyttelseHvidovre_4.addFeatures(features_TemakortHvidovreStrandbeskyttelseHvidovre_4);
var lyr_TemakortHvidovreStrandbeskyttelseHvidovre_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TemakortHvidovreStrandbeskyttelseHvidovre_4, 
                style: style_TemakortHvidovreStrandbeskyttelseHvidovre_4,
                popuplayertitle: 'Temakort Hvidovre — Strandbeskyttelse Hvidovre',
                interactive: false,
                title: '<img src="styles/legend/TemakortHvidovreStrandbeskyttelseHvidovre_4.png" /> Temakort Hvidovre — Strandbeskyttelse Hvidovre'
            });
var format_TemakortHvidovreBusstoppesteder_5 = new ol.format.GeoJSON();
var features_TemakortHvidovreBusstoppesteder_5 = format_TemakortHvidovreBusstoppesteder_5.readFeatures(json_TemakortHvidovreBusstoppesteder_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TemakortHvidovreBusstoppesteder_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TemakortHvidovreBusstoppesteder_5.addFeatures(features_TemakortHvidovreBusstoppesteder_5);
var lyr_TemakortHvidovreBusstoppesteder_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TemakortHvidovreBusstoppesteder_5, 
                style: style_TemakortHvidovreBusstoppesteder_5,
                popuplayertitle: 'Temakort Hvidovre — Busstoppesteder',
                interactive: true,
                title: '<img src="styles/legend/TemakortHvidovreBusstoppesteder_5.png" /> Temakort Hvidovre — Busstoppesteder'
            });
var format_TemakortHvidovreBrnehaver_6 = new ol.format.GeoJSON();
var features_TemakortHvidovreBrnehaver_6 = format_TemakortHvidovreBrnehaver_6.readFeatures(json_TemakortHvidovreBrnehaver_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TemakortHvidovreBrnehaver_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TemakortHvidovreBrnehaver_6.addFeatures(features_TemakortHvidovreBrnehaver_6);
var lyr_TemakortHvidovreBrnehaver_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TemakortHvidovreBrnehaver_6, 
                style: style_TemakortHvidovreBrnehaver_6,
                popuplayertitle: 'Temakort Hvidovre — Børnehaver',
                interactive: true,
                title: '<img src="styles/legend/TemakortHvidovreBrnehaver_6.png" /> Temakort Hvidovre — Børnehaver'
            });
var format_TemakortHvidovreEUDHvidovre_7 = new ol.format.GeoJSON();
var features_TemakortHvidovreEUDHvidovre_7 = format_TemakortHvidovreEUDHvidovre_7.readFeatures(json_TemakortHvidovreEUDHvidovre_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TemakortHvidovreEUDHvidovre_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TemakortHvidovreEUDHvidovre_7.addFeatures(features_TemakortHvidovreEUDHvidovre_7);
var lyr_TemakortHvidovreEUDHvidovre_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TemakortHvidovreEUDHvidovre_7, 
                style: style_TemakortHvidovreEUDHvidovre_7,
                popuplayertitle: 'Temakort Hvidovre — EUD Hvidovre',
                interactive: true,
                title: '<img src="styles/legend/TemakortHvidovreEUDHvidovre_7.png" /> Temakort Hvidovre — EUD Hvidovre'
            });
var format_TemakortHvidovreFodboldbaner_8 = new ol.format.GeoJSON();
var features_TemakortHvidovreFodboldbaner_8 = format_TemakortHvidovreFodboldbaner_8.readFeatures(json_TemakortHvidovreFodboldbaner_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TemakortHvidovreFodboldbaner_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TemakortHvidovreFodboldbaner_8.addFeatures(features_TemakortHvidovreFodboldbaner_8);
var lyr_TemakortHvidovreFodboldbaner_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TemakortHvidovreFodboldbaner_8, 
                style: style_TemakortHvidovreFodboldbaner_8,
                popuplayertitle: 'Temakort Hvidovre — Fodboldbaner',
                interactive: true,
                title: '<img src="styles/legend/TemakortHvidovreFodboldbaner_8.png" /> Temakort Hvidovre — Fodboldbaner'
            });
var format_TemakortHvidovreFolkeskoler_9 = new ol.format.GeoJSON();
var features_TemakortHvidovreFolkeskoler_9 = format_TemakortHvidovreFolkeskoler_9.readFeatures(json_TemakortHvidovreFolkeskoler_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TemakortHvidovreFolkeskoler_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TemakortHvidovreFolkeskoler_9.addFeatures(features_TemakortHvidovreFolkeskoler_9);
var lyr_TemakortHvidovreFolkeskoler_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TemakortHvidovreFolkeskoler_9, 
                style: style_TemakortHvidovreFolkeskoler_9,
                popuplayertitle: 'Temakort Hvidovre — Folkeskoler',
                interactive: true,
                title: '<img src="styles/legend/TemakortHvidovreFolkeskoler_9.png" /> Temakort Hvidovre — Folkeskoler'
            });
var format_TemakortHvidovreGymnasier_10 = new ol.format.GeoJSON();
var features_TemakortHvidovreGymnasier_10 = format_TemakortHvidovreGymnasier_10.readFeatures(json_TemakortHvidovreGymnasier_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TemakortHvidovreGymnasier_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TemakortHvidovreGymnasier_10.addFeatures(features_TemakortHvidovreGymnasier_10);
var lyr_TemakortHvidovreGymnasier_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TemakortHvidovreGymnasier_10, 
                style: style_TemakortHvidovreGymnasier_10,
                popuplayertitle: 'Temakort Hvidovre — Gymnasier',
                interactive: true,
                title: '<img src="styles/legend/TemakortHvidovreGymnasier_10.png" /> Temakort Hvidovre — Gymnasier'
            });
var format_TemakortHvidovreHavne_11 = new ol.format.GeoJSON();
var features_TemakortHvidovreHavne_11 = format_TemakortHvidovreHavne_11.readFeatures(json_TemakortHvidovreHavne_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TemakortHvidovreHavne_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TemakortHvidovreHavne_11.addFeatures(features_TemakortHvidovreHavne_11);
var lyr_TemakortHvidovreHavne_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TemakortHvidovreHavne_11, 
                style: style_TemakortHvidovreHavne_11,
                popuplayertitle: 'Temakort Hvidovre — Havne',
                interactive: true,
                title: '<img src="styles/legend/TemakortHvidovreHavne_11.png" /> Temakort Hvidovre — Havne'
            });
var format_TemakortHvidovreHospital_12 = new ol.format.GeoJSON();
var features_TemakortHvidovreHospital_12 = format_TemakortHvidovreHospital_12.readFeatures(json_TemakortHvidovreHospital_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TemakortHvidovreHospital_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TemakortHvidovreHospital_12.addFeatures(features_TemakortHvidovreHospital_12);
var lyr_TemakortHvidovreHospital_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TemakortHvidovreHospital_12, 
                style: style_TemakortHvidovreHospital_12,
                popuplayertitle: 'Temakort Hvidovre — Hospital',
                interactive: true,
                title: '<img src="styles/legend/TemakortHvidovreHospital_12.png" /> Temakort Hvidovre — Hospital'
            });
var format_TemakortHvidovreLger_13 = new ol.format.GeoJSON();
var features_TemakortHvidovreLger_13 = format_TemakortHvidovreLger_13.readFeatures(json_TemakortHvidovreLger_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TemakortHvidovreLger_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TemakortHvidovreLger_13.addFeatures(features_TemakortHvidovreLger_13);
var lyr_TemakortHvidovreLger_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TemakortHvidovreLger_13, 
                style: style_TemakortHvidovreLger_13,
                popuplayertitle: 'Temakort Hvidovre — Læger',
                interactive: true,
                title: '<img src="styles/legend/TemakortHvidovreLger_13.png" /> Temakort Hvidovre — Læger'
            });
var format_TemakortHvidovreRebkSpark_14 = new ol.format.GeoJSON();
var features_TemakortHvidovreRebkSpark_14 = format_TemakortHvidovreRebkSpark_14.readFeatures(json_TemakortHvidovreRebkSpark_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TemakortHvidovreRebkSpark_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TemakortHvidovreRebkSpark_14.addFeatures(features_TemakortHvidovreRebkSpark_14);
var lyr_TemakortHvidovreRebkSpark_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TemakortHvidovreRebkSpark_14, 
                style: style_TemakortHvidovreRebkSpark_14,
                popuplayertitle: 'Temakort Hvidovre — Rebæk Søpark',
                interactive: true,
                title: '<img src="styles/legend/TemakortHvidovreRebkSpark_14.png" /> Temakort Hvidovre — Rebæk Søpark'
            });
var format_TemakortHvidovreRdhus_15 = new ol.format.GeoJSON();
var features_TemakortHvidovreRdhus_15 = format_TemakortHvidovreRdhus_15.readFeatures(json_TemakortHvidovreRdhus_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TemakortHvidovreRdhus_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TemakortHvidovreRdhus_15.addFeatures(features_TemakortHvidovreRdhus_15);
var lyr_TemakortHvidovreRdhus_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TemakortHvidovreRdhus_15, 
                style: style_TemakortHvidovreRdhus_15,
                popuplayertitle: 'Temakort Hvidovre — Rådhus',
                interactive: true,
                title: '<img src="styles/legend/TemakortHvidovreRdhus_15.png" /> Temakort Hvidovre — Rådhus'
            });
var format_TemakortHvidovreSportsfaciliteter_16 = new ol.format.GeoJSON();
var features_TemakortHvidovreSportsfaciliteter_16 = format_TemakortHvidovreSportsfaciliteter_16.readFeatures(json_TemakortHvidovreSportsfaciliteter_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TemakortHvidovreSportsfaciliteter_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TemakortHvidovreSportsfaciliteter_16.addFeatures(features_TemakortHvidovreSportsfaciliteter_16);
var lyr_TemakortHvidovreSportsfaciliteter_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TemakortHvidovreSportsfaciliteter_16, 
                style: style_TemakortHvidovreSportsfaciliteter_16,
                popuplayertitle: 'Temakort Hvidovre — Sportsfaciliteter',
                interactive: true,
                title: '<img src="styles/legend/TemakortHvidovreSportsfaciliteter_16.png" /> Temakort Hvidovre — Sportsfaciliteter'
            });
var format_TemakortHvidovreTogstationer_17 = new ol.format.GeoJSON();
var features_TemakortHvidovreTogstationer_17 = format_TemakortHvidovreTogstationer_17.readFeatures(json_TemakortHvidovreTogstationer_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TemakortHvidovreTogstationer_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TemakortHvidovreTogstationer_17.addFeatures(features_TemakortHvidovreTogstationer_17);
var lyr_TemakortHvidovreTogstationer_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TemakortHvidovreTogstationer_17, 
                style: style_TemakortHvidovreTogstationer_17,
                popuplayertitle: 'Temakort Hvidovre — Togstationer',
                interactive: true,
                title: '<img src="styles/legend/TemakortHvidovreTogstationer_17.png" /> Temakort Hvidovre — Togstationer'
            });
var format_TemakortHvidovreValdemarkoter_18 = new ol.format.GeoJSON();
var features_TemakortHvidovreValdemarkoter_18 = format_TemakortHvidovreValdemarkoter_18.readFeatures(json_TemakortHvidovreValdemarkoter_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TemakortHvidovreValdemarkoter_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TemakortHvidovreValdemarkoter_18.addFeatures(features_TemakortHvidovreValdemarkoter_18);
var lyr_TemakortHvidovreValdemarkoter_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TemakortHvidovreValdemarkoter_18, 
                style: style_TemakortHvidovreValdemarkoter_18,
                popuplayertitle: 'Temakort Hvidovre — Valdemarkoter',
                interactive: true,
                title: '<img src="styles/legend/TemakortHvidovreValdemarkoter_18.png" /> Temakort Hvidovre — Valdemarkoter'
            });

lyr_TemakortHvidovreFrededeomrder_0.setVisible(true);lyr_TemakortHvidovreKommuneplaner_1.setVisible(true);lyr_TemakortHvidovreLokalplaner_2.setVisible(true);lyr_TemakortHvidovreLokalplanerforslag_3.setVisible(true);lyr_TemakortHvidovreStrandbeskyttelseHvidovre_4.setVisible(true);lyr_TemakortHvidovreBusstoppesteder_5.setVisible(true);lyr_TemakortHvidovreBrnehaver_6.setVisible(true);lyr_TemakortHvidovreEUDHvidovre_7.setVisible(true);lyr_TemakortHvidovreFodboldbaner_8.setVisible(true);lyr_TemakortHvidovreFolkeskoler_9.setVisible(true);lyr_TemakortHvidovreGymnasier_10.setVisible(true);lyr_TemakortHvidovreHavne_11.setVisible(true);lyr_TemakortHvidovreHospital_12.setVisible(true);lyr_TemakortHvidovreLger_13.setVisible(true);lyr_TemakortHvidovreRebkSpark_14.setVisible(true);lyr_TemakortHvidovreRdhus_15.setVisible(true);lyr_TemakortHvidovreSportsfaciliteter_16.setVisible(true);lyr_TemakortHvidovreTogstationer_17.setVisible(true);lyr_TemakortHvidovreValdemarkoter_18.setVisible(true);
var layersList = [lyr_TemakortHvidovreFrededeomrder_0,lyr_TemakortHvidovreKommuneplaner_1,lyr_TemakortHvidovreLokalplaner_2,lyr_TemakortHvidovreLokalplanerforslag_3,lyr_TemakortHvidovreStrandbeskyttelseHvidovre_4,lyr_TemakortHvidovreBusstoppesteder_5,lyr_TemakortHvidovreBrnehaver_6,lyr_TemakortHvidovreEUDHvidovre_7,lyr_TemakortHvidovreFodboldbaner_8,lyr_TemakortHvidovreFolkeskoler_9,lyr_TemakortHvidovreGymnasier_10,lyr_TemakortHvidovreHavne_11,lyr_TemakortHvidovreHospital_12,lyr_TemakortHvidovreLger_13,lyr_TemakortHvidovreRebkSpark_14,lyr_TemakortHvidovreRdhus_15,lyr_TemakortHvidovreSportsfaciliteter_16,lyr_TemakortHvidovreTogstationer_17,lyr_TemakortHvidovreValdemarkoter_18];
lyr_TemakortHvidovreFrededeomrder_0.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_TemakortHvidovreKommuneplaner_1.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_TemakortHvidovreLokalplaner_2.set('fieldAliases', {'fid': 'fid', 'planid': 'planid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_TemakortHvidovreLokalplanerforslag_3.set('fieldAliases', {'fid': 'fid', 'planid': 'planid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datostart': 'datostart', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_TemakortHvidovreStrandbeskyttelseHvidovre_4.set('fieldAliases', {'fid': 'fid', 'forretningshaendelse': 'forretningshaendelse', 'senesteSagLokalId': 'senesteSagLokalId', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalId': 'id.lokalId', 'paataenktHandling': 'paataenktHandling', 'registreringFra': 'registreringFra', 'virkningFra': 'virkningFra', 'virkningsaktoer': 'virkningsaktoer', 'temaFladeID': 'temaFladeID', 'tematype': 'tematype', 'jordstykkeLokalId': 'jordstykkeLokalId', });
lyr_TemakortHvidovreBusstoppesteder_5.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TemakortHvidovreBrnehaver_6.set('fieldAliases', {'fid': 'fid', 'Børnehave': 'Børnehave', 'Adresse': 'Adresse', 'By': 'By', 'Telefon': 'Telefon', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_TemakortHvidovreEUDHvidovre_7.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_TemakortHvidovreFodboldbaner_8.set('fieldAliases', {'fid': 'fid', 'Fodbold St': 'Fodbold St', 'Adresse': 'Adresse', 'By': 'By', 'Mail': 'Mail', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_TemakortHvidovreFolkeskoler_9.set('fieldAliases', {'fid': 'fid', 'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_TemakortHvidovreGymnasier_10.set('fieldAliases', {'fid': 'fid', 'Gymnasiena': 'Gymnasiena', 'Ungdomsudd': 'Ungdomsudd', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_TemakortHvidovreHavne_11.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TemakortHvidovreHospital_12.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_TemakortHvidovreLger_13.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_TemakortHvidovreRebkSpark_14.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TemakortHvidovreRdhus_15.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_TemakortHvidovreSportsfaciliteter_16.set('fieldAliases', {'fid': 'fid', 'Sport- og': 'Sport- og', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'field_5': 'field_5', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_TemakortHvidovreTogstationer_17.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TemakortHvidovreValdemarkoter_18.set('fieldAliases', {'fid': 'fid', 'Fikspunkt nr': 'Fikspunkt nr', 'Type': 'Type', 'Referencesystemer': 'Referencesystemer', 'Easting': 'Easting', 'Northing': 'Northing', 'Kote': 'Kote', });
lyr_TemakortHvidovreFrededeomrder_0.set('fieldImages', {'fid': 'Hidden', 'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_TemakortHvidovreKommuneplaner_1.set('fieldImages', {'fid': 'Hidden', 'oid': 'Hidden', 'id': 'Hidden', 'planid': 'Hidden', 'objektkode': 'Hidden', 'komnr': 'Range', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Hidden', 'datovedt': 'TextEdit', 'datoaflyst': 'Hidden', 'datoikraft': 'Hidden', 'datoslut': 'Hidden', 'aktuel': 'Hidden', 'datooprt': 'DateTime', 'datoopdt': 'DateTime', 'status': 'Hidden', 'datostart': 'Hidden', 'glkomnr': 'Hidden', 'kommunenavn': 'Hidden', 'glkomnavn': 'Hidden', 'glkomnavn_besk': 'Hidden', });
lyr_TemakortHvidovreLokalplaner_2.set('fieldImages', {'fid': 'Hidden', 'planid': 'TextEdit', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_TemakortHvidovreLokalplanerforslag_3.set('fieldImages', {'fid': 'Hidden', 'planid': 'TextEdit', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datostart': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_TemakortHvidovreStrandbeskyttelseHvidovre_4.set('fieldImages', {'fid': 'Hidden', 'forretningshaendelse': 'TextEdit', 'senesteSagLokalId': 'TextEdit', 'forretningsproces': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalId': 'TextEdit', 'paataenktHandling': 'TextEdit', 'registreringFra': 'DateTime', 'virkningFra': 'DateTime', 'virkningsaktoer': 'TextEdit', 'temaFladeID': 'Range', 'tematype': 'TextEdit', 'jordstykkeLokalId': 'TextEdit', });
lyr_TemakortHvidovreBusstoppesteder_5.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_TemakortHvidovreBrnehaver_6.set('fieldImages', {'fid': 'Hidden', 'Børnehave': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefon': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_TemakortHvidovreEUDHvidovre_7.set('fieldImages', {'fid': 'Hidden', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_TemakortHvidovreFodboldbaner_8.set('fieldImages', {'fid': 'Hidden', 'Fodbold St': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Mail': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_TemakortHvidovreFolkeskoler_9.set('fieldImages', {'fid': 'Hidden', 'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_TemakortHvidovreGymnasier_10.set('fieldImages', {'fid': 'Hidden', 'Gymnasiena': 'TextEdit', 'Ungdomsudd': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_TemakortHvidovreHavne_11.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_TemakortHvidovreHospital_12.set('fieldImages', {'fid': 'Hidden', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_TemakortHvidovreLger_13.set('fieldImages', {'fid': 'Hidden', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_TemakortHvidovreRebkSpark_14.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'Hidden', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_TemakortHvidovreRdhus_15.set('fieldImages', {'fid': 'Hidden', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_TemakortHvidovreSportsfaciliteter_16.set('fieldImages', {'fid': 'Hidden', 'Sport- og': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'field_5': 'Hidden', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_TemakortHvidovreTogstationer_17.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_TemakortHvidovreValdemarkoter_18.set('fieldImages', {'fid': 'Hidden', 'Fikspunkt nr': 'TextEdit', 'Type': 'TextEdit', 'Referencesystemer': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'Kote': 'TextEdit', });
lyr_TemakortHvidovreFrededeomrder_0.set('fieldLabels', {'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_TemakortHvidovreKommuneplaner_1.set('fieldLabels', {'komnr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'doklink': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'datooprt': 'no label', 'datoopdt': 'no label', });
lyr_TemakortHvidovreLokalplaner_2.set('fieldLabels', {'planid': 'inline label - always visible', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', 'anvendelse': 'inline label - always visible', });
lyr_TemakortHvidovreLokalplanerforslag_3.set('fieldLabels', {'planid': 'inline label - always visible', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datostart': 'inline label - always visible', 'doklink': 'inline label - always visible', 'anvendelse': 'inline label - always visible', });
lyr_TemakortHvidovreStrandbeskyttelseHvidovre_4.set('fieldLabels', {'forretningshaendelse': 'no label', 'senesteSagLokalId': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalId': 'no label', 'paataenktHandling': 'no label', 'registreringFra': 'no label', 'virkningFra': 'no label', 'virkningsaktoer': 'no label', 'temaFladeID': 'no label', 'tematype': 'no label', 'jordstykkeLokalId': 'no label', });
lyr_TemakortHvidovreBusstoppesteder_5.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_TemakortHvidovreBrnehaver_6.set('fieldLabels', {'Børnehave': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Telefon': 'inline label - always visible', });
lyr_TemakortHvidovreEUDHvidovre_7.set('fieldLabels', {'Navn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', 'Telefonnum': 'inline label - always visible', });
lyr_TemakortHvidovreFodboldbaner_8.set('fieldLabels', {'Fodbold St': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Mail': 'inline label - always visible', });
lyr_TemakortHvidovreFolkeskoler_9.set('fieldLabels', {'Skolenavn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_TemakortHvidovreGymnasier_10.set('fieldLabels', {'Gymnasiena': 'inline label - always visible', 'Ungdomsudd': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_TemakortHvidovreHavne_11.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_TemakortHvidovreHospital_12.set('fieldLabels', {'Navn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', 'Telefonnum': 'inline label - always visible', });
lyr_TemakortHvidovreLger_13.set('fieldLabels', {'Navn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', 'Telefonnum': 'inline label - always visible', });
lyr_TemakortHvidovreRebkSpark_14.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'inline label - always visible', 'begin': 'no label', 'end': 'no label', });
lyr_TemakortHvidovreRdhus_15.set('fieldLabels', {'Navn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', 'Telefonnum': 'inline label - always visible', });
lyr_TemakortHvidovreSportsfaciliteter_16.set('fieldLabels', {'Sport- og': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_TemakortHvidovreTogstationer_17.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_TemakortHvidovreValdemarkoter_18.set('fieldLabels', {'Fikspunkt nr': 'inline label - always visible', 'Type': 'inline label - always visible', 'Referencesystemer': 'inline label - always visible', 'Easting': 'inline label - always visible', 'Northing': 'inline label - always visible', 'Kote': 'inline label - always visible', });
lyr_TemakortHvidovreValdemarkoter_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});