<?php

/**
 * The home manager controller for ChessPuzzles.
 *
 */
class ChessPuzzlesHomeManagerController extends modExtraManagerController
{
    /** @var ChessPuzzles $ChessPuzzles */
    public $ChessPuzzles;


    /**
     *
     */
    public function initialize()
    {
        $path = $this->modx->getOption('chesspuzzles_core_path', null,
                $this->modx->getOption('core_path') . 'components/chesspuzzles/') . 'model/chesspuzzles/';
        $this->ChessPuzzles = $this->modx->getService('chesspuzzles', 'ChessPuzzles', $path);
        parent::initialize();
    }


    /**
     * @return array
     */
    public function getLanguageTopics()
    {
        return array('chesspuzzles:default');
    }


    /**
     * @return bool
     */
    public function checkPermissions()
    {
        return true;
    }


    /**
     * @return null|string
     */
    public function getPageTitle()
    {
        return $this->modx->lexicon('chesspuzzles');
    }


    /**
     * @return void
     */
    public function loadCustomCssJs()
    {
        $this->addCss($this->ChessPuzzles->config['cssUrl'] . 'mgr/main.css');
        $this->addCss($this->ChessPuzzles->config['cssUrl'] . 'mgr/bootstrap.buttons.css');
        $this->addJavascript($this->ChessPuzzles->config['jsUrl'] . 'mgr/chesspuzzles.js');
        $this->addJavascript($this->ChessPuzzles->config['jsUrl'] . 'mgr/misc/utils.js');
        $this->addJavascript($this->ChessPuzzles->config['jsUrl'] . 'mgr/misc/combo.js');
        $this->addJavascript($this->ChessPuzzles->config['jsUrl'] . 'mgr/widgets/levels.grid.js');
        $this->addJavascript($this->ChessPuzzles->config['jsUrl'] . 'mgr/widgets/levels.windows.js');
        $this->addJavascript($this->ChessPuzzles->config['jsUrl'] . 'mgr/widgets/tasks.grid.js');
        $this->addJavascript($this->ChessPuzzles->config['jsUrl'] . 'mgr/widgets/tasks.windows.js');
        $this->addJavascript($this->ChessPuzzles->config['jsUrl'] . 'mgr/widgets/tests.grid.js');
        $this->addJavascript($this->ChessPuzzles->config['jsUrl'] . 'mgr/widgets/tests.windows.js');
        $this->addJavascript($this->ChessPuzzles->config['jsUrl'] . 'mgr/widgets/home.panel.js');
        $this->addJavascript($this->ChessPuzzles->config['jsUrl'] . 'mgr/sections/home.js');

        $this->addHtml('<script type="text/javascript">
        ChessPuzzles.config = ' . json_encode($this->ChessPuzzles->config) . ';
        ChessPuzzles.config.connector_url = "' . $this->ChessPuzzles->config['connectorUrl'] . '";
        Ext.onReady(function() {
            MODx.load({ xtype: "chesspuzzles-page-home"});
        });
        </script>
        ');
    }


    /**
     * @return string
     */
    public function getTemplateFile()
    {
        return $this->ChessPuzzles->config['templatesPath'] . 'home.tpl';
    }
}