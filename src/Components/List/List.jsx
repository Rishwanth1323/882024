export const Olist = () =>{
    return (
        <>
        <ol>
            <List/>
        </ol>
        </>
    )
}
export const Ulist =() =>{
    return (
        <>
        <ul>
        <List/>
        </ul>
        </>
    )
}

const List = () => {
    const fruits = ["apple", "mango", "sapota"];
    return (
        <>
            {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
            ))}
        </>
    );
};
// const ulist



