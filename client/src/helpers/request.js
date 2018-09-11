const Request = function(url){
  this.url = url;
};

Request.prototype.get = function(){
  return fetch(this.url)
    .then((response) => response.json());
};


Request.prototype.update = function(id, status){
  const body = {
    status: status
  }

  return fetch(`${this.url}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json'}
  })
};

module.exports = Request;
