const { multer, fsx } = require('../../../plugins')


/* import services */
const UserImage = require('./Services')

/* initialize multer's storage functions */
const storage = multer.diskStorage({
    destination: function (request, file, cb) {
        const url = 'src/uploads/images/users/' + request.params.user_id + '/'
        fsx.ensureDirSync(url)
        cb(null, url)
    },
    filename: function (request, file, cb) {
        const filename = 'img_' + request.params.user_id + '_' + Date.now() + '.' + file.mimetype.split('/')[ 1 ]
        request.file.filename = filename
        cb(null, filename)
    }
})
const upload = multer({
    storage: storage,
    fileFilter: (request, file, cb) => {
        request.file = file
        if (![ "image/jpeg", "image/jpg", "image/png" ].includes(file.mimetype))
        {
            const error = new Error("Incorrect_FileType")
            return cb(error, false)
        }
        cb(null, true)
    },
    limits: {
        fileSize: 3000000,
    }
})


/* create api endpoints for the image uploads */
module.exports = async (app, options) => {

    /* HANDLERS */
    // app.get('/users/fetchImages/:user_id', UserImage.fetchImages)

    app.patch('/users/uploadImages/:user_id',
        {
            preValidation: app.AuthHooks.verifyUser,
            preHandler: upload.fields([
                { name: 'profileImage', maxCount: 1 },
                { name: 'coverImage', maxCount: 1 }
            ])
            // preHandler: upload.single('profileImage')
        },
        UserImage.upload)

    // app.delete('/users/deleteImages/:user_id', {
    //     preValidation: app.AuthHooks.verifyUser,
    // }, UserImage.delete)

}
