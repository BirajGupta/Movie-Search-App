var express=require("express");
var app=express();
var request=require("request");
app.use(express.static("public"));
app.set("view engine","ejs");


app.get("/",function(req,res){
	res.render("search");
})

app.get("/result",function(req,res){
	var newmovie=req.query.moviename;
	var url="https://www.omdbapi.com/?s="+newmovie+"&apikey=thewdb"
	request(url,function(error, response, body){
					if(!error&&response.statusCode==200){
						var parsedata=JSON.parse(body);
						res.render("results",{data:parsedata});
						console.log(newmovie);
					}else{
						console.log("error");
					}
	});
});





app.listen(3000,function(){
	console.log("Movie app has started");
})