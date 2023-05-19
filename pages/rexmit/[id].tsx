import { useRouter } from 'next/router';
import rexmit_mongo_client_promise from '../../lib/rexmit_mongo_client_promise'
import Paypal from 'components/rexmit/paypal';


export default function Page(props) {
  return (
    <>
    {props._id != "" &&
      <>
        <p>_id: {props._id}</p>
        <p>name: {props.name}</p>
        <p>expiration: {props.expiration}</p>
        <Paypal guild_id={props.id} />
      </>
    }
    {props._id == "" &&
      <>
        <p className='text-2xl'>oops! that guild was not found in the database</p>
      </>
    }
    </>
  );
}

export async function getServerSideProps(context) {
  let rexmit_mongo_client = await rexmit_mongo_client_promise;
  let db = rexmit_mongo_client.db("rexmit");
  let collection = db.collection("guilds");
  const filter = { id: context.query.id };
  const document_with_id = await collection.findOne(filter);
  let _id = "";
  let name = "";
  let expiration = "";
  if (document_with_id != null) {
    _id = document_with_id["_id"].toString();
    name = document_with_id["name"].toString();
    expiration = document_with_id["expiration"].toString();
  }
  return {
    props: { _id, id: context.query.id, name, expiration }, // will be passed to the page component as props
  };
}
