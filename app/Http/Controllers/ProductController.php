<?php
namespace App\Http\Controllers;

use App\Models\ProduitEnBois;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = ProduitEnBois::all();
        return response()->json($products);
    }
}
