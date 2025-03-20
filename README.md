# JFK
An archive.gov link extractor and file downloader. Made for the "[JFK Assassination Records - 2025 Documents Release](https://www.archives.gov/research/jfk/release-2025)". 

## Prerequisites
- [Tampermonkey](https://www.tampermonkey.net/), [Violentmonkey](https://violentmonkey.github.io/), or other Userscript manager
- [Python](https://www.python.org/)

## Instructions 
### Link Extractor Installation (Tampermonkey)
1. Open [Tampermonkey](https://www.tampermonkey.net/)
2. Click "Create New Script"
<img width="200" alt="Tampermonkey" src="https://github.com/user-attachments/assets/1f0ae7ed-3652-45ae-b18f-5c9585b2b5a4" />

3. Drag and Drop "archiveExtractor.js" into the script window
4. On the "Userscript installation" page click "Install"
<img width="200" alt="Tampermonkey 2" src="https://github.com/user-attachments/assets/64fd11a0-d1a1-470c-ac63-47eb1b58b649" />

5. You're Done
### Link Extractor Installation (Violentmonkey)
1. Open [Violentmonkey](https://violentmonkey.github.io/)
2. Click the "+" icon
<img width="200" alt="Violentmonkey" src="https://github.com/user-attachments/assets/cf1cf70e-1f29-4fcc-8c0b-a3dd99a54203" />

3. Drag and Drop "archiveExtractor.js" into the script window
4. On the "Installing script" page click "Install"

<img width="200" alt="Screen Shot 2025-03-19 at 7 04 13 PM" src="https://github.com/user-attachments/assets/2e2a31b0-9771-4c2c-918a-0a5c1d9e1cfd" />

5. You're Done
### Link Extractor Usage
1. Navigate to https://www.archives.gov/research/jfk/release-2025
2. Click "Show All entries"

<img width="200" alt="Screen Shot 2025-03-19 at 7 08 38 PM" src="https://github.com/user-attachments/assets/50e1237d-91be-43bb-b5c2-45c696b96239" />

3. Click the "Start Script" button

<img width="118" alt="Screen Shot 2025-03-19 at 7 11 02 PM" src="https://github.com/user-attachments/assets/56f4b0dd-612b-4a0c-8ae3-b731a7a4c541" />

4. Click "Download Links"

<img width="169" alt="Screen Shot 2025-03-19 at 7 12 10 PM" src="https://github.com/user-attachments/assets/b04c678f-eb8c-426c-b808-739f06b6af42" />

5. You're Done 

### Downloader Instructions
1. Download "dwn.py" and "requirements.txt"
2. Make a new directory (eg. "JFK", "Files", etc..")
3. Place "dwn.py", "requirements.txt", and your "JFK_Release_Links.txt" into said directory
4. Open your Terminal or Command Prompt
5. `cd` into your newly made directory
6. Use `ls` or `dir` to confirm that you are in the directory with the files
7. Run ```pip install -r requirements.txt```
8. Run ```python3 dwn.py JFK_Release_Links.txt```
9. You're Done!








