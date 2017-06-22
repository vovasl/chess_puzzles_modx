<?php

class ChessPuzzlesTestGetListProcessor extends modObjectGetListProcessor
{
    public $objectType = 'ChessPuzzlesTest';
    public $classKey = 'ChessPuzzlesTest';
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
            'title' => $this->modx->lexicon('chesspuzzles_test_update'),
            //'multiple' => $this->modx->lexicon('chesspuzzles_tests_update'),
            'action' => 'updateTest',
            'button' => true,
            'menu' => true,
        );
        /*
        if (!$array['active']) {
            $array['actions'][] = array(
                'cls' => '',
                'icon' => 'icon icon-power-off action-green',
                'title' => $this->modx->lexicon('chesspuzzles_test_enable'),
                'multiple' => $this->modx->lexicon('chesspuzzles_tests_enable'),
                'action' => 'enableTest',
                'button' => true,
                'menu' => true,
            );
        } else {
            $array['actions'][] = array(
                'cls' => '',
                'icon' => 'icon icon-power-off action-gray',
                'title' => $this->modx->lexicon('chesspuzzles_test_disable'),
                'multiple' => $this->modx->lexicon('chesspuzzles_tests_disable'),
                'action' => 'disableTest',
                'button' => true,
                'menu' => true,
            );
        }
        */
        // Remove
        $array['actions'][] = array(
            'cls' => '',
            'icon' => 'icon icon-trash-o action-red',
            'title' => $this->modx->lexicon('chesspuzzles_test_remove'),
            'multiple' => $this->modx->lexicon('chesspuzzles_tests_remove'),
            'action' => 'removeTest',
            'button' => true,
            'menu' => true,
        );

        return $array;
    }

}

return 'ChessPuzzlesTestGetListProcessor';