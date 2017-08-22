# Alfresco Share Guest Download Link 
Use Case: allow guest users (users without Alfresco login) to download a document.

Alfresco has a guest download servlet that allows guest users to download a document that has guest permission. The download link is in the format of `http:/<host>:<port>/alfresco/guestDownload/<attach | direct>/workspace/SpacesStore/<nodeId>/<filename>`. It could be a challenge for end users to compose such URL. As a convenience, this module adds the guest download link in "Document Details" page. Users can simply copy & paste and share the link with guest users.

The implementation overrides document-links section in Share document-details component.

Project is created as Share jar/amp module with Alfresco SDK 3.0.1.

## Build
`mvn clean install`

## Deploy
Deploy jar or amp

## Run

1. Make sure an Alfresco repository is running
`http://localhost:8080/alfresco`
2. Start project

`run.bat` or `mvn clean install alfresco:run`

`http://localhost:8081/share`

Login: admin/admin

## Test
1. Share, add guest permission to a document
Document Details > Manage Permissions > Add User/Group > Search & add "guest" as "Site Consumer" > Save
2. Refresh Document Details page
"Share" section now has a second link
`http://localhost:8080/alfresco/guestDownload/attach/workspace/SpacesStore/1a0b110f-1e09-4ca2-b367-fe25e4964a4e/Project Contract.pdf`
3. Open a different browser (without login to Share) and enter the URL
The browser will prompt you "What do you want to do" with the document.

## References

* http://www.seedim.com.au/content/public-access-documents-share-site

* Repository webscript to get document/node details

`http://<host>:<port>/alfresco/s/slingshot/doclib2/node/workspace/SpacesStore/<nodeId>`

* Sample role/permission data in document details response
```
"roles": [
  "ALLOWED;GROUP_site_sandbox_SiteConsumer;SiteConsumer;INHERITED",
  "ALLOWED;GROUP_site_sandbox_SiteContributor;SiteContributor;INHERITED",
  "ALLOWED;guest;SiteConsumer;DIRECT",
  "ALLOWED;GROUP_site_sandbox_SiteCollaborator;SiteCollaborator;INHERITED",
  "ALLOWED;GROUP_site_sandbox_SiteManager;SiteManager;INHERITED"
],
```
