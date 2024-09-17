import time
import hashlib
from urllib.request import urlopen, Request
import argparse

parser = argparse.ArgumentParser(description="Web Tracker")
parser.add_argument("website", help="The website you want to track")
parser.add_argument("-i", "--interval", help="Time between each website check", type=int, default=30)
args = parser.parse_args()


url = Request(args.website, headers={'User-Agent' : "Mozilla/5.0"})

response = urlopen(url).read()

currentHash = hashlib.sha224(response).hexdigest()

print("Running")
time.sleep(10)

while True:
    try:
        response = urlopen(url).read()
        newHash = hashlib.sha224(response).hexdigest()

        if currentHash == newHash:
            continue
        else:
            print("Change occured")
            currentHash = newHash

        time.sleep(args.interval)

    except Exception as e:
        print(f"Error: {e}")


