aws s3 sync _site s3://andreloureiro.net --region sa-east-1
aws cloudfront create-invalidation --distribution-id E26GPORVHMP7PF --paths /*

