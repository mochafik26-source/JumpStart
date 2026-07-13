export default async function Test() {
  const res = await fetch("http://127.0.0.1:5000");
  const data = res.json();
  return data;
}
