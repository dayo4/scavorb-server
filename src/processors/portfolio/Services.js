const { knex, path, fsx, hlp } = require('../../plugins')


module.exports = {

    async create (request, reply) {

        const user_id = request.params.user_id
        const title = request.body.title
        // const about = request.body.about
        // const features = request.body.features
        const detail = request.body.detail
        const images = request.body.images
        // const content = sanitizeHTML(request.body.content)
        const data = {
            title,
            detail,
        }

        try
        {
            const id = await knex('portfolios_projects').insert({ ...data, user_id: user_id })

            return id
        }
        catch (e)
        {
            hlp.error(e)
        }
    },

    async findUserProjects (request, reply) {
        const user_id = request.params.user_id
        const query = JSON.parse(request.body.query)
        const filter = query.filter


        try
        {
            const posts = await knex.select('id', 'title', 'active', request.body.fetchDetail ? 'detail' : 'user_id').from('portfolios_projects').where('user_id', user_id).andWhere(filter)
            return posts
        }
        catch (e)
        {
            hlp.error(e)
        }
    },

    async findOne (request, reply) {
        const project_id = request.params.project_id
        try
        {
            const post = await knex.select('id', 'title', 'active', 'detail').from('portfolios_projects').where('id', project_id).first()
            if (post)
            {
                return post
            } else
            {
                hlp.error('Requested item not found.', 404)
            }
        }
        catch (e)
        {
            hlp.error(e)
        }
    },

    async update (request, reply) {
        const user_id = request.params.user_id
        const { id, title, detail, images, active } = request.body

        try
        {
            const data = {
                title: title,
                detail: detail,
                active: active,
                // images: images
            }

            const updated = await knex('portfolios_projects').where('id', id).andWhere('user_id', user_id).update(data)
            return updated
        }
        catch (e)
        {
            hlp.error(e)
        }
    },


    async delete (request) {
        const user_id = request.params.user_id
        const project_id = request.params.project_id
        console.log(user_id, project_id)
        try
        {
            const deleted = await knex('portfolios_projects').where('user_id', user_id).andWhere('id', project_id).del()
            if (deleted)
            {
                /*also delete all portfolio images uploaded to directories */
                // const url = path.join(__dirname, '../..', 'uploads/images/users/' + user_id)
                // await fsx.remove(url)
                return "Successfully deleted."
            }
            else
                hlp.error('unable to complete request.')
        }
        catch (e) { hlp.error(e) }
    }

}
