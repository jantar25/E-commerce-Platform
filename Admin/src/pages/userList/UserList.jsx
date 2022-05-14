import { useEffect } from "react";
import { Container,ListUser,Image,Button,TitleContainer,ButtonTop } from "./style";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { userRequest } from "../../requestMethode";

export default function UserList() {
  const [data, setData] = useState();


useEffect(()=>{
  const getUsers = async ()=>{

    try {
      const res = await userRequest.get("/users/?new=true");
      setData(res.data);
    } catch (error) {
      console.log(error)
    }
   
  }
  getUsers();
},[])
  const handleDelete = (id) => {
    setData(data.filter((item) => item._id !== id));
  };
  
  const columns = [
    { field: "_id", headerName: "ID", width: 100 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <ListUser>
            <Image src={params.row.img || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} alt="" />
            {params.row.username}
          </ListUser>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 180,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <Button>Edit</Button>
            </Link>
            <DeleteOutline style={{'color':'red'}}
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <Container>
      <TitleContainer>
        <h1 className="productTitle">Users</h1>
        <Link to="/newUser">
          <ButtonTop>Create</ButtonTop>
        </Link>
      </TitleContainer>
      {data && 
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row)=>row._id}
        pageSize={8}
        checkboxSelection
      />}
    </Container>
  );
}
