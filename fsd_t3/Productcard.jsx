function Productcard(props) {
    return (
        <>
            <table border="2">
                <tr>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Rating</td>
                    <td>Image</td>
                </tr>
                {
                    props.d.filter((p) => p.rating > 4).map((p) =>
                        <tr>
                            <td>{p.name}</td>
                            <td>{p.price + 1000}</td>
                            <td>{p.rating}</td>
                            <td><img src={p.image} width="100" /></td>

                        </tr>)
                }
            </table>
        </>)
}
export default Productcard