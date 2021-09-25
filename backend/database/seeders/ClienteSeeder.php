<?php

namespace Database\Seeders;

use Database\Seeders\Traits\TruncateTable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Database\Seeders\Traits\DisableForeignKeys;
use Carbon\Carbon;

/**
 * Class ClienteSeeder.
 */
class ClienteSeeder extends Seeder
{
    use DisableForeignKeys;
    use TruncateTable;
    
    /**
     * Seed the application's database.
     */
    public function run()
    {
        $this->disableForeignKeys();

        DB::table('clientes')->delete();
        
        DB::table('clientes')->insert(array (
            0 => 
            array (
                'id' => 1,
                'rut' => '18620855-1',
                'name' => 'Angel Serrano',
                'paterno' => 'Serrano',
            ),
            1 => 
            array (
                'id' => 2,
                'rut' => '11345435-2',
                'name' => 'Rose',
                'paterno' => 'Abreu',
            ),
            2 => 
            array (
                'id' => 3,
                'rut' => '14256777-k',
                'name' => 'Rosa',
                'paterno' => 'Campos',
            ),
            3 => 
            array (
                'id' => 4,
                'rut' => '12675688-0',
                'name' => 'Celestino',
                'paterno' => 'Fuentes',
            ),
            4 => 
            array (
                'id' => 5,
                'rut' => '14234334-4',
                'name' => 'Rebeca',
                'paterno' => 'Rojas',
            ),
            5 => 
            array (
                'id' => 6,
                'rut' => '10152323-8',
                'name' => 'Andrea',
                'paterno' => 'Palomo',
            ),
            6 => 
            array (
                'id' => 7,
                'rut' => '15587715-4',
                'name' => 'Maria Inmaculada',
                'paterno' => 'Jiménez',
                
            ),
            7 => 
            array (
                'id' => 8,
                'rut' => '15034590-7',
                'name' => 'Marcela',
                'paterno' => 'Navarro',
            ),
            8 => 
            array (
                'id' => 9,
                'rut' => '11804345-3',
                'name' => 'Francisco Manuel',
                'paterno' => 'Gago',
            ),
            9 => 
            array (
                'id' => 10,
                'rut' => '13804238-0',
                'name' => 'Patricio',
                'paterno' => 'Duran',
            ),
        ));

        $this->enableForeignKeys();
    }
}
