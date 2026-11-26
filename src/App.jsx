
function App() {

  return (
    <>
      <Cabecera local="Balmaseda"/>
      <Producto nombre="Café solo" precio={1.20} descripcion="Un café solo" />
      <Producto nombre="Cortado" precio={1.40} descripcion="Un cortado" />
      <Producto nombre="Té" precio={1.50} descripcion="Un té" />
      <Producto nombre="Tostada" precio={2.00} descripcion="El avocado-toast de toda la vida" />
      <Producto nombre="Zumo de naranja" precio={2.20} descripcion="Vitaminas a precio desorbitados" /> 
    </>
  )
}

function Cabecera({local}){
  return <h1>{local}</h1>
}

function Producto({nombre, precio, descripcion}){
  return (
    <div>{nombre}: {descripcion} - {precio}€</div>
  )
}

export default App
