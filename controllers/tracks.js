const {tracksModel} = require("../models");

/***
 * Obtener lista de la base de datos!
 * @param { * }req
 * @param { * }res
*/
const getItems = async(req, res) => {
    const data = await tracksModel.find({});
    res.send({data});
};
/***
 * Obtener un detalle!
 * @param { * }req
 * @param { * }res
*/
const getItem=async(req, res)=>{};
/***
 * insertar un registro!
 * @param { * }req
 * @param { * }res
*/
const createItems=async(req, res)=>{
    const {body} = req
  console.log(body)
  const data=await tracksModel.create(body)
 
  res.send({data})
};
/***
 * actualizar un regitro!
 * @param { * }req
 * @param { * }res
*/
const updateItems=(req, res)=>{};
/***
 * eliminar un registro!
 * @param { * }req
 * @param { * }res
*/
const deleteItems=(req, res)=>{};

module.exports={getItems,getItem,createItems,updateItems,deleteItems}