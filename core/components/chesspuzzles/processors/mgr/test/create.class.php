<?php

class ChessPuzzlesTestCreateProcessor extends modObjectCreateProcessor
{
    public $objectType = 'ChessPuzzlesTest';
    public $classKey = 'ChessPuzzlesTest';
    public $languageTopics = array('chesspuzzles');
    //public $permission = 'create';


    /**
     * @return bool
     */
    public function beforeSet()
    {
        /*
        $name = trim($this->getProperty('title'));
        if (empty($name)) {
            $this->modx->error->addField('title', $this->modx->lexicon('chesspuzzles_test_err_name'));
        } elseif ($this->modx->getCount($this->classKey, array('title' => $name))) {
            $this->modx->error->addField('title', $this->modx->lexicon('chesspuzzles_test_err_ae'));
        }
        */
        return parent::beforeSet();
    }

}

return 'ChessPuzzlesTestCreateProcessor';