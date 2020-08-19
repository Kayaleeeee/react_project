import React, { Component } from "react"
import ItemDetailView from "./ItemDetailView"
import Popup from "reactjs-popup"
import "./ItemView.css"
import "./Selected_itemView.scss"

class ItemView_no_btn extends Component {
  onAddPrice = (e) => {
    //this.setState({ quantity: this.state.quantity + 1 })
    this.props.onAddPrice(e)
  }

  onDelete = (e) => {
    if (this.props.item.quantity == 1) {
      this.props.onRemoveItem(e)
    }
    //this.setState({ quantity: this.state.quantity - 1 })
    this.props.onReducePrice(e)
  }

  render() {
    const { item } = this.props
    return (
      <div className="cart_wrap">
        <img className="cart_imgs" src={item.imgUrl} width="200px" height="200px" />
        <div className="cart_info">
          <span>
            <h2>{item.name}</h2>
            <h3>가격: {item.price}</h3>
            <h3>수량: </h3>
            <button onClick={() => this.onDelete(item)}>-</button>
            {item.quantity}
            <button onClick={() => this.onAddPrice(item)}>+</button>
            {/* <button onClick={() => this.props.onAddPrice(item.price)}>+</button> */}
          </span>
        </div>
      </div>
    )
  }
}

export default ItemView_no_btn

// import React, { Component } from "react"
// import ItemDetailView from "./ItemDetailView"
// import Popup from "reactjs-popup"
// import "./ItemView.css"
// import "./Selected_itemView.scss"

// class ItemView_no_btn extends Component {
//   state = { quantity: 1, total_price: 0 }

//   onAdd = () => {

//     this.setState(
//       { quantity: this.state.quantity + 1 },
//       { price: this.state.quantity * this.props.item.price }
//     )
//   }

//   onDelete = () => {
//     if (this.state.quantity < 0) {
//       {
//         this.setState({ quantity: 1 })
//       }
//     }
//     this.setState({ quantity: this.state.quantity - 1 })
//   }

//   render() {
//     const { item } = this.props
//     const price = item.price * this.state.quantity
//     return (
//       <div className="cart_wrap">
//         <img
//           className="cart_imgs"
//           src={item.imgUrl}
//           width="200px"
//           height="200px"
//           onMouseEnter={() => this.setState({ mouse: !this.state.mouse })}
//         />
//         <div className="cart_info">
//           <span>
//             <h2>{item.name}</h2>
//             <h3>가격: {price}</h3>
//             <h3>수량: </h3>
//             <button onClick={this.onDelete}>-</button>
//             {this.state.quantity}
//             <button onClick={this.onAdd}>+</button>
//           </span>
//         </div>
//       </div>
//     )
//   }
// }

// export default ItemView_no_btn
