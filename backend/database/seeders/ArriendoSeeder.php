<?php

namespace Database\Seeders;

use Database\Seeders\Traits\TruncateTable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Database\Seeders\Traits\DisableForeignKeys;

/**
 * Class ArriendoSeeder.
 */
class ArriendoSeeder extends Seeder
{
    use DisableForeignKeys;
    use TruncateTable;
    
    /**
     * Seed the application's database.
     */
    public function run()
    {
        $this->disableForeignKeys();

        DB::table('arriendos')->delete();
        
        DB::table('arriendos')->insert(array (
            array ( 'id_cliente' => 6, 'id_empresa'=> 1, 'costo_diario'=> 15000, 'dias'=> 3),
            array ( 'id_cliente'=> 1, 'id_empresa'=> 3, 'costo_diario'=> 18000, 'dias'=> 2),
            array ( 'id_cliente'=> 5, 'id_empresa'=> 3, 'costo_diario'=> 135000, 'dias'=> 1),
            array ( 'id_cliente'=> 2, 'id_empresa'=> 2, 'costo_diario'=> 5600, 'dias'=> 4),
            array ( 'id_cliente'=> 3, 'id_empresa'=> 1, 'costo_diario'=> 23000, 'dias'=> 3),
            array ( 'id_cliente'=> 7, 'id_empresa'=> 2, 'costo_diario'=> 15000, 'dias'=> 3),
            array ( 'id_cliente'=> 8, 'id_empresa'=> 3, 'costo_diario'=> 45900, 'dias'=> 2),
            array ( 'id_cliente'=> 10, 'id_empresa'=> 3, 'costo_diario'=> 19000, 'dias'=> 5),
            array ( 'id_cliente'=> 9, 'id_empresa'=> 3, 'costo_diario'=> 51000, 'dias'=> 7),
            array ( 'id_cliente'=> 5, 'id_empresa'=> 1, 'costo_diario'=> 89000, 'dias'=> 7),
            array ( 'id_cliente'=> 1, 'id_empresa'=> 2, 'costo_diario'=> 16000, 'dias'=> 1),
            array ( 'id_cliente'=> 3, 'id_empresa'=> 3, 'costo_diario'=> 37500, 'dias'=> 1),
            array ( 'id_cliente'=> 6, 'id_empresa'=> 1, 'costo_diario'=> 19200, 'dias'=> 2),
            array ( 'id_cliente'=> 6, 'id_empresa'=> 3, 'costo_diario'=> 10000, 'dias'=> 3),
            array ( 'id_cliente'=> 6, 'id_empresa'=> 2, 'costo_diario'=> 5900, 'dias'=> 2),
            array ( 'id_cliente'=> 10, 'id_empresa'=> 1, 'costo_diario'=> 9000, 'dias'=> 5),
            array ( 'id_cliente'=> 10, 'id_empresa'=> 3, 'costo_diario'=> 13500, 'dias'=> 5),
            array ( 'id_cliente'=> 9, 'id_empresa'=> 1, 'costo_diario'=> 38200, 'dias'=> 4),
            array ( 'id_cliente'=> 7, 'id_empresa'=> 2, 'costo_diario'=> 17000, 'dias'=> 1),
            array ( 'id_cliente'=> 5, 'id_empresa'=> 3, 'costo_diario'=> 1000, 'dias'=> 10),
            array ( 'id_cliente'=> 1, 'id_empresa'=> 2, 'costo_diario'=> 6000, 'dias'=> 20),
            array ( 'id_cliente'=> 3, 'id_empresa'=> 1, 'costo_diario'=> 16200, 'dias'=> 7),
            array ( 'id_cliente'=> 2, 'id_empresa'=> 2, 'costo_diario'=> 10000, 'dias'=> 5),
        ));

        $this->enableForeignKeys();
    }
}
