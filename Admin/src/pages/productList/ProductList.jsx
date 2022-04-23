import {Container,ListItem,Image,ButtonEdit,TitleContainer,ButtonTop} from './style'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { deleteProduct, getProducts } from '../../Redux/apiCalls';

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products);

  useEffect(() => {
    getProducts(dispatch)
  }, [dispatch])

  const handleDelete = (id) => {
    deleteProduct(id,dispatch)
  };
  console.log(products)
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
            <Link to={"/product/" + params.row._id}>
              <ButtonEdit>Edit</ButtonEdit>
            </Link>
            <DeleteOutline style={{'color':'red','cursor':'pointer'}}
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
        <h1 className="productTitle">Products</h1>
        <Link to="/newproduct">
          <ButtonTop>Create</ButtonTop>
        </Link>
      </TitleContainer>
      <DataGrid
        autoHeight 
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row)=>row._id}
        pageSize={6}
        checkboxSelection
      />
    </Container>
  );
}
