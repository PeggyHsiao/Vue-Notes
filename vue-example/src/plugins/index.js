export default {
    install(Vue, options) {
        console.log(options);

        Vue.myGlobalMethod = function () {
            alert("GlobalMethods")
        },
        Vue.directive('focus', {
            inserted(el) {
                el.focus();                
            }
        }),
        Vue.directive('addclass', {
            bind(el) {
                el.className = 'test';
            }
        }),
        Vue.prototype.$doubleNumber = function(val){
            if(typeof val =='number'){
                return val*2
            }else{
                return null
            }
        },
        Vue.prototype.$alert = function(){
            alert("Successful");
        }
    }
}