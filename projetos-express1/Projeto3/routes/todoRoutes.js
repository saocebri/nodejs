const {
    route
} = require('express/lib/application');
const Todo = require('../models/Todo');

const router = require('express').Router();

//Definir CRUD => Create(post), Read(get), Update(put), Delete(delete)

router.post('/', async (req, res) => {

    //req.body
    const description = req.body;

    if (!description) {
        res.status(422).json({
            error:'Descrição da Tarefa é obrigatória!'
        });
        return;
    }

    //Try catch

    try {
        //Criar os dados
        await Todo.create(todo)    
        
        res.status(201).json({
            message:'Parabéns, você sabe inserir uma tarefa'
        });
    } catch (error) {

        res.status(500).json({
            error: error
        })
        
    }

    //Read
    router.get('/', async(req, res)=>{
        try {
            const todos = await Todo.find();
            res.status(200).json(todos)
            
        } catch (error) {
            res.status(500).json({
                error:error
            })
        }
    })

    router.get('/:id', async(res, req)=>{
        //Extrair o dados da requisi]ao peo req.params
        const id = req.params.id
        try {
            const todo = await Todo.findOne({
                
            })
            
        } catch (error) {
            
        }
    }
    )



});