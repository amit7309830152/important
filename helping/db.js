// dynamic query execution start

exports.run_query = (sql, param = false) => {
    if (param == false) {
        return new Promise((resolve, reject) => {
            db.query(sql, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            })
        })
    } else {
        return new Promise((resolve, reject) => {
            db.query(sql, param, (error, result) => {
                if (error) {
                    console.log(error)
                    reject(error);
                } else {
                    resolve(result);
                }
            })
        })
    }
}

// dynamic query execution end

// Get day name from the date start

var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var day = weekday[d.getDay()].substring(0, 3);

// Get day name from the date end


// Get distance between the points by the google matrix distace api start
exports.getDistance = async(req, res, next) => {
    // var origins = ['San Francisco CA', '40.7421,-73.9914'];
    // var destinations = ['New York NY', 'Montreal', '41.8337329,-87.7321554', 'Honolulu'];
    var origins = ['varanasi', 'mathura'];
    var destinations = ['delhi'];

    distance.key('AIzaSyBhxep9O8VQz-JHmJW2XSzgjTRemLv91sI');
    distance.units('imperial');

    distance.matrix(origins, destinations, function(err, distances) {
        if (err) {
            return console.log(err);
        }
        if (!distances) {
            return console.log('no distances');
        }
        if (distances.status == 'OK') {
            for (var i = 0; i < origins.length; i++) {
                for (var j = 0; j < destinations.length; j++) {
                    var origin = distances.origin_addresses[i];
                    var destination = distances.destination_addresses[j];
                    if (distances.rows[0].elements[j].status == 'OK') {
                        var distance = distances.rows[i].elements[j].distance.text;
                        console.log('Distance from ' + origin + ' to ' + destination + ' is ' + distance);
                    } else {
                        console.log(destination + ' is not reachable by land from ' + origin);
                    }
                }
            }
        }
    });
}

// Get distance between the points by the google matrix distace api end


// check for business_id and user_id start
if (req.userdata.business_id != null && req.userdata.business_id != undefined && req.userdata.business_id != '') {
    var business_id = req.userdata.business_id;
    b_to_u = 1;
    if (req.body.user_id != null && req.body.user_id != undefined && req.body.user_id != '') {
        var user_id = req.body.user_id;
    } else {
        return res.status(500).json({ status: 'error', message: 'user_id is missing' });
    }
} else if (req.body.business_id != null && req.body.business_id != undefined && req.body.business_id != '') {
    b_to_u = 0;
    var business_id = req.body.business_id;
    if (req.userdata.id != null && req.userdata.id != undefined && req.userdata.id != '') {
        var user_id = req.userdata.id;
    } else {
        return res.status(500).json({ status: 'error', message: 'user_id is missing' });
    }
} else {
    return res.status(500).json({ status: 'error', message: 'business_id is missing' });
}
// check for business_id and user_id end



//  for check of the req
if (req.body.quotation_type == '' || req.body.quotation_type == null || req.body.quotation_type == undefined) {
    return res.status(403).json({ status: 'error', message: 'Quotiation type is required.' });
} else if (req.body.currency_iso == '' || req.body.currency_iso == null || req.body.currency_iso == undefined) {
    return res.status(403).json({ status: 'error', message: 'Currency iso is required.' });
} else if (req.body.amount == '' || req.body.amount == null || req.body.amount == undefined) {
    return res.status(403).json({ status: 'error', message: 'Amount is required.' });
} else if (req.body.enquiry_id == '' || req.body.enquiry_id == null || req.body.enquiry_id == undefined) {
    return res.status(403).json({ status: 'error', message: 'Enquire id is required.' });
}

//  for check of the req end
// 
// setting the date to the current in the sql table 
var sql1 = `UPDATE business_menu_item SET updated_at=now(), ${update} ${where_1}`


// update query 
var update_columns = " updated_at=now() ";

