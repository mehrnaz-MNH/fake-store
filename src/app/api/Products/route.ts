import { NextResponse } from "next/server";
import axios from "axios";
const PRODUCTS_API_URL = "https://fakestoreapi.com/products";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

type Products = Product[];

const fetchProducts = async () => {
  const response = await axios.get(PRODUCTS_API_URL);

  const products: Products = response.data.map((item: Product) => ({
    id: item.id,
    title: item.title,
    price: item.price,
    description: item.description,
    category: item.category,
    image: item.image,
  }));

  return products;
};

export async function GET() {
  try {
    const products: Products = await fetchProducts();
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `Failed to fetch product list1 , Error Message : ${error}` },
      { status: 500 }
    );
  }
}
