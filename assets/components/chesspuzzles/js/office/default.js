Ext.onReady(function () {
    ChessPuzzles.config.connector_url = OfficeConfig.actionUrl;

    var grid = new ChessPuzzles.panel.Home();
    grid.render('office-chesspuzzles-wrapper');

    var preloader = document.getElementById('office-preloader');
    if (preloader) {
        preloader.parentNode.removeChild(preloader);
    }
});