import React, {Component} from "react"


class DiceFive extends Component {
    state = { 
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0
     }
     randomNumGen = () => {
        this.setState(prevState => {
            const newNums = prevState.nums.map(num => this.randomNumGen(num))
                return {nums: newNums}
            }
        )

     }
    render() { 
        return ( 
    <div class = "scene">
        <div class="cube">
            <div class="num1">1</div>
            <div class="num2">2</div>
            <div class="num3">3</div>
            <div class="num4">4</div>
            <div class="num5">5</div>
            <div class="num6">6</div>
        </div>
        
    </div>
         );
    }
}
 
export default DiceFive;