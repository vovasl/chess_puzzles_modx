<?php

class ChessPuzzlesTestRemoveProcessor extends modObjectProcessor
{
    public $objectType = 'ChessPuzzlesTest';
    public $classKey = 'ChessPuzzlesTest';
    public $languageTopics = array('chesspuzzles');
    //public $permission = 'remove';


    /**
     * @return array|string
     */
    public function process()
    {
        if (!$this->checkPermissions()) {
            return $this->failure($this->modx->lexicon('access_denied'));
        }

        $ids = $this->modx->fromJSON($this->getProperty('ids'));
        if (empty($ids)) {
            return $this->failure($this->modx->lexicon('chesspuzzles_item_err_ns'));
        }

        foreach ($ids as $id) {
            /** @var ChessPuzzlesTest $object */
            if (!$object = $this->modx->getObject($this->classKey, $id)) {
                return $this->failure($this->modx->lexicon('chesspuzzles_item_err_nf'));
            }

            $object->remove();
        }

        return $this->success();
    }

}

return 'ChessPuzzlesTestRemoveProcessor';