function Pet (props) {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <h2>From: {props.from}</h2>
            <h2>Index: {props.id}</h2>
            <h2>Weight: {props.weight}</h2>
            <h2>When: {props.when}</h2>
        </div>
    );
};

export default Pet;