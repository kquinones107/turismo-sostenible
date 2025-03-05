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
    imagen: "/images/imagen_1.png",
    precio: "150 USD",
    categoria: "Experiencias",
    municipio: "Guatapé",
  },
  {
    id: 2,
    titulo: "Tour Gastronómico",
    descripcion: "Descubre la comida típica de la región.",
    imagen: "images/imagen_2.jpg",
    precio: "80 USD",
    categoria: "Experiencias",
    municipio: "Cartagena",
  },
];

export default function TurismoSostenible() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [municipioSeleccionado, setMunicipioSeleccionado] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const [reservas, setReservas] = useState<{ id: number; titulo: string }[]>([]);
  const [vistaActual, setVistaActual] = useState("explorar"); // Controla la vista actual

  // Filtrar paquetes cuando el usuario presiona "Buscar"
  const paquetesFiltrados = paquetesTuristicos.filter((paquete) => {
    return (
      (categoriaSeleccionada === "" || paquete.categoria === categoriaSeleccionada) &&
      (municipioSeleccionado === "" || paquete.municipio === municipioSeleccionado) &&
      (terminoBusqueda === "" || paquete.titulo.toLowerCase().includes(terminoBusqueda.toLowerCase()))
    );
  });

  // Función para manejar la reserva de un paquete
  const manejarReserva = (paqueteId: number, titulo: string) => {
    setReservas((prev) => [...prev, { id: paqueteId, titulo }]);
    alert(`¡Has reservado el paquete: ${titulo}!`);
  };

  // Función que se ejecuta al presionar el botón "Buscar"
  const ejecutarBusqueda = () => {
    setTerminoBusqueda(busqueda);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Barra de Navegación */}
      <div className="flex justify-between items-center bg-white shadow-md p-4 rounded-md">
        <h1 className="text-2xl font-bold text-green-600">Turismo Sostenible</h1>
        <div className="flex gap-4">
          <Button
            className={`px-4 py-2 ${vistaActual === "explorar" ? "bg-green-600 text-white" : "bg-gray-200"}`}
            onClick={() => setVistaActual("explorar")}
          >
            Explorar Paquetes
          </Button>
          <Button
            className={`px-4 py-2 ${vistaActual === "crear-reserva" ? "bg-green-600 text-white" : "bg-gray-200"}`}
            onClick={() => setVistaActual("crear-reserva")}
          >
            Crear Reserva
          </Button>
          <Button
            className={`px-4 py-2 ${vistaActual === "ver-reservas" ? "bg-green-600 text-white" : "bg-gray-200"}`}
            onClick={() => setVistaActual("ver-reservas")}
          >
            Ver Reservas Realizadas
          </Button>
          <Button
            className={`px-4 py-2 ${vistaActual === "acerca" ? "bg-green-600 text-white" : "bg-gray-200"}`}
            onClick={() => setVistaActual("acerca")}
          >
            Acerca de Nosotros
          </Button>
        </div>
      </div>

      {/* Contenido Dinámico Basado en la Vista Seleccionada */}
      {vistaActual === "explorar" && (
        <>
          {/* Buscador */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mt-6">Buscar Paquetes Turísticos</h2>
            <div className="flex gap-4 mt-4">
              <Input
                placeholder="¿Qué quieres explorar hoy?"
                className="flex-1"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
              <Button className="bg-blue-500 hover:bg-blue-600 text-white" onClick={ejecutarBusqueda}>
                Buscar
              </Button>
            </div>

            {/* Filtros */}
            <div className="flex gap-4 mt-4">
              <Select
                placeholder="Categorías"
                options={["Alojamiento", "Experiencias", "Transporte", "Paquetes completos"]}
                onChange={(value) => setCategoriaSeleccionada(value)}
              />
              <Select
                placeholder="Municipios"
                options={["Cartagena", "Medellín", "San Andrés", "Santa Marta"]}
                onChange={(value) => setMunicipioSeleccionado(value)}
              />
            </div>
          </div>

          {/* Resultados de Búsqueda */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paquetesFiltrados.length > 0 ? (
              paquetesFiltrados.map((paquete) => (
                <Card key={paquete.id} className="hover:shadow-xl border border-gray-200 transition-all duration-300">
                  <img src={paquete.imagen} alt={paquete.titulo} className="rounded-t-lg w-full h-60 object-cover" />
                  <CardContent>
                    <h3 className="text-lg font-semibold text-gray-800">{paquete.titulo}</h3>
                    <p className="text-sm text-gray-600">{paquete.descripcion}</p>
                    <p className="text-sm font-bold text-green-700">{paquete.precio}</p>
                    <Button
                      className="mt-4 bg-green-500 hover:bg-green-600 text-white w-full"
                      onClick={() => manejarReserva(paquete.id, paquete.titulo)}
                    >
                      Reservar
                    </Button>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-3">No se encontraron paquetes turísticos.</p>
            )}
          </div>
        </>
      )}

      {/* Ver Reservas */}
      {vistaActual === "ver-reservas" && (
        <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-800">Reservas Realizadas</h2>
          {reservas.length > 0 ? (
            <ul className="list-disc pl-6">
              {reservas.map((reserva) => (
                <li key={reserva.id} className="text-gray-600">
                  {reserva.titulo}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No has realizado reservas aún.</p>
          )}
        </div>
      )}

      {/* Acerca de Nosotros */}
      {vistaActual === "acerca" && (
        <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-800">Acerca de Nosotros</h2>
          <p className="text-gray-600 mt-2">
            Turismo Sostenible es una plataforma dedicada a conectar a los viajeros con experiencias auténticas y responsables
            con el medio ambiente. Nos enfocamos en promover destinos locales y apoyar el turismo ecológico.
          </p>
        </div>
      )}
    </div>
  );
}
