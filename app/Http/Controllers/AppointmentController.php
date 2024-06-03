<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Appointment;

class AppointmentController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nameClient' => 'required',
            'address' => 'required',
            'phone' => 'required',
            'appointmentDate' => 'required|date',
            'details' => 'required',
        ]);

        $appointment = Appointment::create($validated);

        return response()->json($appointment, 201);
    }
}
