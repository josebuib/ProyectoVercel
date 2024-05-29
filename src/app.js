import express from "express"

const app = express()

app.set("port", process.env.PORT || 3000)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.json({ "message": "Welcom"})
})

export default app;