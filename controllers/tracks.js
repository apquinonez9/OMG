const { tracksModel } = require('../models');
/***
 * Obtener lista de datos
 * @param { * }req
 * @param { * }res
 */
const getItems = async(req, res) => {
    const data = await tracksModel.find({});;
    res.send({data});
};


/***
 * Obtener un detalle
 * @param { * }req
 * @param { * }res
 */
const getItem = (req, res) => {};
/***
 * insertar registro
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
 * actualizar registros
 * @param { * }req
 * @param { * }res
 */
const updateItems = (req, res) => {};
/***
 *eliminar registros
 * @param { * }req
 * @param { * }res
 */
const deleteItems = (req, res) => {};
module.exports = { getItems, getItem, createItems, updateItems, deleteItems };
