import swaggerJsDoc from "swagger-jsdoc";

// Swagger options
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
        title: 'Your API',
        version: '1.0.0',
        description: 'API documentation using Swagger',
        },
    },
    apis: ['./src/routes/*.ts'], 
};

// Generate Swagger documentation
const swaggerDocs = swaggerJsDoc(swaggerOptions);

export default swaggerDocs;