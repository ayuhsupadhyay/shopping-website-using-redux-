// Home.js

import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product"; 

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      const result = await fetch(API_URL);
      const productData = await result.json();
      setPosts(productData);
    } catch (error) {
      console.log("Error occurred while fetching data - Home page: ", error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {loading ? (
          <div className="flex justify-center">
            <Spinner />
          </div>
        ) : posts.length > 0 ? (
          posts.map((post) => (
            <Product key={post.id} post={post} />
          ))
        ) : (
          <p>No data found</p>
        )}
      </div>
    </div>
  );
};

export default Home;
