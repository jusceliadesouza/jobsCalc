let data = {
    name: "Juscélia",
    avatar: "https://github.com/jusceliadesouza.png",
    "monthly-budget": 5000,
    "days-per-week": 5,
    "hours-per-day": 6,
    "vacation-per-year": 4,
    "value-hour": 75
}

module.exports = {
    get() {
        return data
    },
    update(newData) {
        data = newData
    }
}