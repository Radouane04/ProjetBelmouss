<?php

// app/Models/ProductCommand.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductCommand extends Model
{
    protected $fillable = ['command_id', 'product_id', 'product_type', 'quantity'];

    public function command()
    {
        return $this->belongsTo(Command::class);
    }

    public function produitEnBois()
    {
        return $this->belongsTo(ProduitEnBois::class, 'product_id')->where('product_type', 'produits_en_bois');
    }

    public function bois()
    {
        return $this->belongsTo(Bois::class, 'product_id')->where('product_type', 'bois');
    }
}

