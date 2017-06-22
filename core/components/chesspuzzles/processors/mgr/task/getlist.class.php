<?php

class ChessPuzzlesTaskGetListProcessor extends modObjectGetListProcessor
{
    public $objectType = 'ChessPuzzlesTask';
    public $classKey = 'ChessPuzzlesTask';
    public $defaultSortField = 'id';
    public $defaultSortDirection = 'DESC';
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
        $c->leftJoin('ChessPuzzlesLevel', 'Level');
        $c->select($this->modx->getSelectColumns($this->classKey, $this->classKey));
        $c->select($this->modx->getSelectColumns('ChessPuzzlesLevel', 'Level', '', array('levelname')));
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
            'title' => $this->modx->lexicon('chesspuzzles_task_update'),
            //'multiple' => $this->modx->lexicon('chesspuzzles_tasks_update'),
            'action' => 'updateTask',
            'button' => true,
            'menu' => true,
        );
        /*
        if (!$array['active']) {
            $array['actions'][] = array(
                'cls' => '',
                'icon' => 'icon icon-power-off action-green',
                'title' => $this->modx->lexicon('chesspuzzles_task_enable'),
                'multiple' => $this->modx->lexicon('chesspuzzles_tasks_enable'),
                'action' => 'enableTask',
                'button' => true,
                'menu' => true,
            );
        } else {
            $array['actions'][] = array(
                'cls' => '',
                'icon' => 'icon icon-power-off action-gray',
                'title' => $this->modx->lexicon('chesspuzzles_task_disable'),
                'multiple' => $this->modx->lexicon('chesspuzzles_tasks_disable'),
                'action' => 'disableTask',
                'button' => true,
                'menu' => true,
            );
        }
        */
        // Remove
        $array['actions'][] = array(
            'cls' => '',
            'icon' => 'icon icon-trash-o action-red',
            'title' => $this->modx->lexicon('chesspuzzles_task_remove'),
            'multiple' => $this->modx->lexicon('chesspuzzles_tasks_remove'),
            'action' => 'removeTask',
            'button' => true,
            'menu' => true,
        );

        return $array;
    }

}

return 'ChessPuzzlesTaskGetListProcessor';