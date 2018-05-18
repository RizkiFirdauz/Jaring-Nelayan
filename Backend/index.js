const express     = require('express')
const PORT        = process.env.PORT || 9999
var app           = express();
const cors        = require('cors');
const bodyParser  = require('body-parser');

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://rizkifirdaus:12345@ds015780.mlab.com:15780/destinasi';

MongoClient.connect(url, function(err, db) {
    console.log("Terhubung ke MLab");
});

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('<h1>Your backend is already!</h1>')
})

app.get('/data', (req, res)=>{
  MongoClient.connect(url, (err, db)=>{
      var collection = db.collection('nelayan')
      collection.find({}).toArray((err, docs)=>{
          console.log(docs);
          res.send(docs);
      });
    });
});

app.get('/data/kategori/:namaikan', (req, res)=>{
  MongoClient.connect(url, (err, db)=>{
      var collection = db.collection('nelayan')
      collection.find({nama:req.params.namaikan}).toArray((err, docs)=>{
          console.log(docs);
          res.send(docs);
      });
    });
});

app.get('/data/:kategori', (req, res)=>{
  MongoClient.connect(url, (err, db)=>{
      var collection = db.collection('nelayan')
      collection.find({kategori:req.params.kategori}).toArray((err, docs)=>{
          console.log(docs);
          res.send(docs);
      });
    });
});

app.get('/login', (req, res)=>{
    MongoClient.connect(url, (err, db)=>{
        var collection = db.collection('login')
        collection.find({}).toArray((err, docs)=>{
            console.log(docs);
            res.send(docs);
        });
      });
  });

app.post('/login/masuk', (req, res)=>{
    MongoClient.connect(url, (err, db)=>{
        var collection = db.collection('login')
        collection.find({username:req.body.username}).toArray((err, docs)=>{
            console.log(docs);
            res.send(docs);
        });
      });
  });

app.post('/data', (req, res)=>{
  MongoClient.connect(url, (err, db)=>{
      var data = {nama:req.body.nama, detail:req.body.detail, kategori:req.body.kategori, harga:req.body.harga, gambar:req.body.gambar, tpi:req.body.tpi, alamat:req.body.alamat, city:req.body.kota};
      var collection = db.collection('nelayan');
      collection.insert(data, (err, result)=>{
          console.log(result);
          res.send(result);
      });
    });
});

app.post('/register', (req, res)=>{
    MongoClient.connect(url, (err, db)=>{
        var data = {username:req.body.username, email:req.body.email, password:req.body.password};
        var collection = db.collection('login');
        collection.insert(data, (err, result)=>{
            console.log(result);
            res.send(result);
        });
      });
  });

app.delete('/data/:nama', (req, res)=>{
  MongoClient.connect(url, (err, db)=>{
      var data = {nama:req.params.nama};
      var collection = db.collection('nelayan');
      collection.deleteOne(data, (err, result)=>{
          console.log(data.nama);
          res.send(result);
      });
    });
});

app.put('/data/:nama', (req, res)=>{
  MongoClient.connect(url, (err, db)=>{
      var data = {nama:req.params.nama};
      var data2 = {kategori:req.body.kategori,harga:req.body.harga};
      var collection = db.collection('nelayan');
      collection.updateOne(data,{$set: data2}, (err, result)=>{
          console.log(data2);
          res.send(result);
      });
    });
});

app.listen(PORT, () => {
  console.log(`Listening on ${ PORT }`)
})
