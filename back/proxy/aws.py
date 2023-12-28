import boto3

from botocore.exceptions import ClientError
from dotenv import dotenv_values

def upload_file_s3(file_name: str):
    try:
        bucket_name = dotenv_values(".env")["AWS_BUCKET"] 
        secret = dotenv_values(".env")["AWS_ACCESS_SECRET"]
        key = dotenv_values(".env")["AWS_ACCESS_KEY"]
        region = dotenv_values(".env")["AWS_REGION"]

        s3 = boto3.session.Session( aws_access_key_id= key, aws_secret_access_key= secret, region_name = region).client("s3")
        s3.upload_file(file_name,bucket_name, file_name)
        s3_url = f"http://{bucket_name}.s3.amazonaws.com/{file_name}"
        return s3_url
    except ClientError as e:
        return None