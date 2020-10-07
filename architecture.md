# siteminder
- standalone 'api' functions for each of the email providers.
- easy to re-use by other services and self contained.
- mailhandler as function for everything mail related.

# constraints
- can only send using pre-approved sender.
- email volume limit

# resilience
- not very at the moment
- will attempt each provider only once.

# auditing
- placeholders in code for adding audit and possible error logging

# IMPORTANT
- change architecture to request based approach
    - requests get stored in a queue
    - then dequeued by email service
    - this gives guaranteed delivery and near 100% resilience
