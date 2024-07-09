const getAllProducts = async (req, res) =>{
    res.status(200).json({msg: "i am getAllproduts"});
}

const getAllProductsTesting = async (req, res) =>{
    res.status(200).json({msg: "i am getAllprodutsTesting"});
}

module.exports = {getAllProducts, getAllProductsTesting}