import asyncio
import aiohttp
import aiofiles
import os
from pathlib import Path
import argparse

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
}

async def download_file(session, url, folder):
    filename = url.split("/")[-1]
    filepath = Path(folder) / filename
    
    try:
        async with session.get(url, headers=HEADERS) as response:
            if response.status == 200:
                async with aiofiles.open(filepath, 'wb') as f:
                    await f.write(await response.read())
                print(f"Downloaded: {filename}")
            else:
                print(f"Failed to download {url} - Status Code: {response.status}")
    except Exception as e:
        print(f"Error downloading {url}: {e}")

async def bulk_download(file, folder):
    os.makedirs(folder, exist_ok=True)
    async with aiohttp.ClientSession() as session:
        async with aiofiles.open(file, 'r') as f:
            urls = await f.readlines()
            tasks = [download_file(session, url.strip(), folder) for url in urls if url.strip()]
            await asyncio.gather(*tasks)

def main():
    parser = argparse.ArgumentParser(description="Bulk download files from a list of URLs.")
    parser.add_argument("file", help="Path to the text file containing URLs")
    parser.add_argument("-o", "--output", default="downloads", help="Output directory (default: downloads)")
    args = parser.parse_args()
    
    asyncio.run(bulk_download(args.file, args.output))

if __name__ == "__main__":
    main()
