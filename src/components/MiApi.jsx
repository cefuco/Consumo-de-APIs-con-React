import { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";

const MiApi = () => {
  //Estado para los datos
  const [feriados, setFeriados] = useState([]);

  // Estado para la búsqueda
  const [busqueda, setBusqueda] = useState("");

  const obtenerData = async () => {
    const url = "https://api.victorsanmartin.com/feriados/es.json";
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();
    console.log(data)
    const dataOrdenada = data.sort((a, b) => a.title.localeCompare(b.title));
    setFeriados(dataOrdenada);
  };

  const filtrarFeriadosPorTitulo = (f) => {
    return f.title?.toLowerCase().includes(busqueda.toLowerCase());
  };

  useEffect(() => {
    obtenerData();
  }, []);

  return (
    <>
      <div className="mb-5">
        <label htmlFor="busqueda">Busqueda</label>
        <input
          id="busqueda"
          type="text"
          placeholder="Buscar feriado"
          className="form-control"
          value={busqueda}
          onChange={(e) => {
            setBusqueda(e.target.value);
          }}
        />
      </div>
      <div className="col">
        <Accordion defaultActiveKey="0">
          {feriados.filter(filtrarFeriadosPorTitulo).map((feriado, i) => (
            <Accordion.Item eventKey={i} key={i}>
              <Accordion.Header>{feriado.title}</Accordion.Header>
              <Accordion.Body>
                <p>
                  {feriado.date} - {feriado.extra}
                </p>
                Tipo: {feriado.type}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default MiApi;
