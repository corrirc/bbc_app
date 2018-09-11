const Request = function(url){
  this.url = url;
};

Request.prototype.get = function(){
  return fetch(this.url)
    .then((response) => response.json());
};


Request.prototype.update = function(id, status){
  return fetch(`${this.url}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(status),
    headers: { 'Content-Type': 'application/json'}
  })
};

module.exports = Request;
