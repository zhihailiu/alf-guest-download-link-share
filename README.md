# Alfresco Share Guest Download Link 
Use Case: allow guest users (users without Alfresco login) to download a document.

Alfresco has a guest download servlet that allows guest users to download a document that has guest permission. The download link is in the format of `http://host:port/alfresco/guestDownload/attach/workspace/SpacesStore/{uuid}/{filename}`. As a convenience, this module calculates and adds the guest download link in "Document Details" page. Users can simply copy & paste and share the link with guest users.

## How to run & test?

1. Make sure an Alfresco repository is running
`http://localhost:8080/alfresco`
2. Start project

`run.bat` or `mvn clean install alfresco:run`

`http://localhost:8081/share`

Login: admin/admin

3. Add guest permission to a document
Document Details > Manage Permissions > Add User/Group > Search & add "guest" as "Site Consumer" > Save
4. Refresh Document Details page
"Share" section now has a second link
`http://localhost:8080/alfresco/guestDownload/attach/workspace/SpacesStore/1a0b110f-1e09-4ca2-b367-fe25e4964a4e/Project Contract.pdf`
5. Open a different browser (without login to Share) and enter the URL
The browser will prompt you "What do you want to do" with the document.

## References

* http://www.seedim.com.au/content/public-access-documents-share-site
