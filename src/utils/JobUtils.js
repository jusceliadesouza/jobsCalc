module.exports =  {
    remainingDays(job) {
        const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed()
    
            const createdDate = new Date(job.created_at)
            const dueDay = createdDate.getDate() + Number(remainingDays)
            const dueDate = createdDate.setDate(dueDay)
    
            const timeDiffInMs = dueDate - Date.now()
            const dayInMs = 1000 * 60 * 60 * 24
            const dayDiff = Math.ceil(timeDiffInMs / dayInMs) //ceil arredonda para cima, diferente do floor 
    
            //retorna o restante de dias
            return dayDiff
    },

    calulateBudget: (job, valueHour) => valueHour * job["total-hours"]
}