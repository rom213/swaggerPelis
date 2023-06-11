const express = require('express');

const router = express.Router();

/**
 * @swagger
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *  schemas:
 *    Auth:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description:  user name
 *        email:
 *          type: string
 *          description:  user email
 *        password:
 *          type: string
 *          description: user password
 *        role:
 *          type: string
 *          description: user role
 *      required:
 *        - name
 *        - email
 *        - password
 *      example:
 *        name: nameUser
 *        email: example@gmail.com
 *        password: '123456'
 *        role: user / admin
 */

/** 
 * @swagger
 * /api/v1/auth/login:
 *  post:
*    summary: login user
*    tags: [Auth]
*    requestBody:
*      required: true
*      content:
*        application/json:
*          schema:
*            type: object
*            properties:
*              email:
*                type: string
*                description: user email
*              password:
*                type: string
*                description: user password
*            required:
*              - email
*              - password
*    responses:
*      201:
*        description: user logged
*/





/** 
 * @swagger
 * /api/v1/auth/register:
 *  post:
 *    summary: create a new user
 *    tags: [Auth]
 *    description: create a new user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Auth'
 *    responses:
 *      201:
 *        description: The users was successfully created
 *      500:
 *        description: Some server error
*/




/**
 * @swagger
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *  schemas:
 *    Gendr:
 *      type: object
 *      properties:
 *        nombre:
 *          type: string
 *          description: gendr name
 *      required:
 *        - nombre
 *      example:
 *        nombre: 'scary'
 */

/**
 * @swagger
 * /api/v1/gendr:
 *  get:
 *    summary: get all gendr
 *    tags: [Gendr]
 *    description: get all gendr
 *    responses:
 *      200:
 *        description: get all gendr
 *      500:
 *        description: Some server error
 */ 

/**
 * @swagger
 * /api/v1/gendr:
 *  post:
 *    summary: create  new gendr
 *    tags: [Gendr]
 *    description: create gendr
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:
 *          schema:
 *            type: object
 *            properties:
 *              nombre:
 *                type: string
 *                description: name gendr
 *              imgGendr:
 *                type: string
 *                format: binary
 *                description: The gendr image
 *            required:
 *              - nombre
 *              - imgGendr
 *            example:
 *              nombre: 'scary'
 *              imgGendr: "gendr gendr"
 *    responses:
 *      201:
 *        description: The gendr was successfully created
 *      401:
 *        description: Unauthorized
 *      500:
 *        description: Some server error
 */

/**
 * @swagger
 * /api/v1/gendr/{id}:
 *  patch:
 *    summary: update  new gendr
 *    tags: [Gendr]
 *    description: update gendr
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Gendr id
 *    requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:
 *          schema:
 *            type: object
 *            properties:
 *              nombre:
 *                type: string
 *                description: name gendr
 *              imgGendr:
 *                type: string
 *                format: binary
 *                description: The gendr image
 *            required:
 *              - nombre
 *              - imgGendr
 *            example:
 *              nombre: 'scary'
 *              imgGendr: "gendr gendr"
 *    responses:
 *      201:
 *        description: The gendr was successfully update
 *      401:
 *        description: Unauthorized
 *      500:
 *        description: Some server error
 *  
 *  
 *  post:
 *    summary: restore Gendr
 *    tags: [Gendr]
 *    description: Gendr Restore
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Gendr id
 *    responses:
 *      200:
 *        description: The Gendr was successfully restore
 *      401:
 *        description: Unauthorized
 *      500:
 *        description: Some server error
 * 
 *  delete:
 *    summary: delete Gendr
 *    tags: [Gendr]
 *    description: delete Gendr
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Gendr id
 *    responses:
 *      200:
 *        description: The Gendr was successfully restore
 *      401:
 *        description: Unauthorized
 *      500:
 *        description: Some server error
 */




