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

//21. Find the listings with listing_url, name, address and amenities,price,review scores in the listingsAndReviews collection that have the lowest nightly prices.
db.listingsAndReviews.find(
    { "price": { "$exists": true } },
    { "listing_url": 1, "name": 1, "address": 1, "amenitites": 1, "price": 1, "review_scores": 1 }).sort({ "price": 1 }).limit(1)

//22. Retrieve all documents with name, address, reviewer_name, review_scores_ratingin the listingsAndReviewscollection that have a number_of_reviews field is equal to 0.
db.listingsAndReviews.find(
    {
        number_of_reviews: 0
    },
    {
        name: 1,
        address: 1,
        reviewer_name: 1,
        review_scores_rating: 1,
        _id: 0
    }
)

//23. Retrieve all documents with name, address, host, reviewer_name, review_scores_ratingin the listingsAndReviews collection where the host_is_superhost field is equal to true.
db.listingsAndReviews.find({
    "host.host_is_superhost": true
}, {
    name: 1, address: 1, "host.host_id": 1, "host.host_name": 1, reviewer_name: 1, reviewer_score_rating: 1
})

//24. Retrieve all documents with name, address, host, reviewer_name, review_scores_ratingin the listingsAndReviews collection where the coordinates field is not null.
db.listingsAndReviews.find({
    "address.location.coordinates": { $ne: null }
},
    {
        name: 1,
        address: 1,
        host: 1,
        "review.reviewer_name": 1,
        "review_scores.review_score_rating": 1,
    }
)

//25. Retrieve all documents with name, address, host, bed_type, bed, review_scores_ratingfrom the listingsAndReviewscollection where the beds field is greater than or equal to 2.
db.listingsAndReviews.find(
    { "beds": { $gte: 2 } },
    {
        "name": 1,
        "address": 1,
        "host": 1,
        "bed_type": 1,
        "beds": 1,
        "review_scores.review_scores_rating": 1
    }
)

//26. Find all listings with name, address, host in the listingsAndReviews collection that have a host with a host_name containing the word "Livia".
db.listingsAndReviews.find(
    { "host.host_name": { $regex: "Livia", $option: "i" } },
    {
        "name": 1,
        "address": 1,
        "host": 1
    }
)

//27. Find all listings with name, address, host in the listingsAndReviews collection that have a host with a host_location of "Brazil".
db.listingsAndReviews.find(
    { "host.host_location": "Brazil" },
    {
        name: 1,
        address: 1,
        host: 1
    }
)

//28. Retrieve all documents with name, address, host, availability in the listingsAndReviews collection where the availability_365 field is greater than 300.
db.listingsAndReviews.find(
    { "availability.availability_365": { $gt: 300 } },
    {
        name: 1,
        address: 1,
        host: 1,
        availability: 1
    }
)

//29. Retrieve all documents with listing_url, name, bedrooms, pricein the listingsAndReviews collectionwhere the bedrooms field is equal to 1.
db.listingsAndReviews.find(
    { "bedrooms": { $eq: 1 } },
    {
        listing_url: 1,
        name: 1,
        bedrooms: 1,
        price: 1
    }
)

//30. Retrieve all documents with listing_url, name, bedrooms, cleaning_fee, and price in the listingsAndReviews collectionwhere the cleaning_fee field is not null.
db.listingsAndReviews.find(
    { cleaning_fee: { $ne: null } },
    {
        listing_url: 1,
        name: 1,
        bedrooms: 1,
        cleaning_fee: 1,
        price: 1
    }
)

//31. Retrieve all documents with listing_url, name, bedrooms, pricein the listingsAndReviews collection where the price field is between 600 and 900.
db.listingsAndReviews.find(
    {
        price: { $gte: 600, $lte: 900 }
    },
    {
        listing_url: 1,
        name: 1,
        bedrooms: 1,
        price: 1
    }
)

