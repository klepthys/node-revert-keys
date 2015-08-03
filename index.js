module.exports = function(obj){
  var ret = {};
  for (var k in obj){
    for(var l in obj[k]){
      ret[obj[k][l]] = k;
    }

  }
  return ret;
}
