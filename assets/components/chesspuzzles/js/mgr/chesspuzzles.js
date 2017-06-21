var ChessPuzzles = function (config) {
    config = config || {};
    ChessPuzzles.superclass.constructor.call(this, config);
};
Ext.extend(ChessPuzzles, Ext.Component, {
    page: {}, window: {}, grid: {}, tree: {}, panel: {}, combo: {}, config: {}, view: {}, utils: {}
});
Ext.reg('chesspuzzles', ChessPuzzles);

ChessPuzzles = new ChessPuzzles();