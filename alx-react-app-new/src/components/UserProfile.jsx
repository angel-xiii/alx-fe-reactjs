const UserProfile = (props) => {
    return (
        <div>
            <h2 style={{ color: 'red'}}>{props.name}</h2>
            <p>Age: <span style={{ textAlign= 'right' color: 'white'  }}>{props.age}</span></p>
            <p>Bio: {props.bio}</p>
        </div>
    );
};

export default Userprofile;