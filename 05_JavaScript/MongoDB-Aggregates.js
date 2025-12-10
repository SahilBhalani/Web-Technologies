//Group Aggregate
db.listingsAndReviews.aggregate([
    { $group: { _id: "$property_type" } }
])

//Limit Aggregate    
db.movies.aggregate([
    {
        $limit: 1
    }
])

//Project Aggregate
db.restaurants.aggregate([
    {
        $project: {
            "_id": 0,
            "name": 1,
            "cuisine": 1,
            "address": 1
        }
    },
    {
        $limit: 5
    }
])

//Sort Aggregate
db.listingsAndReviews.aggregate([
    {
        $sort: { "accommodates": -1 }
    },
    {
        $project: {
            "name": 1,
            "accommodates": 1
        }
    },
    {
        $limit: 5
    }
])

//Match Aggregate 
db.listingsAndReviews.aggregate([
    {
        $match: { property_type: "House" }
    },
    {
        $limit: 2
    },
    {
        $project: {
            "name": 1,
            "bedrooms": 1,
            "price": 1
        }
    }
])

//AddFields Aggregate
db.restaurants.aggregate([
    {
        $addFields: {
            avgGrade: {
                $avg: "$grades.score"
            }
        }
    },
    {
        $project: {
            "name": 1,
            "avgGrade": 1
        }
    },
    {
        $limit: 5
    }
])

//Count Aggregate 
db.restaurants.aggregate([
    {
        $match: { "cuisine": "Chinese" }
    },
    {
        $count: "TotalChinese"
    }
])

//Lookup Aggregate 
db.comments.aggregate([
    {
        $lookup: {
            from: "movies",
            localField: "movie_id",
            foreignField: "_id",
            as: "movie_details"
        },
    },
    {
        $limit: 2
    }
])

//Out Aggregate 
db.listingsAndReviews.aggregate([
    {
        $group: {
            _id: "$property_type",
            properties: {
                $push: {
                    name: "$name",
                    accommodates: "$accommodates",
                    price: "$price"
                },
            },
        },
    },
    {
        $out: "props_by_type_07"
    },
])