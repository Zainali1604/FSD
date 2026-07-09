function Child(props) {
    return (
        <>
            <h1>Name:{props.name}</h1>
            <h2>Age:{props.age + 1}</h2>
        </>
    )
}

export default Child