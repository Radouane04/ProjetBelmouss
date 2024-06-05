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
        'appointment_id',
    ];

    public function appointment()
    {
        return $this->belongsTo(Appointment::class, 'appointment_id');
    }

    public function appointments()
    {
        return $this->hasMany(Appointment::class, 'menuisier_id');
    }
}

