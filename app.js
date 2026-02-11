const express = require('express')
const fs = require('fs');
const app = express();
let list = [];

let readFile = fs.readFileSync('data.json' , 'utf-8')


   list = JSON.parse(readFile)

app.get("/", (req,res) => {
    res.render("overview.ejs", { list});
});
app.get('/product/:id', (req, res) => {
  const id = Number(req.params.id);
  const product = list.find(el => el.id === id);

  res.render('product.ejs', { product });
});


// app.get("/getData", (req, res)=>{
//     const data = req.query;
//     console.log(data);
//      console.log(list);
//     if(edit != null){
//       list[edit] = data
     
//     }else{
//       list.push(data);    
//     }
//     fs.writeFileSync("data.json", JSON.stringify(list))
//     res.redirect("/")
   
// });
// app.get('/deleteData/:deleteId' , (req , res) => {
//     const id = req.params.deleteId
//     list.splice(id , 1)
//     fs.writeFileSync('data.json', JSON.stringify(list))

//     res.redirect('/')
// })
// app.get("/updatedata/:id", (req, res) => {
//    edit = req.params.id;
//    const editid = list[edit]
//       console.log(editid);
//       // res.redirect("/")
//       res.render("overview.ejs", {editid, list})
      
// }); 

app.listen(4800, () =>{
   console.log("server: 4800");
   
})