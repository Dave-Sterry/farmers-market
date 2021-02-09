import React from 'react';
import Month from './Month';




class MonthHandler extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  handleClick = () => {
    this.setState({index: this.state.index +1});
  }

  // Correct
// this.setState((state, props) => ({
//    counter: state.counter + props.increment
//  }));
  render(){ 
    const availableProduce = [  
      {  
         month: "January",
         selection: [  
            "Apples",
            "Hazelnuts",
            "Pears",
            "Garlic",
            "Mushrooms",
            "Onions",
            "Potatoes",
            "Turnips"
         ]
      },
      {  
         month: "February",
         selection: [  
            "Apples",
            "Hazelnuts",
            "Pears",
            "Garlic",
            "Mushrooms",
            "Onions",
            "Potatoes"
         ]
      },
      {  
         month: "March",
         selection: [  
            "Apples",
            "Hazelnuts",
            "Pears",
            "Rhubarb",
            "Garlic",
            "Mushrooms",
            "Onions",
            "Potatoes"
         ]
      },
      {  
         month: "April",
         selection: [  
            "Apples",
            "Hazelnuts",
            "Pears",
            "Rhubarb",
            "Asparagus",
            "Garlic",
            "Lettuce",
            "Mushrooms",
            "Onions",
            "Potatoes"
         ]
      },
      {  
         month: "May",
         selection: [  
            "Apples",
            "Hazelnuts",
            "Pears",
            "Rhubarb",
            "Asparagus",
            "Cauliflower",
            "Garlic",
            "Lettuce",
            "Potatoes",
            "Radishes"
         ]
      },
      {  
         month: "June",
         selection: [  
            "Apples",
            "Hazelnuts",
            "Pears",
            "Rhubarb",
            "Blackberries",
            "Cherries",
            "Raspberries",
            "Strawberries",
            "Asparagus",
            "Broccoli",
            "Cauliflower",
            "Kohlrabi",
            "Lettuce",
            "Mushrooms",
            "Potatoes",
            "Radishes",
            "Squash"
         ]
      },
      {  
         month: "July",
         selection: [  
            "Apples",
            "Hazelnuts",
            "Pears",
            "Rhubarb",
            "Apricots",
            "Blackberries",
            "Blueberries",
            "Cherries",
            "Melons",
            "Nectarines",
            "Peaches",
            "Raspberries",
            "Strawberries",
            "Tomatoes",
            "Beets",
            "Broccoli",
            "Brussel Sprouts",
            "Cabbage",
            "Carrots",
            "Cauliflower",
            "Cucumber",
            "Eggplant",
            "Garlic",
            "Green Beans",
            "Kohlrabi",
            "Lettuce",
            "Mushrooms",
            "Potatoes",
            "Radishes",
            "Squash",
            "Turnips"
         ]
      },
      {  
         month: "August",
         selection: [  
            "Apples",
            "Apricots",
            "Blackberries",
            "Blueberries",
            "Cherries",
            "Melons",
            "Nectarines",
            "Peaches",
            "Pears",
            "Plums",
            "Raspberries",
            "Rhubarb",
            "Strawberries",
            "Tomatoes",
            "Beets",
            "Broccoli",
            "Brussel Sprouts",
            "Cabbage",
            "Carrots",
            "Cauliflower",
            "Corn",
            "Cucumber",
            "Eggplant",
            "Garlic",
            "Green Beans",
            "Kohlrabi",
            "Lettuce",
            "Mushrooms",
            "Onions",
            "Peas",
            "Peppers",
            "Potatoes",
            "Radishes",
            "Squash",
            "Turnips"
         ]
      },
      {  
         month: "September",
         selection: [  
            "Apples",
            "Blueberries",
            "Grapes",
            "Melons",
            "Peaches",
            "Pears",
            "Plums",
            "Raspberries",
            "Tomatoes",
            "Broccoli",
            "Brussel Sprouts",
            "Cabbage",
            "Carrots",
            "Cauliflower",
            "Corn",
            "Cucumber",
            "Eggplant",
            "Garlic",
            "Green Beans",
            "Kohlrabi",
            "Lettuce",
            "Mushrooms",
            "Onions",
            "Peas",
            "Peppers",
            "Potatoes",
            "Radishes",
            "Squash",
            "Turnips"
         ]
      },
      {  
         month: "October",
         selection: [  
            "Apples",
            "Grapes",
            "Hazelnuts",
            "Melons",
            "Peaches",
            "Pears",
            "Tomatoes",
            "Broccoli",
            "Brussel Sprouts",
            "Cabbage",
            "Carrots",
            "Cauliflower",
            "Corn",
            "Cucumber",
            "Eggplant",
            "Garlic",
            "Green Beans",
            "Kohlrabi",
            "Lettuce",
            "Mushrooms",
            "Onions",
            "Peas",
            "Peppers",
            "Potatoes",
            "Pumpkins",
            "Radishes",
            "Squash",
            "Turnips"
         ]
      },
      {  
         month: "November",
         selection: [  
            "Apples",
            "Hazelnuts",
            "Pears",
            "Broccoli",
            "Carrots",
            "Cauliflower",
            "Garlic",
            "Mushrooms",
            "Onions",
            "Potatoes",
            "Squash",
            "Turnips"
         ]
      },
      {  
         month: "December",
         selection: [  
            "Apples",
            "Hazelnuts",
            "Pears",
           "Broccoli",
            "Carrots",
            "Cauliflower",
            "Garlic",
            "Mushrooms",
            "Onions",
            "Potatoes",
            "Turnips"
         ]
      }
    ];


    let currentVisibleState = null;
    if(this.state.index !==null){
      const thisMonth = availableProduce[parseInt(this.state.index)];
      currentVisibleState =<Month month={thisMonth.month} selection={thisMonth.selection} />
    }
   //  // let index = 0
   //  // console.log(this.monthVisible);
   //  let month = availableProduce.find(e => e.month === this.state.index);
   //  console.log(month);
   //  let monthToDisplay = <Month month = {month.month} selection={month.selection}/>

    
  return (
    <React.Fragment>
      {/* {console.log(this.monthVisible)} */}
      {currentVisibleState}
      <button onClick = {this.handleClick}>"Next Month"</button>
    </React.Fragment>
    );  
  }
}




export default MonthHandler;