const routerName = 'setting';
const renderName = `backend/page/${routerName}/`;

const SettingService = require(`${__path_services}backend/setting_service`);


module.exports = {
    getSetting: async (req , res , next) => {
        let { data, pageTitle}  = await SettingService.getSetting(req, res)
        res.render(`${renderName}form` , {
            items : data,
            pageTitle
        })
    },

    saveSetting: async (req , res , next) => {
        await SettingService.saveSetting(req, res)
    },
}
