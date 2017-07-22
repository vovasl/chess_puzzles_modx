ChessPuzzles.combo.Search = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        xtype: 'twintrigger',
        ctCls: 'x-field-search',
        allowBlank: true,
        msgTarget: 'under',
        emptyText: _('search'),
        name: 'query',
        triggerAction: 'all',
        clearBtnCls: 'x-field-search-clear',
        searchBtnCls: 'x-field-search-go',
        onTrigger1Click: this._triggerSearch,
        onTrigger2Click: this._triggerClear,
    });
    ChessPuzzles.combo.Search.superclass.constructor.call(this, config);
    this.on('render', function () {
        this.getEl().addKeyListener(Ext.EventObject.ENTER, function () {
            this._triggerSearch();
        }, this);
    });
    this.addEvents('clear', 'search');
};
Ext.extend(ChessPuzzles.combo.Search, Ext.form.TwinTriggerField, {

    initComponent: function () {
        Ext.form.TwinTriggerField.superclass.initComponent.call(this);
        this.triggerConfig = {
            tag: 'span',
            cls: 'x-field-search-btns',
            cn: [
                {tag: 'div', cls: 'x-form-trigger ' + this.searchBtnCls},
                {tag: 'div', cls: 'x-form-trigger ' + this.clearBtnCls}
            ]
        };
    },

    _triggerSearch: function () {
        this.fireEvent('search', this);
    },

    _triggerClear: function () {
        this.fireEvent('clear', this);
    },

});
Ext.reg('chesspuzzles-combo-search', ChessPuzzles.combo.Search);
Ext.reg('chesspuzzles-field-search', ChessPuzzles.combo.Search);


ChessPuzzles.combo.Level = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        name: 'level',
        hiddenName: config.name || 'level',
        displayField: 'levelname',
        valueField: 'id',
        fields: ['id', 'levelname'],
        pageSize: 20,
        hideMode: 'offsets',
        emptyText: _('chesspuzzles_level_select_empty_text'),
        url: ChessPuzzles.config['connector_url'],
        baseParams: {
            action: 'mgr/level/getlist',
            sort: 'id',
            dir: 'asc'
        }
    });
    ChessPuzzles.combo.Level.superclass.constructor.call(this, config);
};
Ext.extend(ChessPuzzles.combo.Level, MODx.combo.ComboBox);
Ext.reg('chesspuzzles-combo-level', ChessPuzzles.combo.Level);