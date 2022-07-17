import React,{useState, useEffect} from 'react'
import { useMatch, useNavigate } from 'react-router-dom'
import axios from 'axios'
import PrintElement from './PrintElement'
import "../App.css"

const PrintPaper = () => {
    
    const [print, setprint] = useState()

    const match = useMatch('/:id/ticket')

    useEffect(()=> 
    {
      axios.post("url", 
      {data : 'data'},
      {
        url: "home",
  method: "post",
  baseURL: "http",
  // transformRequest?: AxiosRequestTransformer | AxiosRequestTransformer[];
  // transformResponse?: AxiosResponseTransformer | AxiosResponseTransformer[];
  headers: 
  {
    "context-type"  : "application/json"
  },
  // params?: any;
  // paramsSerializer?: (params: any) => string;
  //data?: D;
  timeout: 12,
  timeoutErrorMessage: "it took too long",
  withCredentials: true,
  // adapter?: AxiosAdapter;
  auth: {username : "gabriel", password:"911922"},
  responseType: "json",
  responseEncoding: 'utf-8',
  xsrfCookieName: "name",
  xsrfHeaderName: "great",
  // onUploadProgress?: (progressEvent: any) => void;
  // onDownloadProgress?: (progressEvent: any) => void;
  // maxContentLength?: number;
  // validateStatus?: ((status: number) => boolean) | null;
  // maxBodyLength?: number;
  // maxRedirects?: number;
  // socketPath?: string | null;
  // httpAgent?: any;
  // httpsAgent?: any;
  // proxy?: AxiosProxyConfig | false;
  // cancelToken?: CancelToken;
  // decompress?: boolean;
  // transitional?: TransitionalOptions;
  // signal?: AbortSignal,
  insecureHTTPParser: true
      }
      )
    })
    
    useEffect(() => {
      axios.get(`http://localhost:3002/${match.params.id}/ticket`)
      .then(res => 
        {
          console.log(match.params.id)
           console.log(res)
            let data = res.data
            setprint(<PrintElement date={data.date} firstTeam={data.firstTeam} 
                                  price={data.price}  secondTeam={data.secondTeam} sitNo={data.sitNo} 
                                    stadium={data.stadium} time={data.time} userId={data.userId} ticket={data.ticket}  />)
        })
      .catch(e => console.log(e))
    
     
    }, [])
    

  return (
    <div>
        {print}
    </div>
  )
}

export default PrintPaper