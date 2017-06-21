<?php

class ChessPuzzlesLevelCreateProcessor extends modObjectCreateProcessor
{
    public $objectType = 'ChessPuzzlesLevel';
    public $classKey = 'ChessPuzzlesLevel';
    public $languageTopics = array('chesspuzzles');
    //public $permission = 'create';


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $name = trim($this->getProperty('title'));
        if (empty($name)) {
            $this->modx->error->addField('name', $this->modx->lexicon('chesspuzzles_item_err_name'));
        } elseif ($this->modx->getCount($this->classKey, array('name' => $name))) {
            $this->modx->error->addField('name', $this->modx->lexicon('chesspuzzles_item_err_ae'));
        }

        return parent::beforeSet();
    }

}

return 'ChessPuzzlesLevelCreateProcessor';