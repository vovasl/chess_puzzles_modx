<?php

class ChessPuzzlesLevelUpdateProcessor extends modObjectUpdateProcessor
{
    public $objectType = 'ChessPuzzlesLevel';
    public $classKey = 'ChessPuzzlesLevel';
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
        $name = trim($this->getProperty('levelname'));
        if (empty($id)) {
            return $this->modx->lexicon('chesspuzzles_level_err_ns');
        }

        if ($this->modx->getCount($this->classKey, array('levelname' => $name, 'id:!=' => $id))) {
            $this->modx->error->addField('levelname', $this->modx->lexicon('chesspuzzles_level_err_ae'));
        }

        return parent::beforeSet();
    }
}

return 'ChessPuzzlesLevelUpdateProcessor';
