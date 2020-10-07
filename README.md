# siteminder

ASSUMPTIONS
- minimal helper and add-on js libs used
- no unit tesdting added yet

TODO
- extend model validation
- optional add body validation to api integration in AWS
- add auth
- prioritise email services through environment variables
- inject environment variables in pipeline 'API_KEY' instead of hardcoding
- *add unit testing*
- *solution uses small easily testable modules*

# build
1. clone solution
2. npm run build
3. create AWS S3 bucket <BUCKET>
4. zip and copy from .dist folder to:
    - <BUCKET>/mailHandler.zip
    - <BUCKET>/apiSendgrid.zip
    - <BUCKET>/apiMailgun.zip
5. AWS Cloudformation deploy.yaml
    - pSourceBucket: <BUCKET>
6. Update lambda variables
    - apiSendgrid (API_KEY)
    - apiMailgun (API_DOMAIN,API_KEY)
7. Find your stack!
    - console.aws.amazon.com/cloudformation
    - post to you api using sample below
    - *remember to replace sample values with your account values*

  # test
- HTTP POST
- https://documenter.getpostman.com/view/1964137/TVRhcUeG

