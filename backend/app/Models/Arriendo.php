<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Arriendo extends Model
{
    use HasFactory;
    protected $fillable = ['id_cliente', 'id_empresa','costo_diario','dias','create_at','update_at'];
}