/**
 * @swagger
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *  schemas:
 *    Audiovisual:
 *      type: object
 *      properties:
 *        titulo:
 *          type: string
 *          description: audio visual name
 *        dateInitial:
 *          type: string
 *          description:  audio visual date 
 *        rate:
 *          type: string
 *          description: audio visual rate 
 *        generoId:
 *          type: integer
 *          description: The meal price
 *      required:
 *        - titulo
 *        - dateInitial
 *        - rate
 *        - generoId
 *      example:
 *        titulo: hello word
 *        dateInitial: '23/2/2022'
 *        rate: '3'
 */


/**
 * @swagger
 * /api/v1/movies:
 *  get:
 *    summary: get all Audiovisual
 *    tags: [Audiovisual]
 *    description: get all Audiovisual
 *    responses:
 *      200:
 *        description: get all Audiovisual
 *      500:
 *        description: Some server error
 */ 


/**
 * @swagger
 * /api/v1/movies:
 *  post:
 *    summary: create new Audiovisual
 *    tags: [Audiovisual]
 *    description: create  Audiovisual
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:
 *          schema:
 *            type: object
 *            properties:
 *              generoId:
 *                type: integer
 *              titulo:
 *                type: string
 *              rate:
 *                type: string
 *              dateInitial:
 *                type: string
 *              imgMovie:
 *                type: string
 *                format: binary
 *            required:
 *              - generoId
 *              - titulo
 *              - rate
 *              - dateInitial
 *              - imgMovie
 *            example:
 *              generoId: 1
 *              titulo: "meal name"
 *              rate: '3'
 *              dateInitial: "10/2/2020"
 *              imgMovie: 'img movie'
 *    responses:
 *      201:
 *        description: The audiovisual was successfully created
 *      401:
 *        description: Unauthorized
 *      500:
 *        description: Some server error
 */


/** 
* @swagger
* /api/v1/movies/{id}:
*  delete:
*    summary: delete  Audiovisual
*    tags: [Audiovisual]
*    description: delete  Audiovisual
*    security:
*      - bearerAuth: []
*    parameters:
*      - in: path
*        name: id
*        schema:
*          type: string
*        required: true
*        description: Audiovisual id
*    responses:
*      200:
*        description: The meal was successfully restore
*      401:
*        description: Unauthorized
*      500:
*        description: Some server error
*        
*  post:
*    summary: restore audiovisual
*    tags: [Audiovisual]
*    description: audiovisual Restore
*    security:
*      - bearerAuth: []
*    parameters:
*      - in: path
*        name: id
*        schema:
*          type: string
*        required: true
*        description: audiovisual id
*    responses:
*      200:
*        description: The audiovisual was successfully restore
*      401:
*        description: Unauthorized
*      500:
*        description: Some server error
*/



/**
 * @swagger
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *  schemas:
 *    Characters:
 *      type: object
 *      properties:
 *        nombre:
 *          type: string
 *          description: name character
 *        historia:
 *          type: string
 *          description: the history character
 *        peso:
 *          type: string
 *          description: the weight character
 *        edad:
 *          type: string
 *          description: the age character 
 *      required:
 *        - nombre
 *        - historia
 *      example:
 *        nombre: 'jonh dep'
 *        historia: 'the world ligh'
 *        peso: '50'
 *        edad: '35'
 */

/**
 * @swagger
 * /api/v1/characters:
 *  get:
 *    summary: get all Characters
 *    tags: [Characters]
 *    description: get all Characters
 *    responses:
 *      200:
 *        description: get all Characters
 *      500:
 *        description: Some server error
 */ 




/**
 * @swagger
 * /api/v1/characters/{id}:
 *  post:
 *    summary: create new character
 *    tags: [Characters]
 *    description: create character
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Audiovisual id
 *    requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:
 *          schema:
 *            type: object
 *            properties:
 *              nombre:
 *                type: string
 *              historia:
 *                type: string
 *              peso:
 *                type: string
 *              edad:
 *                type: string
 *              imgPersonaje:
 *                type: string
 *                format: binary
 *            required:
 *              - nombre
 *              - historia
 *              - imgPersonaje
 *            example:
 *              nombre: 'jonh dep'
 *              historia: 'the world ligh'
 *              peso: '50'
 *              edad: '35'
 *              imgPersonaje: 'img character'
 *    responses:
 *      201:
 *        description: The character was successfully created
 *      401:
 *        description: Unauthorized
 *      500:
 *        description: Some server error
 */

