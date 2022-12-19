import { useRouter } from "next/router";
import React from "react";

export default function ProductId() {
  const param = useRouter();
  return (
    <>
      <div>ProductId{param.query.id}</div>
    </>
  );
}
