# Database instructions

## Execute a JavaScript File
```bash
cd firma_docs_ms
mongosh
```
```mongosh
use firma_docs_db
load("./firma_docs_db/firma_docs_db.js")
```
confirmamos con
```monghsh
use firma_docs_db
db.docs.find()
```
https://www.mongodb.com/docs/mongodb-shell/write-scripts/#execute-a-javascript-file
