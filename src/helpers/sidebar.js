const Stats=require('./stats');
const Comments=require('./comments');
const Images=require('./images');

module.exports=async viewModel =>{
    const results = await Promise.all([
        Stats(),
        Images.popular(),
        Comments.newest()
    ]);
    viewModel.sidebar={
        stats:results[0],
        popular:results[1],
        comments:results[2]
    };

    return viewModel;
}