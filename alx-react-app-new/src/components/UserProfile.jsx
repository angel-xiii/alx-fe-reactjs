const UserProfile = (props) => {
    return (
        <div style= {{ border: '1px solid blue', padding: '10px', margin: '10px' }}>
            <h2 style={{ color: 'red'}}>{props.name}</h2>
            <p>Age: <span style={{ textAlign= 'right' color: 'white'  }}>{props.age}</span></p>
            <p>Bio: {props.bio}</p>
        </div>
    );
};

export default Userprofile;