if (req.body.accepting_order != '' && req.body.accepting_order != 'undefined' && req.body.accepting_order != null) {
    update_columns += ", accepting_order='" + req.body.accepting_order + "' ";
}
if (req.body.take_away_start_time != '' && req.body.take_away_start_time != 'undefined' && req.body.take_away_start_time != null) {
    update_columns += ", take_away_start_time='" + req.body.take_away_start_time + "' ";
}
if (req.body.take_away_end_time != '' && req.body.take_away_end_time != 'undefined' && req.body.take_away_end_time != null) {
    update_columns += ", take_away_end_time='" + req.body.take_away_end_time + "' ";
}
if (req.body.take_away_minimum_bill != '' && req.body.take_away_minimum_bill != 'undefined' && req.body.take_away_minimum_bill != null) {
    update_columns += ", take_away_minimum_bill='" + req.body.take_away_minimum_bill + "' ";
}
if (req.body.take_away_packaging_charge != '' && req.body.take_away_packaging_charge != 'undefined' && req.body.take_away_packaging_charge != null) {
    update_columns += ", take_away_packaging_charge='" + req.body.take_away_packaging_charge + "' ";
}
if (req.body.dine_in_start_time != '' && req.body.dine_in_start_time != 'undefined' && req.body.dine_in_start_time != null) {
    update_columns += ", dine_in_start_time='" + req.body.dine_in_start_time + "' ";
}
if (req.body.dine_in_end_time != '' && req.body.dine_in_end_time != 'undefined' && req.body.dine_in_end_time != null) {
    update_columns += ", dine_in_end_time='" + req.body.dine_in_end_time + "' ";
}
if (req.body.delivery_start_time != '' && req.body.delivery_start_time != 'undefined' && req.body.delivery_start_time != null) {
    update_columns += ", delivery_start_time='" + req.body.delivery_start_time + "' ";
}
if (req.body.delivery_end_time != '' && req.body.delivery_end_time != 'undefined' && req.body.delivery_end_time != null) {
    update_columns += ", delivery_end_time='" + req.body.delivery_end_time + "' ";
}
if (req.body.delivery_minium_bill != '' && req.body.delivery_minium_bill != 'undefined' && req.body.delivery_minium_bill != null) {
    update_columns += ", delivery_minium_bill='" + req.body.delivery_minium_bill + "' ";
}
if (req.body.delivery_packaging_charge != '' && req.body.delivery_packaging_charge != 'undefined' && req.body.delivery_packaging_charge != null) {
    update_columns += ", delivery_packaging_charge='" + req.body.delivery_packaging_charge + "' ";
}

var sql = "update business_menu_setting set " + update_columns + " where business_id='" + business_id + "'";

db.query(sql, function(err, result) {
    if (err) {
        return res.status(500).json({ status: 'error', message: 'Something went wrong.' });
    }
    return res.status(200).json({ status: 'success', message: 'Setting updated successfully.' });
});

// update end

// to insert 
var sql = "INSERT INTO business_appointment_person SET ?";
db.query(sql, postval, function(err, result) {});
// insert end

// code for insert is not exist and update if exist
try {
    var data_to_insert = { source_id, target_id, relation_type }
    var sql_count = `SELECT COUNT(*) as count, id FROM user_business_relation WHERE source_id = ${source_id} AND target_id = ${target_id} AND relation_type = ${relation_type}`
    var sql_insert = `INSERT INTO user_business_relation SET ? `
    result_count = await exports.run_query(sql_count)
    if (result_count[0].count == 0) {
        result_insert = await exports.run_query(sql_insert, data_to_insert)
        return res.status(200).send({ status: 'success', message: 'Successfull' })
    } else {
        var sql_update = `UPDATE user_business_relation SET ? WHERE id = ${result_count[0].id}`
        result_count = await exports.run_query(sql_update, data_to_insert)
        return res.status(200).send({ status: 'success', message: 'Data is updated' })
    }
} catch (error) {
    return res.status(500).send({ status: 'failed', message: 'Could not insert data', error })
}

// code for insert is not exist and update if exist end

// run query inside the loop will not work as js is single threaded

// run query inside the loop start
async.eachSeries(result_master, function(data, callback) { // It will be executed one by one
    //Here it will be wait query execute. It will work like synchronous
    db.query(`Select id, category_name FROM business_categories LIMIT 2`, function(error, results1, filelds) {
        // if (error) throw error;
        // console.log(results1)
        final_data.push(results1)
        callback();
    });

}, function(err, results) {
    console.log(final_data); // Output will the value that you have inserted in array, once for loop completed ex . 1,2,3,4,5,6,7,8,9
});

// run query inside the loop end


// insert many row in on query start

var sql_quotaion = `INSERT INTO inhouse_quotation SET ?`
var result_quotation = await exports.run_query(sql_quotaion, data_quotation)
if (result_quotation.affectedRows > 0) {
    // inserting the comments
    var comments = []
    if (req.body.comment_1 != '' && req.body.comment_1 != null && req.body.comment_1 != undefined) {
        comments.push([result_quotation.insertId, req.body.comment_1])
    }
    if (req.body.comment_2 != '' && req.body.comment_2 != null && req.body.comment_2 != undefined) {
        comments.push([result_quotation.insertId, req.body.comment_2])
    }
    if (req.body.comment_3 != '' && req.body.comment_3 != null && req.body.comment_3 != undefined) {
        comments.push([result_quotation.insertId, req.body.comment_3])
    }
    if (req.body.comment_4 != '' && req.body.comment_4 != null && req.body.comment_4 != undefined) {
        comments.push([result_quotation.insertId, req.body.comment_4])
    }
    if (req.body.comment_5 != '' && req.body.comment_5 != null && req.body.comment_5 != undefined) {
        comments.push([result_quotation.insertId, req.body.comment_5])
    }
    if (req.body.comment_6 != '' && req.body.comment_6 != null && req.body.comment_6 != undefined) {
        comments.push([result_quotation.insertId, req.body.comment_6])
    }

    if (comments.length > 0) {
        var sql_comment = `INSERT INTO inhouse_quotation_comments (id_quotation, comment) VALUES ?`
        var result_comment = await exports.run_query(sql_comment, [comments])
        if (result_comment.affectedRows > 0) {
            console.log('comment');
            return res.status(200).json({ status: 'success', message: 'Data is inserted' });
        } else {
            return res.status(403).json({ status: 'error', message: 'Could not insert data' });
        }
    }
    // insert many row in on query end

    // to run many queries inside the loop of external query start
    async.eachSeries(result_master, function(data, callback) {
        db.query(`Select id, category_name FROM business_categories WHERE parent_id = ${data.business_category_id} LIMIT 5`, function(error, results1, filelds) {
            if (error) {
                return res.status(500).send({ status: 'error', message: 'Something went wrong.' });
            }
            data.sub_category = results1
                // final_data.push(data)
                // callback();
        });

        db.query(`SELECT b_a_m.attribute_name as attribute_name FROM business_attributes as b_a LEFT JOIN business_attributes_master as b_a_m ON b_a_m.id = b_a.attributes_id WHERE b_a.business_id= '${data.business_id}'`, function(error, results2, filelds) {
            if (error) {
                return res.status(500).send({ status: 'error', message: 'Something went wrong.', error });
            }
            data.attributes = results2
            final_data.push(data)
            callback();
        });
    }, function(err, results) {
        if (err) {
            return res.status(500).send({ status: 'error', message: 'Something went wrong.' });
        }

        // adding the attribute to the business

        // sql = "SELECT b_a_m.attribute_name as attribute_name FROM business_attributes as b_a LEFT JOIN business_attribute "

        return res.status(200).send({ status: 'success', message: 'success', data: final_data });
    });
}

