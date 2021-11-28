import {Container,ListItem,Image,ButtonEdit} from './style'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { getProducts } from '../../Redux/apiCalls';

export default function ProductList() {
  const [data, setData] = useState(productRows);
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products);

  useEffect(() => {
    getProducts(dispatch)
  }, [dispatch])

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <ListItem>
            <Image src={params.row.img} alt="" />
            {params.row.title}
          </ListItem>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <ButtonEdit>Edit</ButtonEdit>
            </Link>
            <DeleteOutline style={{'color':'red'}}
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <Container>
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row)=>row._id}
        pageSize={8}
        checkboxSelection
      />
    </Container>
  );
}
