<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;
    protected $table = 'cart';
    protected $fillable = [
        'product_id',
        'quantity',
        'user_id',
        'type',
    ];

    public function produitEnBois()
    {
        return $this->belongsTo(ProduitEnBois::class, 'product_id');
    }

    public function bois()
    {
        return $this->belongsTo(Bois::class, 'product_id');
    }
}
