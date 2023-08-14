const Hijo = ({ Objdinero, setObjDinero }) => {

    return (
        <>
            <div>C. Hijo</div>

            <pre>{JSON.stringify(Objdinero, null, 1)}</pre>

            <button onClick={() => { setObjDinero({ ...Objdinero, dinero: 0 }) }}
                className="btn btn-success w-full mt-2">Gastar</button>
        </>
    )
}

export default Hijo