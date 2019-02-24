$.ajax({
  url: 'http://192.168.204.236:9085/ldmcatalog/login',
  data: JSON.stringify({"user":"Administrator","password":"Administrator","namespace":"Native"}),
  type: 'POST',
  contentType: 'application/json; charset=utf-8',
  dataType: 'json'
});
$.ajax({
  url: 'http://192.168.204.236:9085/access/2/catalog/data/objects?q=core.name%3A*Customers*%20AND%20core.classType%3Acom.infa.ldm.relational.Table&offset=0&pageSize=20&sort=score%20desc&related=false',
  type: 'GET',
  headers: { 'Authorization': 'Bearer QWRtaW5pc3RyYXRvcjpBZG1pbmlzdHJhdG9y' }
});

