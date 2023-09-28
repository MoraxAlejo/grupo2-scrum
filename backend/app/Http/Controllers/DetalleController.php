<?php

namespace App\Http\Controllers;

use App\Models\Detalle_evaluacion;
use Illuminate\Http\Request;

class DetalleController extends Controller
{
    public function index()
    {
        $detalle = new Detalle_evaluacion();
        return $detalle->all(); 
    }


    public function create(Request $request)
    {


        $detalle = new Detalle_evaluacion();
        $detalle->fecha_evaluacion = $request->fecha_evaluacion;
        $detalle->nombre_evaluacion = $request->nombre_evaluacion;
        $detalle->descripcion = $request->descripcion;
        $detalle->id_evaluacion = $request->id_evaluacion;
        $detalle->id_indicador = $request->id_indicador;
        $detalle->save();
        return $detalle;
    }

    public function show($id)
    {
        $detalle = new Detalle_evaluacion();
        return $detalle->find($id);
    }

    public function update($id, Request $request)
    {
        $detalle = Detalle_evaluacion::find($id);
        $detalle->fecha_evaluacion = $request->fecha_evaluacion;
        $detalle->nombre_evaluacion = $request->nombre_evaluacion;
        $detalle->descripcion = $request->descripcion;
        $detalle->id_evaluacion = $request->id_evaluacion;
        $detalle->id_indicador = $request->id_indicador;
        $detalle->save();
        return $detalle;
    }

    public function destroy($id)
    {
        $detalle = Detalle_evaluacion::find($id);
        $detalle->delete();
        return $detalle;
    }
}
