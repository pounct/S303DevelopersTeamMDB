CREATE DATABASE 'floristeríadb'

use('floristeríadb');db.createCollection('floristeria',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "nom"
  ],
  "properties": {
    "id": {
      "bsonType": "int"
    },
    "nom": {
      "bsonType": "string"
    }
  }
} }});

use('floristeríadb');db.createCollection('producte',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id"
  ],
  "properties": {
    "id": {
      "bsonType": "int"
    },
    "enStock": {
      "bsonType": "int"
    }
  }
} }});

use('floristeríadb');db.getCollection('producte').createIndex( { 'id':1 } , { name:'ind'} );

use('floristeríadb');db.createCollection('ticket',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "floristeriaId"
  ],
  "properties": {
    "floristeriaId": {
      "bsonType": "int"
    },
    "id": {
      "bsonType": "int"
    }
  }
} }});

use('floristeríadb');db.getCollection('ticket').createIndex( { 'floristeriaId':1 } , { name:'floristeriaId'} );

use('floristeríadb');db.createCollection('arbre',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "alcada",
    "preu",
    "floristeriaId"
  ],
  "properties": {
    "alcada": {
      "bsonType": "double"
    },
    "floristeriaId": {
      "bsonType": "int"
    },
    "preu": {
      "bsonType": "double"
    },
    "id": {
      "bsonType": "int"
    }
  }
} }});

use('floristeríadb');db.getCollection('arbre').createIndex( { 'floristeriaId':1 } , { name:'floristeriaId'} );

use('floristeríadb');db.createCollection('decoracio',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "material",
    "preu",
    "floristeriaId"
  ],
  "properties": {
    "floristeriaId": {
      "bsonType": "int"
    },
    "material": {
      "enum": [
        "fusta",
        "plàstic"
      ]
    },
    "preu": {
      "bsonType": "double"
    },
    "id": {
      "bsonType": "int"
    }
  }
} }});

use('floristeríadb');db.getCollection('decoracio').createIndex( { 'floristeriaId':1 } , { name:'floristeriaId'} );

use('floristeríadb');db.createCollection('flor',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "color",
    "preu",
    "floristeriaId"
  ],
  "properties": {
    "floristeriaId": {
      "bsonType": "int"
    },
    "color": {
      "bsonType": "string"
    },
    "preu": {
      "bsonType": "double"
    },
    "id": {
      "bsonType": "int"
    }
  }
} }});

use('floristeríadb');db.getCollection('flor').createIndex( { 'floristeriaId':1 } , { name:'floristeriaId'} );

use('floristeríadb');db.createCollection('liniaticket',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "producteId",
    "ticketId"
  ],
  "properties": {
    "id": {
      "bsonType": "int"
    },
    "producteId": {
      "bsonType": "int"
    },
    "ticketId": {
      "bsonType": "int"
    }
  }
} }});

use('floristeríadb');db.getCollection('liniaticket').createIndex( { 'producteId':1 } , { name:'producteId'} );

use('floristeríadb');db.getCollection('liniaticket').createIndex( { 'ticketId':1 } , { name:'ticketId'} );
