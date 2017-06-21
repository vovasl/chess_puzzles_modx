<?php
$xpdo_meta_map['ChessPuzzlesLevel']= array (
  'package' => 'chesspuzzles',
  'version' => '1.1',
  'table' => 'chesspuzzles_level',
  'extends' => 'xPDOSimpleObject',
  'fields' => 
  array (
    'title' => '',
    'description' => NULL,
  ),
  'fieldMeta' => 
  array (
    'title' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '255',
      'phptype' => 'string',
      'null' => false,
      'default' => '',
    ),
    'description' => 
    array (
      'dbtype' => 'text',
      'phptype' => 'string',
      'null' => true,
    ),
  ),
  'indexes' => 
  array (
    'title' => 
    array (
      'alias' => 'title',
      'primary' => false,
      'unique' => false,
      'type' => 'BTREE',
      'columns' => 
      array (
        'title' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => false,
        ),
      ),
    ),
  ),
  'composites' => 
  array (
    'Task' => 
    array (
      'class' => 'ChessPuzzlesTask',
      'local' => 'id',
      'foreign' => 'level_id',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
    'Test' => 
    array (
      'class' => 'ChessPuzzlesTest',
      'local' => 'id',
      'foreign' => 'level_id',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
  ),
);
