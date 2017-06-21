<?php
if (file_exists(dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php')) {
    /** @noinspection PhpIncludeInspection */
    require_once dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php';
}
else {
    require_once dirname(dirname(dirname(dirname(dirname(__FILE__))))) . '/config.core.php';
}
/** @noinspection PhpIncludeInspection */
require_once MODX_CORE_PATH . 'config/' . MODX_CONFIG_KEY . '.inc.php';
/** @noinspection PhpIncludeInspection */
require_once MODX_CONNECTORS_PATH . 'index.php';
/** @var ChessPuzzles $ChessPuzzles */
$ChessPuzzles = $modx->getService('chesspuzzles', 'ChessPuzzles', $modx->getOption('chesspuzzles_core_path', null,
        $modx->getOption('core_path') . 'components/chesspuzzles/') . 'model/chesspuzzles/'
);
$modx->lexicon->load('chesspuzzles:default');

// handle request
$corePath = $modx->getOption('chesspuzzles_core_path', null, $modx->getOption('core_path') . 'components/chesspuzzles/');
$path = $modx->getOption('processorsPath', $ChessPuzzles->config, $corePath . 'processors/');
$modx->getRequest();

/** @var modConnectorRequest $request */
$request = $modx->request;
$request->handleRequest(array(
    'processors_path' => $path,
    'location' => '',
));