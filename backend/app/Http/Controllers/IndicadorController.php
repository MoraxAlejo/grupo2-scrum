<?php

namespace App\Http\Controllers;

use App\Models\Indicador;
use Illuminate\Http\Request;

class IndicadorController extends Controller
{
    public function index()
    {
        $indicador = new Indicador();
        return $indicador->all();

    }

    public function create()
    {
       
    }

    public function store(Request $request)
    {
        $indicador = new Indicador();
        $indicador->logica = $request->logica;
        $indicador->razonamiento = $request->razonamiento;
        $indicador->aptitud = $request->aptitud;
        $indicador->asistencia_Clase = $request->asistencia_Clase;
        $indicador->trabajos_Presentados = $request->trabajos_Presentados;
        $indicador->evaluaciones = $request->evaluaciones;
        $indicador->save();
        return $indicador;
    }

    public function show($id)
    {
        $indicador = new Indicador();
        return $indicador->find($id);

    }

    public function edit($id, Request $request)
    {
        $indicador = Indicador::find($id);
        $indicador->logica = $request->logica;
        $indicador->razonamiento = $request->razonamiento;
        $indicador->aptitud = $request->aptitud;
        $indicador->asistencia_Clase = $request->asistencia_Clase;
        $indicador->trabajos_Presentados = $request->trabajos_Presentados;
        $indicador->evaluaciones = $request->evaluaciones;
        $indicador->save();
        return $indicador;
    }

    public function update(Request $request, Indicador $indicador)
    {
        
    }

    public function destroy($id){
        $indicador = Indicador::find($id);
        $indicador->delete();
        return $indicador->all();
    }
}
