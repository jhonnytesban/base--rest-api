const express = require('express')

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const getAllUser = (req, res) => {
  const user = {
    name: "Maria"
  }
  res.json(user)
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const createUser = (req, res) => {
  const user = req.body
  user.id = 4256
  const result = {
    message: "Usuario creado",
    user
  }
  res.json(result)
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const putUser = (req, res) => {
  const { id } = req.params
  const user = req.body
  user.id = id
  const result = {
    message: `Usuario ${id} actualizado`,
    user
  }
  res.json(result)
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const patchUser = (req, res) => {
  const { id } = req.params
  const user = req.body
  user.id = id
  const result = {
    message: `Usuario con id ${id} patcheado`,
    user
  }
  res.json(result)
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const deleteUser = (req, res) => {
  const { id } = req.params
  const user = {
    message: `Usuario con id ${id} ha sido eliminado`
  }
  res.status(200).json(user)
}

module.exports = {
  getAllUser,
  createUser,
  putUser,
  patchUser,
  deleteUser
}