//32. Retrieve all documents with listing_url, name, host, price in the listingsAndReviews collection where the host_verifications array contains "email".
db.listingsAndReviews.find(
    {
        "host.host_verifications": { $in: ["email"] }
    },
    {
        listing_url: 1,
        name: 1,
        host: 1,
        price: 1
    }
)

//33. Retrieve all documents with listing_url, name, amenity, host in the listingsAndReviews collection where the amenities array contains both "TV" and "Wifi".
db.listingsAndReviews.find(
    { "amenities": { $all: ["TV", "Wifi"] } },
    {
        listing_url: 1,
        name: 1,
        amenities: 1,
        host: 1
    }
)

//34. Find all listings with listing_url, name, amenities, host in the listingsAndReviewscollection that have a host with a Jumio verification and a about section.
db.listingsAndReviews.find(
    {
        "host.host_verifications": "jumio",
        "host.host_about": { $exists: true, $ne: "" }
    },
    {
        listing_url: 1,
        name: 1,
        amenities: 1,
        host: 1
    }
)

//34.Retrieve all documents with listing_url, name, host, price in the listingsAndReviews collection where the host_total_listings_count field is greater than 1.
db.listingsAndReviews.find(
    { "host.host_total_listings_count": { $gt: 1 } },
    {
        listing_url: 1,
        name: 1,
        host: 1,
        price: 1
    }
)

//35. Retrieve all documents with listing_url, name, property_type, bed, price in the listingsAndReviewscollectionwhere the property_type field is equal to "Apartment" and the beds field is greater than or equal to 2.
db.listingsAndReviews.find(
    {
        "property_type": { $eq: "Apartment" },
        "beds": { $gte: 2 }
    },
    {
        listing_url: 1,
        name: 1,
        property_type: 1,
        beds: 1,
        price: 1
    }
)

//36. Find all listings with listing_url, name, property_type, bed, bathrooms, price in the listingsAndReviews collection that have a minimum of 2 bathrooms.
db.listingsAndReviews.aggregate([
    {
        $match: {
            bedrooms: { $gte: 2 }
        }
    },
    {
        $project: {
            listing_url: 1,
            name: 1,
            property_type: 1,
            beds: 1,
            bathrooms: 1,
            price: 1
        }
    }

])

//37. Find all listings with listing_url, name, property_type, bed, price, guests_included in the listingsAndReviews collection that have a maximum of 5 guests included in the price.
db.listingsAndReviews.aggregate([
    {
        $match: {
            guests_included : {
                $lte : 5
            }
        }
    },
    {
        $project: {
            listing_url : 1,
            name: 1,
            property_type: 1,
            beds: 1,
            price: 1,
            guests_included : 1
        }
    }
    ])
    
//38. Find all listings with listing_url, name, property_type, bed, price, security_deposit in the listingsAndReviews collection that have a price greater than $500 and a security deposit of $1000 or more.
db.listingsAndReviews.aggregate([
    {
        $match: {
            price : {$gt: 500 },
            security_deposit : {$gte : 1000}
        }
    },
    {
        $project: {
            listing_url : 1,
            name : 1,
            property_type : 1,
            beds : 1,
            price : 1,
            security_deposit : 1
        }
    }
    ])
    
///39. Find all listings with listing_url, name, property_type, bed, price, cancellation_policy in the listingsAndReviews collection that have a cancellation policy of "flexible".
db.listingsAndReviews.find( 
    { cancellation_policy : "flexible"},
    {
        listing_url : 1,
        name : 1,
        property_type : 1,
        beds : 1,
        price : 1,
        cancellation_policy : 1
    }
    )
    
//40. Find all listings with listing_url, name, property_type, bed_type, amenities, price in the listingsAndReviews collection that have a real bed as the bed type and a kitchen amenity.
db.listingsAndReviews.aggregate([
    {
        $match : {
            "bed_type" : "Real Bed",
            "amenities" : "Kitchen"
        }
    }, 
    {
        $project: {
            listing_url : 1,
            name : 1,
            property_type : 1,
            bed_type : 1,
            amenities : 1,
            price : 1
        }
    }
    ])
    
