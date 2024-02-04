import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Sorry, the requested page is not found</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
