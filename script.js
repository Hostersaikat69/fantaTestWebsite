let loader = document.querySelector("#loader")
setTimeout(() => {
    loader.style.top = "-100%"
}, 4000);

let firstTL = gsap.timeline({
    duration: 0.7,
    delay: 2.1
})

firstTL.from("#fanta", {
    scale: 0
}, "first")

firstTL.from("#leaf3", {
    right: "-50vh"
}, "sec")

firstTL.from("#leaf", {
    left:"50%",
    top: "50%",
    scale: 0,
    rotate: "360deg"
}, "first")

firstTL.from("#leaf2", {
    left:"50%",
    top: "50%",
    scale: 0,
    rotate: "360deg"
}, "first")
firstTL.from("#orange-cut", {
    left:"50%",
    top: "50%",
    scale: 0,
    rotate: "360deg"
}, "first")
firstTL.from("#orange", {
    left:"50%",
    top: "50%",
    scale: 0,
    rotate: "360deg"
}, "first")

var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: 1,
}})

tl.to("#fanta",{
    top: "120%",
    left: "0%"
}, 'orange')
tl.to("#orange-cut",{
    top:"160%",
    left: "23%"
}, 'orange')
tl.to("#orange",{
    width: "15%",
    top:"160%",
    right: "10%"
}, 'orange')
tl.to("#leaf",{
    top:"110%",
    rotate: "130deg",
    left: "70%"
}, 'orange')
tl.to("#leaf2",{
    top:"110%",
    rotate: "130deg",
    left: "0%"
}, 'orange')


var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".three",
        start: "0% 95%",
        end: "35% 50%",
        scrub: 1,
    }
})

tl2.from(".lemon1",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')
tl2.from("#cocacola",{
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
}, 'ca')

tl2.from(".lemon2",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'ca')
tl2.from("#pepsi",{
    rotate: "90deg",
    top: "110%",
    left: "100%",
}, 'ca')

tl2.to("#orange-cut",{
    width:"18%",
    left: "42%",
    top: "204%"
}, 'ca')
tl2.to("#fanta",{
    width:"35%",
    top: "210%",
    left: "33%",
}, 'ca')
