<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    protected $fillable = [
        'nameClient',
        'address',
        'phone',
        'appointmentDate',
        'details',
        'menuisier_id'
    ];

    public function menuisier()
    {
        return $this->belongsTo(Menuisier::class, 'menuisier_id');
    }
}
