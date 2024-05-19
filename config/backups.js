export const schema = {
    "version": 1,
    "collections": [
        {
            "name": "users",
            "indexes": [
                {
                    "key": {
                        "_id": 1
                    },
                    "name": "_id_"
                }
            ],
            "options": {},
            "schema": {
                "bsonType": "object",
                "required": [
                    "_id",
                    "email",
                    "password",
                    "zipcode"
                ],
                "properties": {
                    "_id": {
                        "bsonType": "objectId"
                    },
                    "email": {
                        "bsonType": "string"
                    },
                    "password": {
                        "bsonType": "string"
                    },
                    "zipcode": {
                        "bsonType": "string"
                    }
                }
            }
        },
        {
            "name": "stores",
            "indexes": [
                {
                    "key": {
                        "_id": 1
                    },
                    "name": "_id_"
                }
            ],
            "options": {},
            "schema": {
                "bsonType": "object",
                "required": [
                    "_id",
                    "name",
                    "location"
                ],
                "properties": {
                    "_id": {
                        "bsonType": "objectId"
                    },
                    "name": {
                        "bsonType": "string"
                    },
                    "location": {
                        "bsonType": "object",
                        "required": [
                            "latitude",
                            "longitude"
                        ],
                        "properties": {
                            "latitude": {
                                "bsonType": "double"
                            },
                            "longitude": {
                                "bsonType": "double"
                            }
                        }
                    }
                }
            }
        },
        {
            "name": "products",
            "indexes": [
                {
                    "key": {
                        "_id": 1
                    },
                    "name": "_id_"
                }
            ],
            "options": {},
            "schema": {
                "bsonType": "object",
                "required": [
                    "_id",
                    "name",
                    "price",
                    "store_id"
                ],
                "properties": {
                    "_id": {
                        "bsonType": "objectId"
                    },
                    "name": {
                        "bsonType": "string"
                    },
                    "price": {
                        "bsonType": "double"
                    },
                    "store_id": {
                        "bsonType": "objectId"
                    }
                }
            }
        }
    ]
}
