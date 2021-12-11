 function Component (props) {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <h2>Prodecers: {props.producer}</h2>
            <h2>Year: {props.year}</h2>
            <h2>Studio: {props.studio}</h2>
        </div>
    );
};

export default Component;