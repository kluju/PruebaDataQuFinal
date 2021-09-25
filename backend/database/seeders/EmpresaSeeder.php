<?php

namespace Database\Seeders;

use Database\Seeders\Traits\TruncateTable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Database\Seeders\Traits\DisableForeignKeys;

/**
 * Class ClienteSeeder.
 */
class EmpresaSeeder extends Seeder
{
    use DisableForeignKeys;
    use TruncateTable;
    
    /**
     * Seed the application's database.
     */
    public function run()
    {
        $this->disableForeignKeys();

        DB::table('empresas')->delete();
        
        DB::table('empresas')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'CHILE ARRIENDA AUTOS S.A',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'AUTOK S.A',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'RENT A CAR S.A',
            ),
            
        ));

        $this->enableForeignKeys();
    }
}
