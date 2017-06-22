<?php

class ChessPuzzlesTaskCreateProcessor extends modObjectCreateProcessor
{
    public $objectType = 'ChessPuzzlesTask';
    public $classKey = 'ChessPuzzlesTask';
    public $languageTopics = array('chesspuzzles');
    //public $permission = 'create';


    /**
     * @return bool
     */
    public function beforeSet()
    {
        /*
        $name = trim($this->getProperty('title'));
        if ($this->modx->getCount($this->classKey, array('title' => $name))) {
            $this->modx->error->addField('title', $this->modx->lexicon('chesspuzzles_task_err_ae'));
        }
        */
        return parent::beforeSet();
    }

}

return 'ChessPuzzlesTaskCreateProcessor';