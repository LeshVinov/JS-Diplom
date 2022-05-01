import modal from "./modules/modal"
import slider from "./modules/slider"
import scroll from "./modules/smoothScrollBtn"
import timer from "./modules/timer"
import burger from "./modules/burger"
import formValidate from "./modules/formValidate"
import sendForm from "./modules/sendForm"

modal()
slider()
scroll()
burger()
// formValidate()
timer('05 may 2022')
sendForm({
    formId: '[name = "action-form"]', 
    someElem: [
        {
            type: 'block',
        }
    ] 
})
sendForm({
    formId: '[name = "action-form2"]', 
    someElem: [
        {
            type: 'block',
        }
    ] 
})