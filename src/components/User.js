function User(props) {
    return (
        <div className='user'>
            <p>Name: {props.name}</p>
            <p>Profession: {props.profession}</p>
            <p>Email: {props.email} {props.show}</p>
        </div>
    );
}

export default User;