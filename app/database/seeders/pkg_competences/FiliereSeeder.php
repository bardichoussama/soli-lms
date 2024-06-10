<?php

namespace Database\Seeders\pkg_competences;

use App\Models\pkg_competences\Filiere;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\User;

class FiliereSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Disable foreign key constraints to avoid issues during truncation
        Schema::disableForeignKeyConstraints();
        Filiere::truncate();
        Schema::enableForeignKeyConstraints();

        // Open the CSV file
        $csvFilePath = base_path("database/data/pkg_competences/Filiere.csv");
        if (!file_exists($csvFilePath) || !is_readable($csvFilePath)) {
            throw new \Exception("CSV file does not exist or is not readable: $csvFilePath");
        }

        $csvFile = fopen($csvFilePath, "r");
        if ($csvFile === false) {
            throw new \Exception("Failed to open CSV file: $csvFilePath");
        }

        // Read and insert data from CSV file
        $firstline = true;
        while (($data = fgetcsv($csvFile)) !== FALSE) {
            if (!$firstline) {
                Filiere::create([
                    "nom" => $data[0],
                    "description" => $data[1],
                ]);
            }
            $firstline = false;
        }

        // Close the CSV file
        fclose($csvFile);
    }
}



// ==========================================================
// =========== Add Seeder Permission Assign Role ============
// ==========================================================
$responsableRole = User::RESPONSABLE;
$Role = Role::where('name', $responsableRole)->first();
$csvFile = fopen(base_path("database/data/pkg_competences/FilierePermission.csv"), "r");
$firstline = true;
$firstline = true;
while (($data = fgetcsv($csvFile)) !== FALSE) {
    if (!$firstline && count($data) >= 2) {
        Filiere::create([
            "nom" => $data[0],
            "description" => $data[1],
        ]);
    } elseif (!$firstline) {
        error_log("Skipping malformed row in Filiere.csv: " . implode(',', $data));
    }
    $firstline = false;
}


fclose($csvFile);
