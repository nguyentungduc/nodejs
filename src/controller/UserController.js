const UserModel = require('../model/user');

// Create and save a new user

exports.create = async (req, res) => {
    if(!req.body.email || !req.body.firstName || !req.body.lastName || !req.body.phone) {
        res.status(404).send({ message: 'Content can not be empty'});
    }

    const user = new UserModel({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone
    });

    await user.save().then(data => {
        res.send({
            message: "User created successfully!!",
            user: data
        });
    }).catch(err => {
        res.status(500).send({ message: err.message || "Some error occurred while creating user" });
    });
}

// Retrieve all users from the database.
exports.findAll = async (req, res) => {
    try {
        const user = await UserModel.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Find a single User with an id
exports.findOne = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
