const Joi = require('joi')
const express = require('express')
const app = express()

app.use(express.json())

const boards = [
    {id: 1, stage: 1, title: "Create a New Project"},
    {id: 2, stage: 1, title: "Create a New Project"},
    {id: 3, stage: 1, title: "Create a New Project"}
]


app.post('/boards', (req, res) => {
    const board = {
        id: boards.length + 1,
        stage: 1,
        title: req.body.title
    }

    boards.push(board)
    console.log(boards)
    return res.send('New Board Item Successfully added')
})

app.put('/boards/:id', (req, res) => {

    requestStage = parseInt(req.body.stage)

    const board = boards.find((board) => {
        return board.id === parseInt(req.params.id)
    })

    if(requestStage == 1 || requestStage == 2 || requestStage == 3){
        board.stage = requestStage
        console.log(boards)
        return res.send(`Successfully Added: ${JSON.stringify(board)}`)
    }

    return res.status(400).send('Invalid Stage Input')
})



const port = 3000
app.listen(port, console.log(`Listening on port ${port}`))