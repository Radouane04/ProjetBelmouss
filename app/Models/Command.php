<?php

// app/Models/Command.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Command extends Model
{
    protected $fillable = ['user_id', 'total_amount', 'product_count', 'date'];

    public function products()
    {
        return $this->hasMany(ProductCommand::class);
    }
}
