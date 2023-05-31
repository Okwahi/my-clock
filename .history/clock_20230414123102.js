SetInterval(SetClock,1000)
const HourHand=document.querySelector("[data-hour-hand]")
const MinuteHand=document.querySelector("[data-minute-hand]")
const SecondHand=document.querySelector("[data-second-hand]")
function SetClock(){
    const CurrentDate=newDate()
    const SecondsRatio=CurrentDate.Getseconds()/60
    const MinuteRatio=(SecondsRation+CurrentDate.GetMinutes(())/60
}
