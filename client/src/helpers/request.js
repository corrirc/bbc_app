const Request = function(url){
  this.url = url;
};

Request.prototype.get = function(){
  return fetch(this.url)
    .then((response) => response.json());
};

Request.prototype.post = function(payload) {
  return fetch(this.url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json'}
  })
    .then((response) => response.json());
};

Request.prototype.delete = function (id){
  return fetch(`${this.url}/${id}`, {
    method: 'DELETE'
  })
   .then((response) => response.json());
};

Request.prototype.update = function(id, payload){
  return fetch(`${this.url}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json'}
  })
    .then((response) => resonse.json());
};

module.exports = Request;
