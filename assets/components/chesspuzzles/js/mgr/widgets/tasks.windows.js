ChessPuzzles.window.CreateTask = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'chesspuzzles-task-window-create';
    }
    Ext.applyIf(config, {
        title: _('chesspuzzles_task_create'),
        width: 550,
        autoHeight: true,
        url: ChessPuzzles.config.connector_url,
        action: 'mgr/task/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    ChessPuzzles.window.CreateTask.superclass.constructor.call(this, config);
};
Ext.extend(ChessPuzzles.window.CreateTask, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('chesspuzzles_task_name'),
            name: 'title',
            id: config.id + '-title',
            anchor: '99%',
            allowBlank: false
        }, {
            xtype: 'textarea',
            fieldLabel: _('chesspuzzles_task_description'),
            name: 'description',
            id: config.id + '-description',
            height: 150,
            anchor: '99%'
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('chesspuzzles-task-window-create', ChessPuzzles.window.CreateTask);


ChessPuzzles.window.UpdateTask = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'chesspuzzles-task-window-update';
    }
    Ext.applyIf(config, {
        title: _('chesspuzzles_task_update'),
        width: 550,
        autoHeight: true,
        url: ChessPuzzles.config.connector_url,
        action: 'mgr/task/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    ChessPuzzles.window.UpdateTask.superclass.constructor.call(this, config);
};
Ext.extend(ChessPuzzles.window.UpdateTask, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('chesspuzzles_task_name'),
            name: 'title',
            id: config.id + '-title',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textarea',
            fieldLabel: _('chesspuzzles_task_description'),
            name: 'description',
            id: config.id + '-description',
            anchor: '99%',
            height: 150,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('chesspuzzles-task-window-update', ChessPuzzles.window.UpdateTask);