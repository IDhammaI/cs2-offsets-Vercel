import requests

def main_handler(event, context):
    url = "https://raw.githubusercontent.com/a2x/cs2-dumper/main/output/offsets.json"
    response = requests.get(url)
    return {
        "isBase64Encoded": False,
        "statusCode": 200,
        "headers": {"Content-Type": "application/json"},
        "body": response.text
    }
