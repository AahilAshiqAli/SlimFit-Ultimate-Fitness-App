import { useState, useEffect } from "react";
import { GetAllPosts } from "./appwrite";

const useAppWrite = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //becuase you cannot directly use an async function, you would have to nest async one inside another
    const fetchData = () => {
      setIsLoading(true);
      GetAllPosts()
        .then((response) => {
          // Handle the response
          setData(response);
        })
        .catch((error) => {
          Alert.alert("Error", error.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
    // calling it everytime useEffect is called
    fetchData();
  }, []);
  return data;
};

export default useAppWrite;
