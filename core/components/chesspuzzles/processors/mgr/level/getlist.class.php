<?php

class ChessPuzzlesLevelGetListProcessor extends modObjectGetListProcessor
{
    public $objectType = 'ChessPuzzlesLevel';
    public $classKey = 'ChessPuzzlesLevel';
    public $defaultSortField = 'title';
    public $defaultSortDirection = 'ASC';
    //public $permission = 'list';


    /**
     * We do a special check of permissions
     * because our objects is not an instances of modAccessibleObject
     *
     * @return boolean|string
     */
    public function beforeQuery()
    {
        if (!$this->checkPermissions()) {
            return $this->modx->lexicon('access_denied');
        }

        return true;
    }


    /**
     * @param xPDOQuery $c
     *
     * @return xPDOQuery
     */
    public function prepareQueryBeforeCount(xPDOQuery $c)
    {
        $query = trim($this->getProperty('query'));
        if ($query) {
            $c->where(array(
                'name:LIKE' => "%{$query}%",
                'OR:description:LIKE' => "%{$query}%",
            ));
        }

        return $c;
    }


    /**
     * @param xPDOObject $object
     *
     * @return array
     */
    public function prepareRow(xPDOObject $object)
    {
        $array = $object->toArray();
        $array['actions'] = array();

        // Edit
        $array['actions'][] = array(
            'cls' => '',
            'icon' => 'icon icon-edit',
            'title' => $this->modx->lexicon('chesspuzzles_level_update'),
            //'multiple' => $this->modx->lexicon('chesspuzzles_levels_update'),
            'action' => 'updateLevel',
            'button' => true,
            'menu' => true,
        );
        /*
        if (!$array['active']) {
            $array['actions'][] = array(
                'cls' => '',
                'icon' => 'icon icon-power-off action-green',
                'title' => $this->modx->lexicon('chesspuzzles_level_enable'),
                'multiple' => $this->modx->lexicon('chesspuzzles_levels_enable'),
                'action' => 'enableLevel',
                'button' => true,
                'menu' => true,
            );
        } else {
            $array['actions'][] = array(
                'cls' => '',
                'icon' => 'icon icon-power-off action-gray',
                'title' => $this->modx->lexicon('chesspuzzles_level_disable'),
                'multiple' => $this->modx->lexicon('chesspuzzles_levels_disable'),
                'action' => 'disableLevel',
                'button' => true,
                'menu' => true,
            );
        }
        */
        // Remove
        $array['actions'][] = array(
            'cls' => '',
            'icon' => 'icon icon-trash-o action-red',
            'title' => $this->modx->lexicon('chesspuzzles_level_remove'),
            'multiple' => $this->modx->lexicon('chesspuzzles_levels_remove'),
            'action' => 'removeLevel',
            'button' => true,
            'menu' => true,
        );

        return $array;
    }

}

return 'ChessPuzzlesLevelGetListProcessor';