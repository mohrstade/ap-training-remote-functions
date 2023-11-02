const functions = require('@google-cloud/functions-framework');
const fetch = require('node-fetch');

functions.http('enrich_ga4_data', async(req, res) => {
    try {
        // BigQuery Call
        // start_date, city
        //req.body.calls [[1],[2],[3]]
        const int_nums = req.body.calls;
        console.log(int_nums);
        console.log(typeof(int_nums));

        Promise.all(int_nums.map(async(element) => {
            element[0] += 5;
            return element[0];
        })).then(data => {
            const replies = data.map(x=>{
                return x;
            })
            console.log(data);
            res.json({replies})
        });
        
        

    } catch (error) {
        console.log(error);
        res.status(404).json({"type":error})
    }
});