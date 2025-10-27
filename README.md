# NitHub

##how it works
### step1 -- The Index.html file contains the script for the document upload.
- user can upload `.txt, .doc, .docx, or .pdf` as instructed.
- On submit --- file is sent via `POST` to the **document api** *i commented where you'd drop that sir.*
            |-- on success the user is redirected to the `images.html` page.

  ### step2 -- The images.html file conatins the script for image upload.
  - user can upload **one or more images** *please let me know if this works sir. we can do a testing togther after you add the apis*.
  - On submit --- image is sent via `POST` to the **image api** *commented this too, sir*
              |-- on success user is directed to the `result.html` page.

      ### step3 -- result.html page
    - displays sucess message.
