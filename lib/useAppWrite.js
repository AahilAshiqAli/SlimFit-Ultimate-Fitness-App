import { useState, useEffect } from "react";
import { Alert } from "react-native";

// Why we are giving parameter, why not do GetAllPosts.
// It is because sometimes we may want filtering from data and sometimes want to use some query.
// We can pass the function in which we would run the query and everything would be the same
// So it is a custom function for getting custom data fro database

const useAppwrite = (fn) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fn();
      setData(res);
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => fetchData();

  return { data, loading, refetch };
};

export default useAppwrite;
