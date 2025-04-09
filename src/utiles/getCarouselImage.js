const getContactNumber = async () => {
    try {
      const res = await fetch(
        `https://freecvbd.com/admin/api/carousel-slider/destination/2`,
        {
          cache: "no-store", // Ensure no caching
        }
      );
      const data = await res.json();
      return data;
    } catch (error) {
      return [];
    }
  };
  
  export default getContactNumber;
  