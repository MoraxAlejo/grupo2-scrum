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
        Schema::create('evaluacions', function (Blueprint $table) {
            $table->id();
            $table->string('logica');
            $table->string('razonamiento');
            $table->string('aptitud');
            $table->foreignId('id_estudiante')->constrained(table: 'estudiantes')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('id_evaluador')->constrained(table: 'evaluadors')->onUpdate('cascade')->onDelete('cascade');
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
        Schema::dropIfExists('evaluacions');
    }
};
