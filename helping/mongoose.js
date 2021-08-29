exports.getMembers = async(req, res) => {
    tokenDetail = req.tokenDetail

    userProfileDetail = await UserProfile.aggregate([{
        $lookup: {
            from: 'user_families',
            localField: '_id',
            foreignField: 'user_id',
            as: 'families'
        }
    }]).limit(1)
    return res.send(userProfileDetail)
}