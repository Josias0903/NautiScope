const app = require('./app');

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Running at port ${PORT}`));

const swaggerUi = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")

const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Nautiscope",
            version: "1.0.0",
            description: "API CRUD para gerenciar rotas",
        },
        servers: [{ url: `http://localhost:${PORT}`}]
    },
    apis: [`${__dirname}/routes/*.js`],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

