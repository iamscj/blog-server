import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import Router from "./routes/route.js";

const app = express();
app.use(cors());
// app.use(bodyParser.json({ extended: true }))
// app.use(express.urlencoded({ extended: true }))

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use('/', Router);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running successfully on PORT ${PORT}`)
})