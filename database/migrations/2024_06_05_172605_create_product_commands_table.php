<?php
   // database/migrations/XXXX_XX_XX_XXXXXX_create_product_commands_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductCommandsTable extends Migration
{
    public function up()
    {
        Schema::create('product_commands', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('command_id');
            $table->unsignedBigInteger('product_id');
            $table->string('product_type'); // 'produits_en_bois' ou 'bois'
            $table->unsignedInteger('quantity');
            $table->timestamps();

            $table->foreign('command_id')->references('id')->on('commands')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('product_commands');
    }
}
