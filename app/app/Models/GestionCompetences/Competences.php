<?php

namespace App\Models\GestionCompetences;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\GestionCompetences\Modules;

class Competences extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom',
        'code',
        'description',
        'module_id',
    ];

    public function module()
    {
        return $this->belongsTo(Modules::class);
    }
}
