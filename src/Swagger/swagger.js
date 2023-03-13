const app= require("express")

const swaggerJsDoc= require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options={
    definition:{
        openapi: '3.0.0',
        info:{
            title: "webelight Assignment -->Nodejs Project for Backend ",
            version: '1.0.0'
        },
        components: {
            securitySchemas:{
                bearerAuth:{type:"http",
                scheme: "bearer",
                bearerFormate:"JWT"
                },
            },
        },
        security:[
            {
                bearerAuth:[],
            },
        ],

    }, 
    apis:['../src/Routes/route.js', "../src/Models/model.js"],
        servers:[
            {
                url:'http://localhost:3000/'
            }
        ]
   
}

const swaggerSpec = swaggerJsDoc(options)

function swaggerDocs(app,port){
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("docs.json",(req,res)=>{
    res.setHeader("content-Type", "application/json");
    res.send(swaggerSpec);
});

info(`Docs available at http://localhost:3000/docs`)
}


module.exports={ swaggerDocs};