//41. Find all listings with listing_url, name, address, amenities in the listingsAndReviews collection that have a 24-hour check-in amenity and are located in Brazil.
db.listingsAndReviews.aggregate([
    {
        $match: {
            amenities : "24-hour check-in",
            "address.country" : "Brazil"  
        }
    }, 
    {
        $project: {
            listing_url : 1,
            name : 1,
            address : 1,
            amenities : 1
        }
    }
    ])
    
//42. Find all listings with listing_url, name, address, reviews in the listingsAndReviews collection that have at least one review.
db.listingsAndReviews.find( 
    {
        reviews : {$exists: true , $not : {$size : 0}}
    },
    {
        listing_url : 1,
        name: 1,
        address : 1,
        reviews : 1
    }
    )
    
//43. Find the number of documents that have a blank medium picture url in the istingsAndReviews collection.
db.listingsAndReviews.countDocuments({"images.medium_url" : ""})

//44. Find all listings with listing_url, name, address, availability_30 in the istingsAndReviews collection that have an availability of at least 30 days.
db.listingsAndReviews.find(
    {
        "availability.availability_30" : {$gte : 30}
    },
    {
        listing_url : 1,
        name: 1,
        address : 1,
        "availability.availability_30" : 1
    }
    )
    
//45. Find all listings with listing_url, name, address in the listingsAndReviews collection that have a suburb of "Lagoa".
db.listingsAndReviews.find( 
    {
        "address.suburb" : "Lagoa"
    },
    {
        lisiting_url : 1,
        name : 1,
        address : 1
    }
    )
    
//46. Find all listings with listing_url, name, address, host in the listingsAndReviews collection that have a host who is a superhost and has at least 2 listings.
db.listingsAndReviews.aggregate([
    {
        $match: {
            "host.host_is_superhost" : true,
            "host.host_total_listings_count" : {$gte: 2}
        }
    },
    {
        $project: {
            listing_url : 1,
            name: 1,
            address : 1,
            host: 1
        }
    }
    ])
    
//47. Find all listings with listing_url, name, address, host in the listingsAndReviews collection that have a host who has a profile pic and has been identity verified.
db.listingsAndReviews.find( 
    {
        "host.host_has_profile_pic" : true,
        "host.host_identity_verified" : true
    },
    {
        listing_url : 1,
        name : 1,
        address : 1,
        host : 1
    }
    )
    
//48. Write a mongodb query to find the listing_url, name, address, host_verifications, and size of host_verification under the host subdocument in the listingsAndReviews collection.
db.listingsAndReviews.aggregate([
    {
        $project: {
            listing_url : 1,
            name: 1,
            address : 1,
            "host_verifications" : "$host.host_verifications",
            "host_verifications_count": {$size: "$host.host_verifications"}
        }
    }
    ])
    
//49. Find all listings with listing_url, name, address, host_verificationand size of host_verification array in the listingsAndReviews collection that have a host with at least 3 verifications.
db.listingsAndReviews.aggregate([
    {
        $match: {
            "host.host_verifications" : {$exists: true},
            $expr: { $gte : [ {$size: "$host.host_verifications"} , 3] }
        }
    },
     {
        $project: {
            listing_url : 1,
            name: 1,
            address : 1,
            "host_verifications" : "$host.host_verifications",
            "host_verifications_count": {$size: "$host.host_verifications"}
        }
    }
    ])
    
//50. Find all listings with listing_url, name, address, host_picture_url in the listingsAndReviews collection that have a host with a picture url.
db.listingsAndReviews.aggregate([
    {
        $match: {
            "host.host_picture_url" : {$exists: true , $ne : null}
        }
    }, {
        $project: {
            listing_url : 1,
            name : 1,
            address : 1,
            "host.host_picture_url" : 1
        }
    }
    ])
