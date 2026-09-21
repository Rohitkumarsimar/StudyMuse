import dotenv from "dotenv";
dotenv.config();
import { S3Client } from "@aws-sdk/client-s3";
import {PutObjectCommand} from "@aws-sdk/client-s3";
import fs from 'fs'
import {HeadBucketCommand} from "@aws-sdk/client-s3";
export const r2Client = new S3Client({
  region: "auto",
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

// const result = await r2Client.send(new ListBucketsCommand({}));
// console.log(result.Buckets);
r2Client.send(new HeadBucketCommand({ Bucket: process.env.R2_BUCKET_NAME }))
    .then(() => console.log("Bucket exists and is accessible."))
    .catch((error) => console.error("Bucket does not exist or is not accessible:", error));

    r2Client.send(new PutObjectCommand({
        Bucket: process.env.R2_BUCKET_NAME,
        Key:  "test/kratos.png",
        Body: fs.createReadStream("./src/config/kratos.png"),
        ContentType: "image/png"
    })).then(()=>{console.log("File send successfully")})
    .catch((err)=>{console.log("Error happened"),err})