rm -rf _site/node_modules
aws s3 sync _site s3://andrel.me --region sa-east-1