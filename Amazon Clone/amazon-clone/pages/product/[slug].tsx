import {
  Link,
  Grid,
  List,
  ListItem,
  Typography,
  Card,
  Button,
} from "@material-ui/core";
import Layout from "../../src/components/layout";
import NextLink from "next/link";
import useStyles from "../../src/utils/style";
import Image from "next/image";
import db from "../../src/utils/connectDb";
import Product from "../../src/models/Product";
import { useContext } from "react";
import { Store } from "../../src/store";
import axios from "axios";
import { useRouter } from "next/router";

export default function ProductPage(props: any) {
  const { product } = props;
  const classes = useStyles();
  const { state, dispatch } = useContext(Store);
  const router = useRouter();

  if (!product) {
    return <div>Product Not Found</div>;
  }

  const handleAddToCart = async () => {
    const existItem = state.cart.cartItems.find(
      (x: any) => x._id === product._id
    );
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
a    if (data.countInStock < quantity) {
      window.alert("SORRY PRODUCT IS OUT OF STOCK");
      return;
    }

    dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity } });
    router.push("/cart");
  };

  return (
    <Layout title={product.name} description={product.description}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>
            <Typography>Back to products</Typography>
          </Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography component="h1" variant="h1">
                {product.name}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Category: {product.category}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Brand: {product.brand}</Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Rating: {product.rating} stars ({product.numReviews} reviews)
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Description: {product.description}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Price</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>Rs. {product.price}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Status</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      {product?.countInStock > 0 ? "In stock" : "Out of stock"}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  const { params } = context;
  const { slug } = params;
  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      product: db.convertDocToObj(product),
    },
  };
}
