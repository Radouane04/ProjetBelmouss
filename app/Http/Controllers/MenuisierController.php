<?php

namespace App\Http\Controllers;

use App\Models\Menuisier;
use Illuminate\Http\Request;

class MenuisierController extends Controller
{
    public function index()
    {
        return Menuisier::all();
    }

    public function store(Request $request)
    {
        // Valider les données reçues du formulaire
        $validatedData = $request->validate([
            'nomComplet' => 'required|string|max:255',
            'email' => 'required|email|unique:menuisiers',
            'phone' => 'required|string|max:15',
        ]);

        // Créer un nouveau menuisier avec les données validées
        $menuisier = Menuisier::create($validatedData);

        // Retourner une réponse JSON pour indiquer que le menuisier a été ajouté avec succès
        return response()->json(['message' => 'Menuisier ajouté avec succès', 'menuisier' => $menuisier], 201);
    }

    public function update(Request $request, Menuisier $menuisier)
    {
        $menuisier->update($request->all());
        return $menuisier;
    }

    public function destroy(Menuisier $menuisier)
    {
        $menuisier->delete();
        return response()->json(null, 204);
    }
}
