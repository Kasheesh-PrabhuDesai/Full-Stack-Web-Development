import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import Link from "next/link";
import { useContext } from "react";
import Layout from "../src/components/layout";
import Product from "../src/models/Product";
import db from "../src/utils/connectDb";
import { Store } from "../src/store";
import axios from "axios";
import { useRouter } from "next/router";

export default function Home(props: any) {
  const { products } = props;
  const { state, dispatch } = useContext(Store);
  const router = useRouter();

  const handleAddToCart = async (product: any) => {
    const existItem = state.cart.cartItems.find(
      (x: any) => x._id === product._id
    );
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert("SORRY PRODUCT IS OUT OF STOCK");
      return;
    }

    dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity } });
    router.push("/cart");
  };
  return (
    <Layout>
      <div>
        <h1>Product</h1>
        <Grid container spacing={3}>
          {products?.map((product: any) => (
            <Grid item md={4} key={product.name}>
              <Card>
                <Link href={`/product/${product.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component={"img"}
                      image={product.image}
                      title={product.name}
                    />
                    <CardContent>
                      <Typography>{product.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
                <CardActions>
                  <Typography>Rs. {product.price}</Typography>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}

//fetch all the products from the mongo db instead of the static data route
export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
