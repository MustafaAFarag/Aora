const { useState, useEffect } = require("react");

const useAppwrite = (fn) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fn();
      setData(response);
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Call fetchData directly here
  }, []); // Empty dependency array to run only once

  const refetch = () => fetchData();

  return { data, isLoading, refetch };
};

export default useAppwrite;
