const photos= [{"date":"2021-03-12T09:44:07","originalName":"89496981_2631638337057168_8437069498980237312_o.jpg","photoId":1},
  {"date":"2021-03-12T09:44:07","originalName":"125948891_2800507206894014_2666693804350712741_n.jpg","photoId":2},
  {"date":"2021-03-12T09:44:07","originalName":"a34DIYZLgS8.jpg","photoId":3}]


const test=(photos.map(x=>{
  return{
    title:x.originalName,
    date: x.date,
    width: 4,
    height: 4,
    src: "neconeco".concat(String(x.photoId))
  }
}))
console.log("test", test);
console.log("photos", photos);
