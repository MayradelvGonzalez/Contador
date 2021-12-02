const Contador = () => {
    const [contador, setContador] = React.useState(0)
    const Aumentar = () => {
        setContador(contador + 1)
    }
    const Disminuir = () => {
        setContador(contador - 1)
    }


    return (
        <div id="box" className={contador < 0 ? "menor" : contador == 0 ? "cero" : "mayor"}><h1>Contador: {contador}</h1>
            <hr />
            <button onClick={Aumentar}>Aumentar</button>
            <button onClick={Disminuir}>Disminuir</button>
        </div >
    )
}



ReactDOM.render(<Contador />, document.getElementById("root"))