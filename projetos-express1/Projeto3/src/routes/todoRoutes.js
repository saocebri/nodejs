const {
    route
} = require('express/lib/application');
const Todo = require('../models/Todo.js');

const router = require('express').Router();

//Definir CRUD => Create(post), Read(get), Update(put), Delete(delete)

router.post('/', async (req, res) => {

    //req.body
    const description = req.body;

    if (!description) {
        res.status(422).json({
            error: 'Descrição da Tarefa é obrigatória!'
        });
        return;
    }

    //Try catch

    try {
        //Criar os dados
        await Todo.create(Todo)

        res.status(201).json({
            message: 'Parabéns, você sabe inserir uma tarefa'
        });
    } catch (error) {

        res.status(500).json({
            error: error
        })

    }

    //Read
    router.get('/', async (req, res) => {
        try {
            const todos = await Todo.find();
            res.status(200).json(todos)

        } catch (error) {
            res.status(500).json({
                error: error
            })
        }
    })

    // get para chamar 01 tarefa

    router.get('/:id', async (res, req) => {
        //Extrair o dados da requisi]ao peo req.params
        const id = req.params.id
        try {
            const todo = await Todo.findOne({
                _id:id

            });

            if(!todo){
                    res.status(422).json({
                        message:"Tarefa não encontrada"
                    });
                    return;
            }

            res.status(200).json(todo);

        } catch (error) {

            res.status(500).json({
                erro:error
            })


        };
    });

    //update (put  = atualizacao completa && path = atualizaçao parcial)

    router.put('./:id', async (res, req) => {

        const id = req.params.id;
        const description = req.body;

        const todo = description;

        try {

            const updateTodo = await Todo.updateOne({
                _id: id
            }, todo)

            if (updateTodo.matchedCount === 0) {
                res.status(422).json()
                message: "Tarefa não encontrada";
            };

            res.status(200).json(todo)

        } catch (error) {

            res.status(500).json({
                error: error
            });

        };

        //Delete 

        router.delete('./:id', async (res, req) => {
            const id = req.params.id;
            const todo = await Todo.findOne({
                _id: id
            });
            if (!todo) {
                res.status(422).json({
                    message: "Tarefa não encontrada"
                });
                return
            };

            try {

                await todo.deleteOne({
                    _id: id
                });

                res.status(200).json({
                    message:"Tarefa deletada com sucesso"
                });


            } catch (error) {

                res.status(500).json({
                    error: error
                });

            };

        });

    });

});