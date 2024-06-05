<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProduitEnBois extends Model
{
    use HasFactory;
    protected $table = 'produits_en_bois';
    protected $fillable = ['product_name', 'description', 'price', 'stock','image'];

    public function cartItems()
    {
        return $this->hasMany(Cart::class, 'product_id');
    }
}