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
            html: '<h2>' + _('chesspuzzles') + '</h2>',
            cls: '',
            style: {margin: '15px 0'}
        }, {
            xtype: 'modx-tabs',
            defaults: {border: false, autoHeight: true},
            border: true,
            hideMode: 'offsets',
            items: [{
                title: _('chesspuzzles_levels'),
                layout: 'anchor',
                items: [{
                    html: _('chesspuzzles_intro_msg'),
                    cls: 'panel-desc',
                }, {
                    xtype: 'chesspuzzles-grid-levels',
                    cls: 'main-wrapper',
                }]
            }, {
                title: _('chesspuzzles_tasks'),
                layout: 'anchor',
                items: [{
                    html: _('chesspuzzles_intro_msg'),
                    cls: 'panel-desc',
                }, {
                    xtype: 'chesspuzzles-grid-tasks',
                    cls: 'main-wrapper',
                }]
            }, {
                title: _('chesspuzzles_tests'),
                layout: 'anchor',
                items: [{
                    html: _('chesspuzzles_intro_msg'),
                    cls: 'panel-desc',
                }, {
                    xtype: 'chesspuzzles-grid-tests',
                    cls: 'main-wrapper',
                }]
            }]
        }]
    });
    ChessPuzzles.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(ChessPuzzles.panel.Home, MODx.Panel);
Ext.reg('chesspuzzles-panel-home', ChessPuzzles.panel.Home);
