import React, { Component } from 'react';
import FoodItem from './FoodItem';
import Sample from '../../Sample';
export default class Food extends Component {
  constructor(){
    super();
    this.state = {
      foods:Sample.foods
    };
  }
  componentDidMount(){
    const foodSection = document.getElementById('food-section');
    const search = document.getElementById('search');
    foodSection.addEventListener('input',(event)=>{
      this.handleSelect(event.target.value);
      if(search.value!==""){
        this.handleSearch(search.value);
      }
    });
    search.addEventListener('input',(event)=>{
      this.handleSearch(event.target.value);
    });
  }
  handleSearch = (val)=>{
    val = val.toLowerCase();
    let foods = [];
    const foodSection = document.getElementById('food-section');
    if(foodSection.value==='all'){
      Sample.foods.forEach((ele)=>{
        let foodName = JSON.parse(ele).foodName.toLowerCase();
        if(foodName.indexOf(val)!==-1){
          foods.push(ele);
        }
      })
    }else{
      let index = Sample.foodSection[foodSection.value];
      index.forEach(ele=>{
        let foodName = JSON.parse(Sample.foods[ele]).foodName.toLowerCase();
        console.log(foodName)
        if(foodName.indexOf(val)!==-1){
          foods.push(Sample.foods[ele]);
        }
      })
    }
    this.setState({
      foods:foods
    })
  }
  handleSelect = (type)=>{
    if(type==='all'){
      this.setState({
        foods:Sample.foods
      });
    }
    else{
      let foods = [];
      Sample.foodSection[type].forEach((ele)=>{
        foods.push(Sample.foods[ele]);
      })
      this.setState({
        foods:foods
      })
    }
  }
  render() {
    return (
      <div id="myroot">
        {
          this.state.foods.map((element,key)=>{
            const ele = JSON.parse(element);
            return (
              <FoodItem key={key} image={ele.imgName} foodName={ele.foodName} foodDetails={ele.foodDetails} costOfFood={ele.costOfFood} deliveryTime={ele.deliveryTime} />
            )
          })
        }
      </div>
    )
  }
}
