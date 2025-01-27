import { useEffect, useState } from 'react';

const usePrecios = (tipoSeguro) => {
  const [precio, setPrecio] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCSV = async () => {
      try {
        const response = await fetch(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vRR8BE0F17k8ax8wzwWH4jvmjUHZX20csJo-MG7_12xgwcqpAKMTIbvhppfcxgPa9GnUAfkYEHWhRII/pub?output=csv"
        );

        if (!response.ok) {
          throw new Error("Error en la respuesta de la API");
        }

        const csvText = await response.text();
        const filas = csvText
          .trim()
          .split("\n")
          .map((line) => line.split(","));

        if (filas.length === 0) {
          throw new Error("El archivo CSV está vacío");
        }

        const data = filas.slice(1).reduce((acc, [seguro, precio]) => {
          // Guardar el dato tal como está en el CSV, sin transformarlo
          acc[seguro.trim().toLowerCase()] = precio.trim();
          return acc;
        }, {});

        const precioSeguro = data[tipoSeguro.toLowerCase()];
        setPrecio(precioSeguro);
      } catch (error) {
        setError(error.message);
        console.error("Error al cargar el CSV:", error);
      }
    };

    fetchCSV();
  }, [tipoSeguro]);

  return { precio, error };
};

export default usePrecios;
