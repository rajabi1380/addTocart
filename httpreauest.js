let baseUrl = "https://fakestoreapi.com";
const getData = async (path) => {
  try {
    let response = await fetch(`${baseUrl}/${path}`);
    let json = await response.json();
    return json;
  } catch (error) {
    alert("A error occured!");
  }
};
export { getData };
