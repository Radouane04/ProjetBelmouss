<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menuisier extends Model
{
    use HasFactory;
    protected $fillable = [
        'nomComplet',
        'email',
        'phone',
        'idAppointment',

    ];

    
    public function appointments()
    {
        return $this->belongsTo(Appointment::class, 'idAppointment');
    
}
}