import React from 'react'

const Reg =({age, dateOfBirth, email, firstName, lastName, phoneNo})=>
{
    return(
        <div>

            <div>
                <h3>first Name : {firstName}</h3>
            </div>
            <div>
                <h3>last Name : {lastName}</h3>
            </div>
            <div>Phone Number : {phoneNo}</div>
            <div>
                Email : {email}
            </div>
            <div>
                Date of Birth : {dateOfBirth}
            </div>
            <div>
                Age : {age}
            </div>

        </div>
    )
}

export default Reg