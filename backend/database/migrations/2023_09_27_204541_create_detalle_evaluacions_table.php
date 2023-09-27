<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('detalle_evaluacions', function (Blueprint $table) {
            $table->id();
            $table->date('fecha_evaluacion');
            $table->string('nombre_evaluacion');
            $table->string('descripcion');
            $table->foreignId('id_evaluacion')->constrained(table: 'evaluacions')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('id_indicador')->constrained(table: 'indicadors')->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('detalle_evaluacions');
    }
};
