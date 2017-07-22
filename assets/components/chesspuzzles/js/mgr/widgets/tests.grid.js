ChessPuzzles.grid.Tests = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'chesspuzzles-grid-tests';
    }
    Ext.applyIf(config, {
        url: ChessPuzzles.config.connector_url,
        fields: this.getFields(config),
        columns: this.getColumns(config),
        tbar: this.getTopBar(config),
        sm: new Ext.grid.CheckboxSelectionModel(),
        baseParams: {
            action: 'mgr/test/getlist',
            sort: 'id',
            dir: 'asc'
        },
        listeners: {
            rowDblClick: function (grid, rowIndex, e) {
                var row = grid.store.getAt(rowIndex);
                this.updateTest(grid, e, row);
            }
        },
        viewConfig: {
            forceFit: true,
            enableRowBody: true,
            autoFill: true,
            showPreview: true,
            scrollOffset: 0,
            getRowClass: function (rec) {
                return !rec.data.active
                    ? 'chesspuzzles-grid-row-disabled'
                    : '';
            }
        },
        paging: true,
        remoteSort: true,
        autoHeight: true,
    });
    ChessPuzzles.grid.Tests.superclass.constructor.call(this, config);

    // Clear selection on grid refresh
    this.store.on('load', function () {
        if (this._getSelectedIds().length) {
            this.getSelectionModel().clearSelections();
        }
    }, this);
};
Ext.extend(ChessPuzzles.grid.Tests, MODx.grid.Grid, {
    windows: {},

    getMenu: function (grid, rowIndex) {
        var ids = this._getSelectedIds();

        var row = grid.getStore().getAt(rowIndex);
        var menu = ChessPuzzles.utils.getMenu(row.data['actions'], this, ids);

        this.addContextMenuTest(menu);
    },

    createTest: function (btn, e) {
        var w = MODx.load({
            xtype: 'chesspuzzles-test-window-create',
            id: Ext.id(),
            listeners: {
                success: {
                    fn: function () {
                        this.refresh();
                    }, scope: this
                }
            }
        });
        w.reset();
        w.setValues({active: true});
        w.show(e.target);
    },

    updateTest: function (btn, e, row) {
        if (typeof(row) != 'undefined') {
            this.menu.record = row.data;
        }
        else if (!this.menu.record) {
            return false;
        }
        var id = this.menu.record.id;

        MODx.Ajax.request({
            url: this.config.url,
            params: {
                action: 'mgr/test/get',
                id: id
            },
            listeners: {
                success: {
                    fn: function (r) {
                        var w = MODx.load({
                            xtype: 'chesspuzzles-test-window-update',
                            id: Ext.id(),
                            record: r,
                            listeners: {
                                success: {
                                    fn: function () {
                                        this.refresh();
                                    }, scope: this
                                }
                            }
                        });
                        w.reset();
                        w.setValues(r.object);
                        w.show(e.target);
                    }, scope: this
                }
            }
        });
    },

    removeTest: function () {
        var ids = this._getSelectedIds();
        if (!ids.length) {
            return false;
        }
        MODx.msg.confirm({
            title: ids.length > 1
                ? _('chesspuzzles_tests_remove')
                : _('chesspuzzles_test_remove'),
            text: ids.length > 1
                ? _('chesspuzzles_tests_remove_confirm')
                : _('chesspuzzles_test_remove_confirm'),
            url: this.config.url,
            params: {
                action: 'mgr/test/remove',
                ids: Ext.util.JSON.encode(ids),
            },
            listeners: {
                success: {
                    fn: function () {
                        this.refresh();
                    }, scope: this
                }
            }
        });
        return true;
    },

    disableTest: function () {
        var ids = this._getSelectedIds();
        if (!ids.length) {
            return false;
        }
        MODx.Ajax.request({
            url: this.config.url,
            params: {
                action: 'mgr/test/disable',
                ids: Ext.util.JSON.encode(ids),
            },
            listeners: {
                success: {
                    fn: function () {
                        this.refresh();
                    }, scope: this
                }
            }
        })
    },

    enableTest: function () {
        var ids = this._getSelectedIds();
        if (!ids.length) {
            return false;
        }
        MODx.Ajax.request({
            url: this.config.url,
            params: {
                action: 'mgr/test/enable',
                ids: Ext.util.JSON.encode(ids),
            },
            listeners: {
                success: {
                    fn: function () {
                        this.refresh();
                    }, scope: this
                }
            }
        })
    },

    getFields: function () {
        return ['id', 'title', 'description', 'ball_succ', 'ball_err', 'position_start', 'result', 'active', 'level_id', 'levelname', 'lesson_id', 'actions'];
    },

    getColumns: function () {
        return [{
            header: _('chesspuzzles_test_id'),
            dataIndex: 'id',
            sortable: true,
            width: 50,
        },{
            header: _('chesspuzzles_test_name'),
            dataIndex: 'title',
            sortable: true,
            width: 250,
        }, {
            header: _('chesspuzzles_test_position_start'),
            dataIndex: 'position_start',
            sortable: false,
            width: 200,
        }
        , {
            header: _('chesspuzzles_test_ball_succ'),
            dataIndex: 'ball_succ',
            sortable: true,
            width: 145,
        }, {
            header: _('chesspuzzles_test_ball_err'),
            dataIndex: 'ball_err',
            sortable: true,
            width: 125,
        }
        , {
            header: _('chesspuzzles_test_result'),
            dataIndex: 'result',
            sortable: false,
            width: 150,
        }, {
            header: _('chesspuzzles_test_level_id'),
            dataIndex: 'level_id',
            renderer: ChessPuzzles.utils.renderLevel,
            sortable: true,
            width: 100,
        }, {
            header: _('chesspuzzles_test_active'),
            dataIndex: 'active',
            renderer: ChessPuzzles.utils.renderBoolean,
            sortable: true,
            width: 90,
        }, {
            header: _('chesspuzzles_grid_actions'),
            dataIndex: 'actions',
            renderer: ChessPuzzles.utils.renderActions,
            sortable: false,
            width: 100,
            id: 'actions'
        }];
    },

    getTopBar: function () {
        return [{
            text: '<i class="icon icon-plus"></i>&nbsp;' + _('chesspuzzles_test_create'),
            handler: this.createTest,
            scope: this
        }, '->', {
            xtype: 'chesspuzzles-field-search',
            width: 250,
            listeners: {
                search: {
                    fn: function (field) {
                        this._doSearch(field);
                    }, scope: this
                },
                clear: {
                    fn: function (field) {
                        field.setValue('');
                        this._clearSearch();
                    }, scope: this
                },
            }
        }];
    },

    onClick: function (e) {
        var elem = e.getTarget();
        if (elem.nodeName == 'BUTTON') {
            var row = this.getSelectionModel().getSelected();
            if (typeof(row) != 'undefined') {
                var action = elem.getAttribute('action');
                if (action == 'showMenu') {
                    var ri = this.getStore().find('id', row.id);
                    return this._showMenu(this, ri, e);
                }
                else if (typeof this[action] === 'function') {
                    this.menu.record = row.data;
                    return this[action](this, e);
                }
            }
        }
        return this.processEvent('click', e);
    },

    _getSelectedIds: function () {
        var ids = [];
        var selected = this.getSelectionModel().getSelections();

        for (var i in selected) {
            if (!selected.hasOwnProperty(i)) {
                continue;
            }
            ids.push(selected[i]['id']);
        }

        return ids;
    },

    _doSearch: function (tf) {
        this.getStore().baseParams.query = tf.getValue();
        this.getBottomToolbar().changePage(1);
    },

    _clearSearch: function () {
        this.getStore().baseParams.query = '';
        this.getBottomToolbar().changePage(1);
    },

});
Ext.reg('chesspuzzles-grid-tests', ChessPuzzles.grid.Tests);