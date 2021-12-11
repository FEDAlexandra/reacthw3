function Personal (props) {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <h2>My number: {props.number}</h2>
            <h2>Email: {props.email}</h2>
            <h2>Location: {props.city}</h2>
            <h2>Work: {props.work}</h2>
            <h2>Skills: {props.skills}</h2>
        </div>
    );
};

export default Personal;