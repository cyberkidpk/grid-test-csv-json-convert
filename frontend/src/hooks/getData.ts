import { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';




const useAxios = (axiosParams: AxiosRequestConfig) => {
  axiosParams = {
    url:"http://localhost:3200/getdata",
    headers: {
        "Content-type": "application/json"
    },
    params:{
      urlToSeek:"cm29AUG2022bhav.csv.zip"
    }
  };

  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

 const fetchData =  async (passingParams: AxiosRequestConfig) => {
   // params.url = `http://localhost:3200/${params.url}`

    try {
      const result = await axios.request(passingParams);
      setResponse(result);
    } catch( err: any ) {
      setError( err );
    } finally {
      setLoading(false);
    }
 };

useEffect(() => {
  fetchData(axiosParams);
},[]);

 return { response, error, loading };
}
export default useAxios;