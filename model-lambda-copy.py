import os
import io
import boto3
import json
import csv  


ENDPOINT_NAME = os.environ['ENDPOINT_NAME']
runtime= boto3.client('runtime.sagemaker')

def lambda_handler(event, context):
    # TODO implement
    
    if (event.get("input_uri") is None):
        return {
            'statusCode': 400
        }
    elif (event.get("input_uri") == "connection_test"):
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': "*"
            },
            'body': json.dumps({ "result": "connection_successful" })
        }
    
    print("Received event: " + json.dumps(event, indent=2))
    
    data = json.loads(json.dumps(event))
    payload = data['data']
    print(payload)
    
    response = runtime.invoke_endpoint(EndpointName=ENDPOINT_NAME,
                                       ContentType='text/csv',
                                       Body=payload)
    print(response)
    result = json.loads(response['Body'].read().decode())
    print(result)

    
    return {
        'statusCode': 200,
        'body': result
    }