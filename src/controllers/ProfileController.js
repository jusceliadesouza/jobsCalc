const Profile = require('../model/Profile')

module.exports =  {
    index(req, res) {
       return res.render("profile", { profile: Profile.get() })
    },

    update(req, res) {
        const data = req.body
        //quant semanas em um ano
        const weeksPerYear = 52
        //remoção das semanas de férias, pegano quantidade de semanas em um mês
        const weeksPerMonth = (weeksPerYear - data["vacation-per-year"] )/ 12
        
        const weeksTotalHours = data["hours-per-day"] * data["days-per-week"]
        //horas trabalhadas no mês
        const monthlyTotalHours = weeksTotalHours * weeksPerMonth
        //valor da hora
        const valueHour = data["monthly-budget"] / monthlyTotalHours

        Profile.update({
            ...Profile.get(),
            ...req.body,
            "value-hour": valueHour,
        })

        return res.redirect('/profile')
    }
}