const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get("id");

if (typeof id === "string") {
  console.log(id.toUpperCase());
}
