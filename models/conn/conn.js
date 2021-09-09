const mongoose = require('mongoose');

function Conn(url,user,pass, banco){
    mongoose.connect( `${url}/${banco}`, {
        user: user,
        pass: pass,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("MongoDB connected");
    }).catch((err) => {
        console.error(err);
    });
}

module.exports = Conn;


// mongodb+srv://user:wzbcevvUOGVUTRir@bluedb.fa0f6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority



// mongodb://${url}:${porta}/${banco}