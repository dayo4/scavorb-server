const { multer, fsx } = require('../../../plugins')


/* import services */
const PostImage = require('./Services')

/* initialize multer's storage functions */
const storage = multer.diskStorage({
    destination: function (request, file, cb) {
        const url = 'src/uploads/images/posts/' + request.params.user_id + '/'
        fsx.ensureDirSync(url)
        cb(null, url)
    },
    filename: function (request, file, cb) {
        const filename = 'img' + Math.floor(Math.random() * 1000 + 1) + '_' + Date.now() + '.' + file.mimetype.split('/')[ 1 ]
        // const filename = 'img_' + request.params.post_id + '_' + Date.now() + '.' + file.mimetype.split('/')[1]
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
    app.patch('/posts/uploadImages/:post_id/:user_id',
        {
            preValidation: app.AuthHooks.verifyUser,
            preHandler: upload.fields([
                { name: 'featuredImage', maxCount: 1 },
                { name: 'contentImages', maxCount: 10 }
            ])
        },
        PostImage.upload)

    app.delete('/posts/deleteImages/:user_id', {
        preValidation: app.AuthHooks.verifyUser,
    }, PostImage.delete)

}
