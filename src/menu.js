import React from 'react'
import "./menu.scss"


export default function Menu() {

    return (
        <div className="pt-3em">

            <ul className="nav nav-tabs d-flex space-evenly my-5 border-0 menu-header">
                <li className="active"><a className="active" data-toggle="tab" href="#breakfast">Breakfast</a></li>
                <li><a data-toggle="tab" href="#dinner">Dinner</a></li>
            </ul>
            <div className="tab-content menu-wrapper">
                <div id="breakfast" class="tab-pane fade in active show">
                    <p>Bed Coffee</p>
                    <p>Kasi Halwa</p>
                    <p>Rasa Malai</p>
                    <p>Onion Medhu Vadai</p>
                    <p>Heart Shape Elaneer Idly</p>
                    <p>Cashewnut Rava Dosa</p>
                    <p>Ghee Milagu Pongal</p>
                    <p>Aappam</p>
                    <p>Mini Chola Poori</p>
                    <p>Kuzhi Paniyaram</p>
                    <p>Mint Chutney</p>
                    <p>Coconut Chutney</p>
                    <p>Tomato Chutney</p>
                    <p>Spicy Vadacurry</p>
                    <p>Veg Paya</p>
                    <p>Chenna Masala</p>
                    <p>Small Onion Sambar</p>
                    <p>Filter Coffee</p>
                </div>
                <div id="dinner" class="tab-pane fade">
                    <p>Mushroom Soup</p>
                    <p>Radbi Mal Pua</p>
                    <p>Badham Kathili</p>
                    <p>Lichi Sweet</p>
                    <p>Cheese Paniyaram</p>
                    <p>Spring Roll</p>
                    <p>Gobi 65</p>
                    <p>Aalo Paratta</p>
                    <p>Milk Rumali Rotti</p>
                    <p>Veg Uthappam</p>
                    <p>Beetroot Idiyappam</p>
                    <p>Malli Idly</p>
                    <p>Hyderabad Veg Biriyani</p>
                    <p>Bisbilabath</p>
                    <p>Kadaai Paneer</p>
                    <p>Veg Paya</p>
                    <p>Vazhaipoo Ayirameer Kuzhambu</p>
                    <p>Katharika Mocha Chops</p>
                    <p>Mini Urulai Oil Roast</p>
                    <p>Kara Boondi Raita - with cucumber and onion</p>
                    <p>Garlic Chutney</p>
                    <p>Finger Chips</p>
                    <p>Elaneer Payasam</p>
                </div>


            </div>




            {/* <p>We are in the process of crafting our Menu</p>
                    <p>Making you Happy through our Wedding Food is our Ulitmate Goal</p>
                    <p>Visit us back in 2 weeks to Check out our Menu and probably Choose your own Dish.</p> */}
        </div>
    )
}