export const date=new Date()
const months=["January","February","March","April","May","June","July",
"August","September","October","November","December"]
const days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
export const day=days[date.getDay()]
const month=months[date.getMonth()]
const dayOfTheMonth=date.getDate()
export const dateComplete=`${day} ${month} ${dayOfTheMonth}`