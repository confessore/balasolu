import { useRouter } from 'next/router';
import rexmit_mongo_client_promise from '../../lib/rexmit_mongo_client_promise'
import Pricing from 'components/rexmit/pricing';


export default function Page(props) {
  return (
    <>

    {props._id != "" && props.reserved &&
      <>
        <p>a reservation exists</p>
        <p>_id: {props._id}</p>
        <p>name: {props.name}</p>
        <p>expiration: {props.expiration}</p>
        <Pricing guild_id={props.id} />
      </>
    }
    {props._id != "" && !props.reserved && props.reservations_count < 10 &&
      <>
        <p>a reservation does not exist</p>
        <p>_id: {props._id}</p>
        <p>name: {props.name}</p>
        <p>expiration: {props.expiration}</p>
        <Pricing guild_id={props.id} />
      </>
    }
    {props._id != "" && !props.reserved && props.reservations_count >= 10 &&
      <>
        <p className='text-2xl'>oops! we are operating at capacity right now. please check back later</p>
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
  let reserved = is_reserved(expiration);
  console.log(reserved);
  let reservations_count = await count_guilds_with_reservations();
  return {
    props: { reserved, reservations_count, _id, id: context.query.id, name, expiration }, // will be passed to the page component as props
  };
}

async function count_guilds_with_reservations() {
  let rexmit_mongo_client = await rexmit_mongo_client_promise;
  let db = rexmit_mongo_client.db("rexmit");
  let collection = db.collection("guilds");
  const filter = { "expiration": { "$gt": new Date().toISOString() } };
  const count = await collection.countDocuments(filter);
  return count
}

function is_reserved(iso_date_string: string): boolean {
  return new Date(iso_date_string) > new Date()
}