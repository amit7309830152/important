userProfileDetail = await UserProfile.aggregate(
    [
        // to match or select which 
        { $match: { "_id": mongoose.Types.ObjectId("606c1ceb362b366a841171dc") } },
        {
            // to do the left join 
            $lookup: {
                from: 'user_families',
                localField: '_id',
                foreignField: 'user_id',
                as: 'families'
            }
        },
        // to make the families detail included with the profile details.
        {
            $unwind: "$families"
        },
        // to project or to show which are the field to be shown
        {
            $project: { _id: 1, firstName: 1, families: 1 },
        },

    ]
)

// making schema in the mongo
const userProfileSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    phone: {
        type: String,
        unique: false,
        trim: true,
        validate(value) {
            if (!validator.isMobilePhone(value)) {
                throw new Error('Phone number is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    otp: {
        type: Number,
    },
    gender: {
        type: String,
        lowercase: true,
    },
    hobbies: [{
        type: String,
        trim: true
    }],

    // saving this field as array.
    // searching also work as usual. find({hobbies:'cricket'})

    profession: [{
        type: String,
        trim: true
    }],
    dob: {
        type: Date,
        trim: true,
    },
    area: {
        type: String,
        trim: true,
    },
    city: {
        type: String,
        trim: true
    },
    postalCode: {
        type: Number,
        trim: true
    },
    state: {
        type: String,
        trim: true
    },
    country: {
        type: String,
        trim: true
    },
    bio: {
        type: String,
        trim: true
    },
    iAgree: {
        type: Number,
        trim: true,
        default: 0
    },
    isPhoneVerified: {
        type: Number,
        trim: true,
        default: 0
    },
}, {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
})

// write this in the userProfileModel to populate the family
// to populate the family.
userProfileSchema.virtual('family', {
    ref: 'user_Family',
    localField: '_id',
    foreignField: 'user_id'
})

// To update and modify by id
resultSave = await UserFamily.findByIdAndUpdate(req.body.memberId, req.body, { returnOriginal: true, runValidators: true, select: 'name user_id detail relationType parent', useFindAndModify: false })

// Join three table 

// tables

user_movies

{
    "_id": "_id": ObjectId("5834ecf7432d92675bde9d83"),
    "mobile_no": "7941750156"
    "movies": ["dallas00", "titanic00", "green_mile00"]
}
movies

{
    "_id": "_id": ObjectId("4834eff7412d9267556d9d52"),
    "movie_name": "Dallas Buyer's Club",
    "movie_id": "dallas00",
    "active": 0

}
movie_comments

{
    "_id": "_id": ObjectId("1264eff7412d92675567h576"),
    "movie_id": "dallas00",
    "comment": "what a great movie.",
    "time_posted": "1480516635131"
}, {
    "_id": "_id": ObjectId("1264eff7412d92675567h578"),
    "movie_id": "dallas00",
    "comment": "awesome movie.",
    "time_posted": "1480516635141"
}, {
    "_id": "_id": ObjectId("1264eff7412d92675567h567"),
    "movie_id": "titanic00",
    "comment": "titanic awesome movie.",
    "time_posted": "1480516635132"
}, {
    "_id": "_id": ObjectId("1264eff7412d92675567h579"),
    "movie_id": "green_mile00",
    "comment": "Tom hanks did awesome movie.",
    "time_posted": "1480516635133"
}

// login to get the join


I am using $lookup for joining different collections in mongoDB. Now i am facing a problem here suppose i have 3 collections given below.

user_movies

{
    "_id": "_id" : ObjectId("5834ecf7432d92675bde9d83"),
    "mobile_no": "7941750156"
    "movies" : ["dallas00", "titanic00", "green_mile00"]
}
movies

{
    "_id": "_id" : ObjectId("4834eff7412d9267556d9d52"),
    "movie_name" : "Dallas Buyer's Club",
    "movie_id": "dallas00",
    "active": 0

}
movie_comments

{
    "_id": "_id" : ObjectId("1264eff7412d92675567h576"),
    "movie_id" : "dallas00",
    "comment": "what a great movie.",
    "time_posted": "1480516635131"
},
{
    "_id": "_id" : ObjectId("1264eff7412d92675567h578"),
    "movie_id" : "dallas00",
    "comment": "awesome movie.",
    "time_posted": "1480516635141"
},
{
    "_id": "_id" : ObjectId("1264eff7412d92675567h567"),
    "movie_id" : "titanic00",
    "comment": "titanic awesome movie.",
    "time_posted": "1480516635132"
},
{
    "_id": "_id" : ObjectId("1264eff7412d92675567h579"),
    "movie_id" : "green_mile00",
    "comment": "Tom hanks did awesome movie.",
    "time_posted": "1480516635133"
}


db.user_movies.aggregate(
        {$match : {mobile_no : mobile_no}},
        { "$unwind": "$movies" },
        {$lookup: {from: "movies",localField: "movies",foreignField: "movie_id",as: "bmarks"}},
        {$unwind : "$bmarks"},
        {$match : {"bmarks.active": 1}},
        { $group : { _id : "$_id", movies : {$push : "$bmarks"}, movie_ids: {$push : "$bmarks.movie_id"}}},
        {$lookup: {from: "movie_comments", localField: "",foreignField: "movie_id",as: "comments"}},
        {$unwind : "$comments"},
        {$sort: {time_posted: -1}},
        {$group: {_id: '$_id', comments : {$push : "$comments"}}
        },