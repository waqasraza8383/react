function User() {
    const users = [
        { name: "Waqas Raza", email: "10191844" },
        { name: "Waqas Raza", email: "10191844" },
        { name: "Waqas ali", email: "1014" },
    ]

    function fullName(user) {
        return user.name + " " + user.email
    }
    return (
        <>
        <div>

            <ul>

                {users.map((user, index) => (
                    <li>{user.name} is {user.email}</li>
               ) )}
            </ul>
                </div>
            {/* <h1>Name: {user.name}</h1>  
        <h1>Email: {user.email}</h1> */}

        </>
    )
}

export default User