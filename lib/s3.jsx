const { S3Client } = require("@aws-sdk/client-s3");
const s3 = new S3Client({
    region: "us-east-1",
   credentials: {
       accessKeyId: process.env.S3_ID,
       secretAccessKey: process.env.S3_SECRET,
   },
   endpoint: process.env.S3_ENDPOINT,
   forcePathStyle: true,
});

export default s3