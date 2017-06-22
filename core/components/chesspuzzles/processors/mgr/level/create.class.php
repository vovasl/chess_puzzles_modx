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
        $name = trim($this->getProperty('levelname'));
        if ($this->modx->getCount($this->classKey, array('levelname' => $name))) {
            $this->modx->error->addField('levelname', $this->modx->lexicon('chesspuzzles_level_err_ae'));
        }

        return parent::beforeSet();
    }

}

return 'ChessPuzzlesLevelCreateProcessor';