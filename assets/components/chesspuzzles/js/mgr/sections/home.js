ChessPuzzles.page.Home = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        components: [{
            xtype: 'chesspuzzles-panel-home',
            renderTo: 'chesspuzzles-panel-home-div'
        }]
    });
    ChessPuzzles.page.Home.superclass.constructor.call(this, config);
};
Ext.extend(ChessPuzzles.page.Home, MODx.Component);
Ext.reg('chesspuzzles-page-home', ChessPuzzles.page.Home);