async function getData() {
  throw {
    message: "MY CUSTOM ERROR",
    name: "My new error",
    cause: "custom error",
  };

  return 1;
}

export default async function Home() {
  const data = await getData();

  return <div>Hello from home page. {data}</div>;
}
