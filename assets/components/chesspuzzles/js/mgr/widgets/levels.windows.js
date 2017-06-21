ChessPuzzles.window.CreateLevel = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'chesspuzzles-level-window-create';
    }
    Ext.applyIf(config, {
        title: _('chesspuzzles_level_create'),
        width: 550,
        autoHeight: true,
        url: ChessPuzzles.config.connector_url,
        action: 'mgr/level/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    ChessPuzzles.window.CreateLevel.superclass.constructor.call(this, config);
};
Ext.extend(ChessPuzzles.window.CreateLevel, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('chesspuzzles_level_name'),
            name: 'title',
            id: config.id + '-title',
            anchor: '99%',
            allowBlank: false
        }, {
            xtype: 'textarea',
            fieldLabel: _('chesspuzzles_level_description'),
            name: 'description',
            id: config.id + '-description',
            height: 150,
            anchor: '99%'
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('chesspuzzles-level-window-create', ChessPuzzles.window.CreateLevel);


ChessPuzzles.window.UpdateLevel = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'chesspuzzles-level-window-update';
    }
    Ext.applyIf(config, {
        title: _('chesspuzzles_level_update'),
        width: 550,
        autoHeight: true,
        url: ChessPuzzles.config.connector_url,
        action: 'mgr/level/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    ChessPuzzles.window.UpdateLevel.superclass.constructor.call(this, config);
};
Ext.extend(ChessPuzzles.window.UpdateLevel, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('chesspuzzles_level_name'),
            name: 'title',
            id: config.id + '-title',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textarea',
            fieldLabel: _('chesspuzzles_level_description'),
            name: 'description',
            id: config.id + '-description',
            anchor: '99%',
            height: 150,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('chesspuzzles-level-window-update', ChessPuzzles.window.UpdateLevel);