function Fruits() {
    const fruits = ["Apple", "Banana", "Cherry"];

    return (
        <>
            <ul>
                {fruits.map((fruit, index) => (
                    // <li key={index}>{index} - {fruit}</li>
                    <li>{fruit} {index}</li>
                ))}
            </ul>
        </>
    );
}
export default Fruits;
