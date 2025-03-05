import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select } from "../components/ui/select";
import  paquetesTuristicos  from "../components/PaquetesTuristicos";
import municipios from "../components/Municipios";
import AcercaDeNosotros from "./AcercaDeNosotros";

export default function TurismoSostenible() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [municipioSeleccionado, setMunicipioSeleccionado] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const [reservas, setReservas] = useState<{ id: number; titulo: string; ciudad: string; categoria: string }[]>([]);
  const [vistaActual, setVistaActual] = useState("explorar"); // Controla la vista actual

  // Estado para la reserva
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState("");
  const [categoriaReserva, setCategoriaReserva] = useState("");
  const [paqueteSeleccionado, setPaqueteSeleccionado] = useState("");

  // Filtrar paquetes cuando el usuario presiona "Buscar"
  const paquetesFiltrados = paquetesTuristicos.filter((paquete) => {
    return (
      (categoriaSeleccionada === "" || paquete.categoria === categoriaSeleccionada) &&
      (municipioSeleccionado === "" || paquete.municipio === municipioSeleccionado) &&
      (terminoBusqueda === "" || paquete.titulo.toLowerCase().includes(terminoBusqueda.toLowerCase()))
    );
  });

  // Función para manejar la reserva
  const manejarReserva = (paqueteSeleccionado: string, ciudadSeleccionada: string, categoriaReserva: string) => {
    if (!paqueteSeleccionado || !ciudadSeleccionada || !categoriaReserva) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Obtener el paquete turístico seleccionado
    const paquete = paquetesTuristicos.find((p) => p.titulo === paqueteSeleccionado);
    if (!paquete) return;

    // Agregar la reserva a la lista
    setReservas((prev) => [...prev, { id: paquete.id, titulo: paquete.titulo, ciudad: ciudadSeleccionada, categoria: categoriaReserva }]);
    alert(`Reserva confirmada para "${paquete.titulo}" en ${ciudadSeleccionada} (${categoriaReserva})`);
    
    // Limpiar los campos
    setCiudadSeleccionada("");
    setCategoriaReserva("");
    setPaqueteSeleccionado("");
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

      {/* Explorar Paquetes */}
      {vistaActual === "explorar" && (
        <>
          {/* Buscador */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mt-6">Buscar Paquetes Turísticos</h2>

            {/* Filtros */}
            <div className="flex gap-4 mt-4">
              <Select
                placeholder="Categorías"
                options={["Alojamiento", "Experiencias", "Transporte", "Paquetes completos"]}
                onChange={(value) => setCategoriaSeleccionada(value)}
              />
              <Select
                placeholder="Municipios"
                options={municipios}
                onChange={(value) => setMunicipioSeleccionado(value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paquetesFiltrados.map((paquete) => (
              <Card key={paquete.id} className="hover:shadow-xl border border-gray-200 transition-all duration-300">
                <img src={paquete.imagen} alt={paquete.titulo} className="rounded-t-lg w-full h-60 object-cover" />
                <CardContent>
                  <h3 className="text-lg font-semibold text-gray-800">{paquete.titulo}</h3>
                  <p className="text-sm text-gray-600">{paquete.descripcion}</p>
                  <p className="text-sm font-bold text-green-700">{paquete.precio}</p>
                  <p className="text-sm text-gray-600">{paquete.municipio}</p>
                  <p className="text-sm text-gray-600">{paquete.categoria}</p>
                  <hr className="my-4" />
                  <Button 
                  className="mt-4 bg-green-500 hover:bg-green-600 text-white w-full" 
                  onClick={() => manejarReserva(paquete.titulo, paquete.municipio, paquete.categoria)}
                  >
                    Reservar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}

      {/* Crear Reserva */}
      {vistaActual === "crear-reserva" && (
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Crear Reserva</h2>

          <div className="mb-4">
          <Select
            placeholder="Selecciona un paquete turístico"
            options={paquetesTuristicos.map((p) => p.titulo)}
            onChange={(value) => setPaqueteSeleccionado(value)}
          />
        </div>

        <div className="mb-4">
          <Select
            placeholder="Selecciona una ciudad"
            options={municipios}
            onChange={(value) => setCiudadSeleccionada(value)}
          />
        </div>
    
        <div className="mb-4">
          <Select
            placeholder="Selecciona una categoría"
            options={["Alojamiento", "Experiencias", "Transporte", "Paquetes completos"]}
            onChange={(value) => setCategoriaReserva(value)}
          />
        </div>

          <Button className="mt-4 bg-green-500 hover:bg-green-600 text-white w-full" onClick={() => manejarReserva(paqueteSeleccionado, ciudadSeleccionada, categoriaReserva)}>
            Confirmar Reserva
          </Button>
        </div>
      )}

      {/* Ver Reservas */}
      {vistaActual === "ver-reservas" && (
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto">
          <h2 className="text-xl font-bold text-gray-800">Reservas Realizadas</h2>
          <div className="mt-4">
            {reservas.length === 0 && <p className="text-gray-600">No hay reservas realizadas.</p>}
            {reservas.map((reserva) => (
              <div key={reserva.id} className="border-b border-gray-200 py-2">
                <p className="text-lg font-semibold text-gray-800">{reserva.titulo}</p>
                <p className="text-sm text-gray-600">{reserva.ciudad}</p>
                <p className="text-sm text-gray-600">{reserva.categoria}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Acerca de Nosotros */}
      {vistaActual === "acerca" && <AcercaDeNosotros />}

    </div>
  );
}
