<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bois extends Model
{
    use HasFactory;

    protected $fillable = [ 'description', 'price','product_name', 'stock'];

    public function cartItems()
    {
        return $this->hasMany(Cart::class, 'bois_id');
    }
}
