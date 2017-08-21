<import resource="classpath:/alfresco/templates/org/alfresco/import/alfresco-util.js">

function main()
{
   AlfrescoUtil.param('nodeRef');
   AlfrescoUtil.param('site', null);
   var documentDetails = AlfrescoUtil.getNodeDetails(model.nodeRef, model.site);
   if (documentDetails)
   {
      model.document = documentDetails.item;
      model.repositoryUrl = AlfrescoUtil.getRepositoryUrl();
      
      // ACME CUSTOM guest download link
      if (hasGuestPermission(documentDetails.item.node.permissions.roles)) {
    	  model.guestDownloadLink = getGuestDownloadLink(documentDetails);
      }
   }
   
   // Widget instantiation metadata...
   var documentActions = {
      id: "DocumentLinks", 
      name: "Alfresco.DocumentLinks",
      options: {
         nodeRef: model.nodeRef,
         siteId: model.site
      }
   };
   model.widgets = [documentActions];
}

function getGuestDownloadLink(details) {
	return details.metadata.serverURL + 
	'/alfresco/guestDownload/attach/' + 
	model.nodeRef.replace("://", "/") + 
	"/" + 
	details.item.node.properties["cm:name"]; 
}

function hasGuestPermission(roles) {
	var guestAllowed = false;
	for (var i = 0; i < roles.length; i++) {
		var role = roles[i];
		if (role.indexOf("ALLOWED;guest;") != -1) {
			guestAllowed = true;
			break;
		}
	}
	return guestAllowed;
}

main();