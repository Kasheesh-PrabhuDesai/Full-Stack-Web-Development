import {
  Button,
  Card,
  Grid,
  Link,
  List,
  ListItem,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { useContext } from "react";
import Layout from "../../src/components/layout";
import { Store } from "../../src/store";
import Image from "next/image";
import dynamic from "next/dynamic";
import axios from "axios";

function CartScreen() {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const handleUpdateCart = async (item: any, quantity: number) => {
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert("SORRY PRODUCT IS OUT OF STOCK");
      return;
    }
    dispatch({ type: "ADD_TO_CART", payload: { ...item, quantity } });
  };

  const handleDeleteItem = async (item: any) => {
    dispatch({ type: "DELETE_FROM_CART", payload: item });
  };

  return (
    <Layout title="Shopping Cart">
      <Typography component="h1" variant="h1">
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <div>
          Cart is empty. <Link href="/">Go Shopping</Link>
        </div>
      ) : (
        <Grid container spacing={1}>
          <Grid item md={9} xs={12}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item: any) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <Link href={`/product/${item.slug}`}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={50}
                            height={50}
                          ></Image>
                        </Link>
                      </TableCell>

                      <TableCell>
                        <Typography>{item.name}</Typography>
                      </TableCell>

                      <TableCell align="right">
                        <Select
                          value={item.quantity}
                          onChange={e => handleUpdateCart(item, e.target.value)}
                        >
                          {[...Array(item.countInStock).keys()].map(x => (
                            <MenuItem key={x + 1} value={x + 1}>
                              {x + 1}
                            </MenuItem>
                          ))}
                        </Select>
                      </TableCell>

                      <TableCell align="right">
                        <Typography>{item.price}</Typography>
                      </TableCell>

                      <TableCell align="right">
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => handleDeleteItem(item)}
                        >
                          x
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid md={3} xs={12}>
            <Card>
              <List>
                <ListItem>
                  <Typography variant="h2">
                    Subtotal (
                    {cartItems.reduce((a: number, c: any) => a + c.quantity, 0)}{" "}
                    items) : Rs{" "}
                    {cartItems.reduce(
                      (a: number, c: any) => a + c.quantity * c.price,
                      0
                    )}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Button variant="contained" color="primary" fullWidth>
                    Checkout
                  </Button>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      )}
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });
