const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/subashgautam', 
{   
    useNewUrlParser: true, 
    useUnifiedTopology: true
});



