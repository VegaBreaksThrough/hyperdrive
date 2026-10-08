---
tags: []
---
```dataview
LIST
FROM "HyperDrive"
WHERE file.name != this.file.name
SORT file.folder ASC, file.name ASC
```

Created: `= dateformat(this.file.ctime, "yyyy-MM-dd HH:mm")`
Modified: `= dateformat(this.file.mtime, "yyyy-MM-dd HH:mm")`

---


		
Created: `= dateformat(this.file.ctime, "yyyy-MM-dd HH:mm")`
Modified: `= dateformat(this.file.mtime, "yyyy-MM-dd HH:mm")`

---


