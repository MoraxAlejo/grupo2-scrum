<?php

namespace App\Http\Controllers;

use App\Models\Estudiante;
use Illuminate\Http\Request;

class EstudianteController extends Controller
{
   
   public function index()
    {
        $estudiantes = new Estudiante();
        return $estudiantes->all(); 
    }


    public function create(Request $request)
    {
        $estudiante = new Estudiante();
        $estudiante->nombres = $request->nombres;
        $estudiante->apellidos = $request->apellidos;
        $estudiante->direccion = $request->direccion;
        $estudiante->email = $request->email;
        $estudiante->password = $request->password;
        $estudiante->save();
        return $estudiante;
    }

    public function show($id)
    {
        $estudiante = new Estudiante();
        return $estudiante->find($id);
    }

    public function update($id, Request $request)
    {
        $estudiante = Estudiante::find($id);
        $estudiante->nombres = $request->nombres;
        $estudiante->apellidos = $request->apellidos;
        $estudiante->direccion = $request->direccion;
        $estudiante->email = $request->email;
        $estudiante->password = $request->password;
        $estudiante->save();
        return $estudiante;
    }

    public function destroy($id)
    {
        $estudiante = Estudiante::find($id);
        $estudiante->delete();
        return $estudiante;
    }
}
