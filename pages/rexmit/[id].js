import { useRouter } from 'next/router';
import rexmit_mongo_client_promise from '../../lib/rexmit_mongo_client_promise'


export default function Page(props) {
  const router = useRouter();
  return (
    <>
      <p>_id: {props._id}</p>
      <p>name: {props.name}</p>
      <p>expiration: {props.expiration}</p>
    </>
  );
}

export async function getServerSideProps(context) {
  let rexmit_mongo_client = await rexmit_mongo_client_promise;
  let db = rexmit_mongo_client.db("rexmit");
  let collection = db.collection("guilds");
  const filter = { id: context.query.id };
  const document_with_id = await collection.findOne(filter);
  let _id = document_with_id["_id"].toString();
  let name = document_with_id["name"].toString();
  let expiration = document_with_id["expiration"].toString();
  return {
    props: { _id, name, expiration }, // will be passed to the page component as props
  };
}
