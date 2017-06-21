ChessPuzzles.window.CreateTest = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'chesspuzzles-test-window-create';
    }
    Ext.applyIf(config, {
        title: _('chesspuzzles_test_create'),
        width: 550,
        autoHeight: true,
        url: ChessPuzzles.config.connector_url,
        action: 'mgr/test/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    ChessPuzzles.window.CreateTest.superclass.constructor.call(this, config);
};
Ext.extend(ChessPuzzles.window.CreateTest, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('chesspuzzles_test_name'),
            name: 'title',
            id: config.id + '-title',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textarea',
            fieldLabel: _('chesspuzzles_test_description'),
            name: 'description',
            id: config.id + '-description',
            height: 150,
            anchor: '99%'
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('chesspuzzles_test_active'),
            name: 'active',
            id: config.id + '-active',
            checked: true,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('chesspuzzles-test-window-create', ChessPuzzles.window.CreateTest);


ChessPuzzles.window.UpdateTest = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'chesspuzzles-test-window-update';
    }
    Ext.applyIf(config, {
        title: _('chesspuzzles_test_update'),
        width: 550,
        autoHeight: true,
        url: ChessPuzzles.config.connector_url,
        action: 'mgr/test/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    ChessPuzzles.window.UpdateTest.superclass.constructor.call(this, config);
};
Ext.extend(ChessPuzzles.window.UpdateTest, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('chesspuzzles_test_name'),
            name: 'title',
            id: config.id + '-title',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textarea',
            fieldLabel: _('chesspuzzles_test_description'),
            name: 'description',
            id: config.id + '-description',
            anchor: '99%',
            height: 150,
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('chesspuzzles_test_active'),
            name: 'active',
            id: config.id + '-active',
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('chesspuzzles-test-window-update', ChessPuzzles.window.UpdateTest);