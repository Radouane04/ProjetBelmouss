<?php

namespace App\Http\Controllers;
use App\Models\Appointment;
use App\Models\Menuisier;
use Illuminate\Http\Request;

class MenuisierController extends Controller
{
    public function index()
    {
        return Menuisier::with('appointments')->get();
    }
    

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nomComplet' => 'required|string|max:255',
            'email' => 'required|email|unique:menuisiers',
            'phone' => 'required|string|max:15',
        ]);
    
        $menuisier = Menuisier::create($validatedData);
    
        return response()->json(['message' => 'Menuisier ajouté avec succès', 'menuisier' => $menuisier], 201);
    }

    public function update(Request $request, Menuisier $menuisier)
    {
        $validatedData = $request->validate([
            'nomComplet' => 'required|string|max:255',
            'email' => 'required|email|unique:menuisiers,email,'.$menuisier->id,
            'phone' => 'required|string|max:15',
        ]);
    
        $menuisier->update($validatedData);
    
        return response()->json(['message' => 'Menuisier mis à jour avec succès', 'menuisier' => $menuisier]);
    }

    public function destroy(Menuisier $menuisier)
    {
        $menuisier->delete();
        return response()->json(null, 204);
    }

    public function getMenuisierbyAppointement(Appointment $appointment)
{
    return $appointment->menuisiers()->with('appointments')->get();
}

}
