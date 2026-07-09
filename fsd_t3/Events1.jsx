function Events1() {
    // const handleclick = () => {
    //     alert('welcome');
    // }
    const handleclick = (n) => {
        alert(`welcome ${n}`);
    }
    return (
        <>
            {/* <button onClick={handleclick}>Click Here</button> */}
            <button onClick={()=>handleclick('ABC')}>Click Here</button>
        </>
    )
}export default Events1