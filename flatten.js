function flatten(arrayIntergers) {
  if (!Array.isArray(arrayIntergers))
    return arrayIntergers;
      
  return arrayIntergers.reduce(function (list, item){
    return list.concat(flatten(item));
  }, []);
}

var arrayIntergers = [[1,2,[3]],4];
console.log(flatten(arrayIntergers));
console.log([[1,2,[3]],4]);

