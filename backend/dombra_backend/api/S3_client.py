import asyncio



class S3Client:
    def __init__(
            self,
            access_key: str,
            secret_key: str,
            bucket_name: str,
            endpoint_url: str
    ):
        self.config = {
            "aws_access_key_id": access_key,
            "aws_secret_access_key": secret_key,
            "endpoint_url":endpoint_url,
        }
        self.bucket_name = bucket_name

