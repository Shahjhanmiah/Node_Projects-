import { useEffect, useState } from "react";

const AllnewUser = () => {
    const [alluser, AllnewUser] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/Register')
            .then(res => res.json())
            .then(data => AllnewUser(data))
    }, [])
    return (
        <div>
      
      <h1 className="text-5xl text-center font-semibold"> Total Item:{alluser.length}</h1>
      <div className="overflow-x-auto w-full ">
            <table className="table w-full text-center ">
                {/* head */}
                <thead>
                    <tr className="bg-yellow-500">
                    
                        <th>USER Name</th>
                        <th>USER EMAIL</th>
                        <th>USER PASSWORD</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        alluser.map((item, ) => <tr
                            key={item._id}
                        >
                            <td>
                            {item.name}
                            </td>
                            <td >
                              
                            {item.email}  
                            </td>
                            <td>
                            {/* {item.password}  */}
                            </td>
                            <td> </td>
                           
                            
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    </div>
);
};
    


export default AllnewUser;