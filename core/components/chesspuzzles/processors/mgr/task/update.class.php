<?php

class ChessPuzzlesTaskUpdateProcessor extends modObjectUpdateProcessor
{
    public $objectType = 'ChessPuzzlesTask';
    public $classKey = 'ChessPuzzlesTask';
    public $languageTopics = array('chesspuzzles');
    //public $permission = 'save';


    /**
     * We doing special check of permission
     * because of our objects is not an instances of modAccessibleObject
     *
     * @return bool|string
     */
    public function beforeSave()
    {
        if (!$this->checkPermissions()) {
            return $this->modx->lexicon('access_denied');
        }

        return true;
    }


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $id = (int)$this->getProperty('id');
        $name = trim($this->getProperty('title'));
        if (empty($id)) {
            return $this->modx->lexicon('chesspuzzles_task_err_ns');
        }

        /*
        if ($this->modx->getCount($this->classKey, array('title' => $name, 'id:!=' => $id))) {
            $this->modx->error->addField('title', $this->modx->lexicon('chesspuzzles_task_err_ae'));
        }
        */
        return parent::beforeSet();
    }


}

return 'ChessPuzzlesTaskUpdateProcessor';
