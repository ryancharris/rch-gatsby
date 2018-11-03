import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

const Index = () => (
  <Layout>
    <h1>Home Page</h1>
    <Link to="/about/">About</Link>
    <Link to="/contact/">Contact</Link>
    <Link to="/blog/">Blog</Link>
  </Layout>
);

export default Index;
