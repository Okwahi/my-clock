SetInterval(SetClock,1000)
const HourHand=document.querySelector("[data-hour-hand]")
const MinuteHand=document.querySelector("[data-minute-hand]")
const SecondHand=document.querySelector("[data-second-hand]")
function SetClock(){
    const CurrentDate=new Date()
    const SecondsRation=CurrentDate.Getseconds() /60
    const MinuteRation=(SecondsRation+CurrentDate.GetMinutes()) /60
    const HourRation=(MinuteRation+CurrentDate.GatHour()) /12
    SetRotation(SecondHand,SecondsRatio)
    SetRotation(MinuteHand,MinutesRatio)
SetRotation(HourHand,HoursRatio)

}
function SetRotation(element,RotationRatio){
    Element.style.SetProperty("--Rotation",RotationRatio*360)
}
SetClock()
