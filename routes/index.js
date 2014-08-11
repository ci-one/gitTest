
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index1', { title: 'Express' });
};
exports.lease = function(req, res){
    res.render('index2',{title:'Y-Machine'});
}