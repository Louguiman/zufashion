function getCatalogueById(id:number, db:[]) {

  const Data = db.filter((item) => {
    if (item.id === id) {
      return item;
    }

  });
  // console.log("donne :\n",Data);
  return Data[0]
  
}

export default getCatalogueById;