// to run many queries inside the loop of external query END

// dynamic api for insert as well as update both from user and business side start
exports.set_waitlist = async function(req, res, next) {
    data_to_insert = {}
    if (req.userdata.business_id != null && req.userdata.business_id != undefined && req.userdata.business_id != '') {
        var business_id = req.userdata.business_id;
        if (req.body.user_id != null && req.body.user_id != undefined && req.body.user_id != '') {
            var user_id = req.body.user_id;
        } else {
            return res.status(500).json({ status: 'error', message: 'user_id is missing' });
        }
    } else if (req.body.business_id != null && req.body.business_id != undefined && req.body.business_id != '') {
        var business_id = req.body.business_id;
        if (req.userdata.id != null && req.userdata.id != undefined && req.userdata.id != '') {
            var user_id = req.userdata.id;
        } else {
            return res.status(500).json({ status: 'error', message: 'user_id is missing' });
        }
    } else {
        return res.status(500).json({ status: 'error', message: 'business_id is missing' });
    }

    data_to_insert.business_id = business_id
    data_to_insert.user_id = user_id
    if (req.body.no_of_person == '' || req.body.no_of_person == null || req.body.no_of_person == undefined) {
        return res.status(403).json({ status: 'error', message: 'Number of person is required.' });
    } else {
        data_to_insert.no_of_person = req.body.no_of_person
    }

    if (req.body.special_notes != '' || req.body.special_notes != null || req.body.special_notes != undefined) {
        data_to_insert.special_notes = req.body.special_notes
    }

    if (req.body.contact != '' || req.body.contact != null || req.body.contact != undefined) {
        data_to_insert.contact = req.body.contact
    }

    if (req.body.name != '' || req.body.name != null || req.body.name != undefined) {
        data_to_insert.name = req.body.name
    } else {
        data_to_insert.name = ''
    }

    if (req.body.waitlist_id != '' && req.body.waitlist_id != null && req.body.waitlist_id != undefined) {
        var sql = `UPDATE business_waitlist SET updated_at = NOW(), ? WHERE id = ${req.body.waitlist_id}`;
    } else {
        var sql = "INSERT INTO business_waitlist SET ?";
    }
    try {
        result = await exports.run_query(sql, data_to_insert)
        if (result.affectedRows > 0) {
            return res.status(200).json({ status: 'success', message: 'Data is inserted' });
        } else {
            return res.status(400).json({ status: 'failed', message: 'Something went wrong' });
        }
    } catch (error) {
        return res.status(400).json({ status: 'failed', message: 'Something went wrong', error });
    }

}

// dynamic api for insert as well as update both from user and business side end

// to delete something by id start

exports.deleteBookingAppointment = async function(req, res, next) {
    if (req.body.appointment_booking_id != null && req.body.appointment_booking_id != undefined && req.body.appointment_booking_id != '') {
        appointment_booking_id = req.body.appointment_booking_id
    } else {
        return res.status(400).json({ status: 'failed', message: 'appointment_booking_id is missing' });
    }
    var sql = "UPDATE business_appointment SET deleted_at = NOW() WHERE id = '" + appointment_booking_id + "'";
    try {
        db.query(sql, function(err, result) {
            if (err) {
                return res.status(400).json({ status: 'failed', message: 'Something went wrong', error: err });
            } else {
                return res.status(200).json({ status: 'success', message: 'Data is deleted' });
            }
        })
    } catch (error) {
        return res.status(400).json({ status: 'failed', message: 'Something went wrong', error });
    }
}

// to delete something by id end

// to add the date in js start
moment().add(i, 'd').toDate();
// to add the date in js end