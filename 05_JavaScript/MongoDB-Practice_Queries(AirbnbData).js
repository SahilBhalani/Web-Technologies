//1. Find the price per night of the first record in the listingsAndReviews collection.
db.listingsAndReviews.findOne().price;

//2. Retrieve the cleaning fee of the first record in the listingsAndReviews collection.
db.listingsAndReviews.findOne().cleaning_fee;

//3. Find the host_name, host_location, host_about of the first record in the listingsAndReviews collection.
db.listingsAndReviews
  .find()
  .limit(1)
  .forEach(function (doc) {
    print("Host Name: " + doc.host.host_name);
    print("Host Location: " + doc.host.host_location);
    print("Host About: " + doc.host.host_about);
  });

//4. Retrieve the number of bedrooms in the first record in the listingsAndReviews collection.
db.listingsAndReviews.findOne().bedrooms;

//5. Retrieve the number of guests are included in the first record in the listingsAndReviews collection.
db.listingsAndReviews.findOne().guests_included;

//6. whether the host have a profile picture in the first record in the listingsAndReviews collection.
db.listingsAndReviews.findOne({}, { "host.host_has_profile_pic": 1 });

//7. whether the host's identity have been verified in the first record in the listingsAndReviews collection.
db.listingsAndReviews.findOne({}, { "host.host_identity_verified": 1 });

//8. find how many listings does the host have in the first records in the listingsAndReviews collection.
db.listingsAndReviews.aggregate([
  { $match: {} },
  { $project: { host_listing_count: "$host.host_listings_count" } },
  { $limit: 1 },
]);

//9. find the street address of the first record in the listingsAndReviews collection.
db.listingsAndReviews.findOne({}, { "address.street": 1 });

//10. find all the listings in the collection where the propery_type field is set to "House".
db.listingsAndReviews.find({ property_type: "House" });

//11. find all the listings in the collection with listing_url, name, host_name, host_location, reviewer_name and price that have a nightly price greater than $500.

db.listingsAndReviews.find(
  {
    price: { $gt: 500 },
  },
  {
    listing_url: 1,
    name: 1,
    "host.host_name": 1,
    "host.host_location": 1,
    "reviews.reviewer_name": 1,
    price: 1,
    _id: 0,
  }
);

//12. find all the listings in the collection that are located in brazil and have a review score rating of at least 9. Return name, address, and review_score_rating
db.listingsAndReviews.find(
    {
        "address.country": "Brazil",
        "review_scores.review_scores_rating": { $gte: 9 }
    },
    {
        "name": 1,
        "address": 1,
        "review_scores.review_scores_rating": 1,
        "_id": 0
    }
)

//13. find all the listings with name, address, reviewer_name, and review_score_rating in the collection that have a "hot tub" amenity and are located in the United States
db.listingsAndReviews.find(
    {
        "address.country": "United States",
        "amenities": "Hot tub",
        "name": { "$exists": true },
        "address": { "$exists": true },
        "reviews.reviewer_name": { "$exists": true },
        "review_scores.review_scores_rating": { "$exists": true }
    },
    {
        "name": 1,
        "address": 1,
        "reviews.reviewer_name": 1,
        "review_scores.review_scores_rating": 1
    }
)

//13. find all the listings with name, amenities and price in the collection that have a "pool" amenity and nightly price between $200 and $400
db.listingsAndReviews.find(
    {
        amenities: "Pool",
        price: {
            $gte: 200,
            $lte: 400
        }
    },
    {
        name: 1,
        amenities: 1,
        price: 1,
        _id: 0
    }
)

//14. Find all the listings with name, amenities and address in the listingsAndReviews collection that have a "Washer" amenity and are located in either Canada or Mexico. 
db.listingsAndReviews.find(
    {
        amenities: "Washer",
        $or: [
            { "address.country": "Canada" },
            { "address.country": "Mexico" }
        ]
    },
    {
        name: 1,
        amenities: 1,
        "address.country": 1,
        "address.street": 1,
        "address.suburb": 1,
        _id: 0

    }
)

//15. find the 10 most reviwed listings ith listing_url, name , country, review_scores in the collection
db.listingsAndReviews.aggregate([
    {
        $group: {
            _id: {
                listing_url: "$listing_url",
                name: "$name",
                country: "$address.country",
                review_scores: "$review_scores",
            }, count: { $sum: 1 },
        },
    },
    { $sort: {count : -1}},
    {$limit : 10},
    {
        $project: {
            _id : 0,
            listing_url : "$_id.listing_url",
            name : "$_id.name",
            country : "$_id.country",
            review_scores : "$_id.review_scores",
            count : 1
        }
    }
])

//16. Find all the listings with listing_url, name, address and review_scores in the listingsAndReviews collection that have a "fireplace" amenity and a review score rating of at least 8.
db.listingsAndReviews.find({
    "amenities" : "Essentials",
    "review_scores.review_scores_rating" : { $gte: 8 }
}, {
    listing_url : 1,
    name: 1,
    address : 1,
    review_scores : 1,
    _id : 0
    
})

//17. Find all the listings with listing_url, name, address and amenities, review scores in the listingsAndReviews collection that have a "washer" amenity and are located in either Italy or Spain

db.listingsAndReviews.find({
    "amenities" : "Washer",
    $or: [
        {"address.country" : "Italy"},
        {"address.country" : "Spain"}
        ]
} , 
{
    name : 1,
    address: 1,
    amenities : 1,
    review_scores : 1,
    _id : 0
    
})

//18. Find the listings with listing_url, name, address and amenities, price, review scores in the listingsAndReviews collection that have the highest nightly prices.
db.listingsAndReviews.find(
    {"price" : {"$exists" : true}},
    {"lisiting_url" : 1 , "name" : 1, "address" : 1, "amenities" : 1, "price" :1, "review_scores" : 1}
    ).sort({"price" : -1}).limit(1)
    
//19. Find the listings with listing_url, name, address and amenities, price, review scores in the listingsAndReviews collection that have the lowest nightly prices.
db.listingsAndReviews.find(
    {"price" : {"$exists" : true}},
    {"listing_url" : 1, "name" : 1, "address" : 1, "amenities" : 1, "price" : 1, "review_scores" : 1}
    ).sort({"price" : 1}).limit(1)
    
//20. Retrieve all documents with name, address, reviewer_name, review_scores_ratingin the listingsAndReviewscollection that have a number_of_reviews field is equal to 0.
db.listingsAndReviews.find(
    {
        number_of_reviews : 0
    },
    {
        name: 1, address: 1, "reviews.reviewer_name" : 1, "review_scores.review_scores_rating" : 1, _id : 0
    }
    )
