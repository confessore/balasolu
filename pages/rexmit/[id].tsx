import { useRouter } from 'next/router';
import rexmit_mongo_client_promise from '../../lib/rexmit_mongo_client_promise'
import Pricing from 'components/rexmit/pricing';


export default function Page(props) {
  return (
    <>
    {props._id != "" &&
      <>
        <p>_id: {props._id}</p>
        <p>name: {props.name}</p>
        <p>expiration: {props.expiration}</p>
        <Pricing guild_id={props.id} />
      </>
    }
    {props._id == "" &&
      <>
        <p className='text-2xl'>oops! that guild was not found in the database</p>
      </>
    }
    <p>{props.reservations_count}</p>
    <p></p>
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
  let reservations_count = await count_guilds_with_reservations();
  return {
    props: { reservations_count, _id, id: context.query.id, name, expiration }, // will be passed to the page component as props
  };
}

async function count_guilds_with_reservations() {
  let rexmit_mongo_client = await rexmit_mongo_client_promise;
  let db = rexmit_mongo_client.db("rexmit");
  let collection = db.collection("guilds");
  const filter = { "expiration": { "$gt": new Date().toISOString() } };
  console.log(filter);
  const count = await collection.countDocuments(filter);
  return count
}