/**
 * @swagger
 * /api/v1/characters/{id}:
 *  patch:
 *    summary: update  character
 *    tags: [Characters]
 *    description: update character
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: character id
 *    requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:
 *          schema:
 *            type: object
 *            properties:
 *              nombre:
 *                type: string
 *              historia:
 *                type: string
 *              peso:
 *                type: string
 *              edad:
 *                type: string
 *              imgPersonaje:
 *                type: string
 *                format: binary
 *                description: The character image
 *            required:
 *              - nombre
 *              - historia
 *              - imgPersonaje
 *            example:
 *              nombre: 'jonh dep'
 *              historia: 'the world ligh'
 *              peso: '50'
 *              edad: '35'
 *              imgPersonaje: 'img character'
 *    responses:
 *      201:
 *        description: The character was successfully update
 *      401:
 *        description: Unauthorized
 *      500: 
 *       description: Some server error
 * 
 *  get:
 *    summary: retore character
 *    tags: [Characters]
 *    description: character Restore
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: character id
 *    responses:
 *      200:
 *        description: The character was successfully restore
 *      401:
 *        description: Unauthorized
 *      500:
 *        description: Some server error
 * 
 *  delete:
 *    summary: delete character
 *    tags: [Characters]
 *    description: delete character
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Characters id
 *    responses:
 *      200:
 *        description: The character was successfully delete
 *      401:
 *        description: Unauthorized
 *      500:
 *        description: Some server error
 *    
 * 
 */


/**
 * @swagger
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *  schemas:
 *    RelationshipCharacterMovie:
 *      type: object
 *      properties:
 *        idPelicula:
 *          type: integer
 *          description: id audiovisual
 *        idPersonaje:
 *          type: integer
 *          description: id character
 *      required:
 *        - idPelicula
 *        - idPersonaje
 *      example:
 *        idPelicula: 1
 *        idPersonaje: 2
 */



/**
 * @swagger
 * /api/v1/relationships:
 *  get:
 *    summary: get all Relationships
 *    tags: [RelationshipCharacterMovie]
 *    description: get all Relationships
 *    responses:
 *      200:
 *        description: get all Relationships
 *      500:
 *        description: Some server error
 */ 

/**
 * @swagger
 * /api/v1/relationships:
 *  post:
 *    summary: create  new Relationship
 *    tags: [RelationshipCharacterMovie]
 *    description: create  Relationship
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *              type: object
 *              properties:
 *                  idPelicula:
 *                      type: integer
 *                      description: id audiovisual
 *                  idPersonaje:
 *                      type: integer
 *                      description: id character
 *    responses:
 *      201:
 *        description: The  Relationship was successfully created
 *      401:
 *        description: Unauthorized
 *      500:
 *        description: Some server error
 */

/**
 * @swagger
 * /api/v1/relationships/{id}:
 *  patch:
 *    summary: update  Relationship
 *    tags: [RelationshipCharacterMovie]
 *    description: update Relationship
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Relationship id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *              type: object
 *              properties:
 *                  idPelicula:
 *                      type: integer
 *                      description: id audiovisual
 *                  idPersonaje:
 *                      type: integer
 *                      description: id character
 *    responses:
 *      201:
 *        description: The Relationship was successfully update
 *      401:
 *        description: Unauthorized
 *      500:
 *        description: Some server error
 * 
 * 
 *  delete:
 *    summary: delete Relationship
 *    tags: [RelationshipCharacterMovie]
 *    description: delete Relationship
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Relationship id
 *    responses:
 *      200:
 *        description: The Relationship was successfully restore
 *      401:
 *        description: Unauthorized
 *      500:
 *        description: Some server error
 */




module.exports = router;
