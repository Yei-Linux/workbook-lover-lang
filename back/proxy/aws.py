import logging
import boto3

from botocore.exceptions import ClientError
from dotenv import dotenv_values

def upload_file_s3(file_name: str):
    try:
        bucket_name = dotenv_values(".env")["AWS_BUCKET"]
        region = dotenv_values(".env")["AWS_REGION"]
        s3 = boto3.client("s3")
        s3.upload_file(file_name,bucket_name, file_name)
        s3_url = f"http://s3-{region}-.amazonaws.com/{bucket_name}/{file_name}"
        return s3_url
    except ClientError as e:
        print(e)
        return None