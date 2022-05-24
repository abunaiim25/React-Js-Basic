import React, { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const User = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");



    const NameInput = (e) => {
        setName(e.target.value);
    }
    const AgeInput = (e) => {
        setAge(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParams({ name: name, age: age });
    }

    return (
        <div>
            <h1>User</h1>
            <form action="" onSubmit={handleSubmit}>

                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={NameInput} /><br />

                <label htmlFor="Name">Age</label>
                <input type="text" value={age} onChange={AgeInput} />

                <button type='submit'>Find user</button>
            </form>
            {/**
        <p>http://localhost:3000/user?id=101</p>
      <h1>{searchParams.get("id")}</h1>
      <h1>{searchParams.get("age")}</h1>
      <h1>{searchParams.get("name")}</h1>
       */}
        </div>
    );
};

export default User
