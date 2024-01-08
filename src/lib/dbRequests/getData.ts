export const fetchData = async (endpoint: string) => {
  try {
    const res = await fetch(`http://localhost:3000${endpoint}`);

    console.log("Full API Response:", res);

    const data = await res.json();

    if (!data) {
      throw new Error("Error getting data");
    }

    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);

    return [];
  }
};
