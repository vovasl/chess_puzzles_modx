ChessPuzzles.panel.Home = function (config) {
    config = config || {};
    Ext.apply(config, {
        baseCls: 'modx-formpanel',
        layout: 'anchor',
        /*
         stateful: true,
         stateId: 'chesspuzzles-panel-home',
         stateEvents: ['tabchange'],
         getState:function() {return {activeTab:this.items.indexOf(this.getActiveTab())};},
         */
        hideMode: 'offsets',
        items: [{
            xtype: 'modx-tabs',
            defaults: {border: false, autoHeight: true},
            border: false,
            hideMode: 'offsets',
            items: [{
                title: _('chesspuzzles_items'),
                layout: 'anchor',
                items: [{
                    html: _('chesspuzzles_intro_msg'),
                    cls: 'panel-desc',
                }, {
                    xtype: 'chesspuzzles-grid-items',
                    cls: 'main-wrapper',
                }]
            }]
        }]
    });
    ChessPuzzles.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(ChessPuzzles.panel.Home, MODx.Panel);
Ext.reg('chesspuzzles-panel-home', ChessPuzzles.panel.Home);
