import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select } from "../components/ui/select";


const paquetesTuristicos = [
  {
    id: 1,
    titulo: "Aventura en la Montaña",
    descripcion: "Explora senderos naturales con guías expertos.",
    imagen:  "/images/imagen_1.png",
    precio: "150 USD",
  },
  {
    id: 2,
    titulo: "Tour Gastronómico",
    descripcion: "Descubre la comida típica de la región.",
    imagen: "images/imagen_2.jpg",
    precio: "80 USD",
  },
  {
    id: 3,
    titulo: "Paseo en Lancha",
    descripcion: "Recorre ríos y lagos en un ambiente natural.",
    imagen: "images/imagen_3.jpg",
    precio: "120 USD",
  },
  {
    id: 4,
    titulo: "Alojamiento Rural",
    descripcion: "Descansa en cabañas rústicas en medio de la naturaleza.",
    imagen: "images/imagen_4.png",
    precio: "200 USD",
  },
  {
    id: 5,
    titulo: "Tour Histórico",
    descripcion: "Conoce la historia de la región con guías especializados.",
    imagen: "images/imagen_5.jpg",
    precio: "100 USD",
  },
  {
    id: 6,
    titulo: "Tour de Centros Historicos",
    descripcion: "Visita los centros históricos de la región.",
    imagen: "images/imagen_6.jpg",
    precio: "50 USD",
  },
];

export default function TurismoSostenible() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [municipioSeleccionado, setMunicipioSeleccionado] = useState("");

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Pantalla de Inicio */}
      <div className="text-center my-6">
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
            placeholder="Categorías"
            options={["Alojamiento", "Experiencias", "Transporte", "Paquetes completos"]}
            onChange={(value) => setCategoriaSeleccionada(value)}
          />
          <Select
            placeholder="Municipios"
            options={["Municipio 1", "Municipio 2", "Municipio 3", "Municipio 4"]}
            onChange={(value) => setMunicipioSeleccionado(value)}
          />
        </div>
      </div>

      {/* Resultados de Búsqueda */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paquetesTuristicos.map((paquete) => (
          <Card key={paquete.id} className="hover:shadow-xl border border-gray-200 transition-all duration-300">
            <img src={paquete.imagen} alt={paquete.titulo} className="rounded-t-lg w-full h-60 object-cover" rounded-t-lg/>
            <CardContent>
              <h3 className="text-lg font-semibold text-gray-800">{paquete.titulo}</h3>
              <p className="text-sm text-gray-600">{paquete.descripcion}</p>
              <p className="text-sm font-bold text-green-700">{paquete.precio}</p>
              <Button className="mt-4 bg-green-500 hover:bg-green-600 text-white w-full">
                Reservar
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
