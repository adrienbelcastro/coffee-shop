export const fetchData = async (endpoint: string) => {
  try {
    const res = await fetch("http://localhost:3000/products");

    const data = await res.json();

    if (!data) {
      throw new Error("Error getting data");
    }

    return {
      props: { data },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);

    return [];
  }
};
