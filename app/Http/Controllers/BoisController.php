<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bois;

class BoisController extends Controller
{
    public function index()
    {
        return Bois::all();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'product_name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price_per_unit' => 'required|numeric',
            'stock' => 'required|integer',
        ]);

        $bois = Bois::create($validated);

        return response()->json($bois, 201);
    }

    public function show($id)
    {
        $bois = Bois::findOrFail($id);
        return response()->json($bois);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'product_name' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'sometimes|required|numeric',
            'stock' => 'sometimes|required|integer',
        ]);

        $bois = Bois::findOrFail($id);
        $bois->update($validated);

        return response()->json($bois);
    }

    public function destroy($id)
    {
        $bois = Bois::findOrFail($id);
        $bois->delete();

        return response()->json(['message' => 'Bois supprimé avec succès']);
    }
}
