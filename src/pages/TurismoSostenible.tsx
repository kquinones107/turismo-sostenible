import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select } from "../components/ui/select";

export default function TurismoSostenible() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Pantalla de Inicio */}
      <div className="text-center my-6">
      <h1 className="text-3xl font-bold text-green-600">¡Hola, Turismo Sostenible!</h1>
        <h1 className="text-3xl font-bold text-green-600">Bienvenido a Turismo Sostenible</h1>
        <p className="text-gray-500">Conecta con la cultura local, protege el medio ambiente</p>
        <div className="mt-4 flex justify-center gap-4">
          <Button className="px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600">
            Explorar experiencias
          </Button>
          <Button className="px-6 py-2 border border-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-100">
            Iniciar sesión
          </Button>
        </div>
      </div>

      {/* Pantalla de Búsqueda */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800">Buscar Paquetes Turísticos</h2>
        <div className="flex gap-4 mt-4">
          <Input placeholder="¿Qué quieres explorar hoy?" className="flex-1" />
          <Button className="bg-blue-500 hover:bg-blue-600">Buscar</Button>
        </div>
        <div className="flex gap-4 mt-4">
          <Select 
            placeholder="Categorias"
            options={["Alojamiento", "Experiencias", "Transporte", "Paquetes completos"]}>
          </Select>
          <Select 
           placeholder="Municipios"
           options={["Municipio 1", "Municipio 2", "Municipio 3", "Municipio 4"]}>
            
          </Select>
        </div>
      </div>

      {/* Resultados de Búsqueda */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((item) => (
          <Card key={item} className="hover:shadow-lg">
            <img src="https://via.placeholder.com/150" alt="Paquete" className="rounded-t-lg" />
            <CardContent>
              <h3 className="text-lg font-semibold">Paquete Turístico {item}</h3>
              <p className="text-sm text-gray-600">Descubre las maravillas de este lugar con guías locales.</p>
              <Button className="mt-4 bg-green-500 hover:bg-green-600">Reservar</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
