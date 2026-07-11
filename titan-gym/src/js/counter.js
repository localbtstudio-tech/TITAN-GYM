/*export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `Count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
*/

export function initCounter(){

    const counters=document.querySelectorAll(".counter");

    counters.forEach(counter=>{

        const target=+counter.dataset.target;

        let current=0;

        const increment=target/120;

        function update(){

            current+=increment;

            if(current<target){

                counter.innerText=Math.floor(current);

                requestAnimationFrame(update);

            }else{

                if(target>=1000){

                    counter.innerText=(target/1000)+"K+";

                }else if(target===24){

                    counter.innerText="24/7";

                }else{

                    counter.innerText=target+"+";

                }

            }

        }

        update();

    });

}