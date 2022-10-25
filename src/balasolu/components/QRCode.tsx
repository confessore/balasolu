import { Component } from "react"
import { toDataURL } from "qrcode";


interface IProps {
    url: string
}

interface IState {
    url: string
}

export default class QRCode extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            url: props.url
        }
    }

    render() {
        const { url } = this.state;
        return (<div>{url}</div>)
    }
}

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    //Create fetch's options
  
   //Fetch data from the API
   const res = await fetch('http://localhost:3000/api/hello');
   const data = await res.json();
   console.log(data);

   const google = 'http://google.com';
   toDataURL(google, (err, src) => {
    console.log(src);
   });
  
    // Pass data to the page via props
    return { props: { data } }
  }