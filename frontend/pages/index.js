export default function Home({ message }) {
  return <h1>Message from .NET API: {message}</h1>;
}

export async function getServerSideProps() {
  const res = await fetch('http://backend:5000/api/hello');
  const data = await res.json();
  return { props: { message: data.message } };
}

