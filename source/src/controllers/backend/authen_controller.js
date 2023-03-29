const routerName = 'article';
const renderName = `backend/page/${routerName}/`;

const RssService = require(`${__path_services}backend/rss_service`);
const AuthenModel = require(`${__path_models}authen_model`)
const bcrypt = require("bcrypt")

module.exports = {
    saveAuthen: async (req , res , next) => {
        const { usename, password } = req.body
        let data = {}

        data.usename = usename
        data.password = password

        await new AuthenModel(data).save()

        res.send({
            msg: 'Success',
        })
    },

    checkAuthen: async (req , res , next) => {
        const { usename, password } = req.body

        let data = await AuthenModel.findOne({usename})

        bcrypt.compare(password, data.password, function(err, result) {
            if (result) {
            console.log('1');
            }
        });
        console.log('2');
    }
}
