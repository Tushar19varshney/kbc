import React, { Component } from 'react';
import './src/css/Price.css';

class Price extends Component {

    render() {
        return (
            <div className="price-main-div">
                <p><span>10</span> <span>&#x20b9; 25,00,000 </span></p>
                <p><span>9 </span> <span>&#x20b9;12,50,000  </span></p>
                <p><span>8 </span> <span>&#x20b9;6,40,000   </span></p>
                <p><span>7 </span> <span>&#x20b9;3,20,000   </span></p>
                <p><span>6 </span> <span>&#x20b9;1,60,000   </span></p>
                <p><span>5 </span> <span>&#x20b9;80,000     </span></p>
                <p><span>4 </span> <span>&#x20b9;40,000     </span></p>
                <p><span>3 </span> <span>&#x20b9;20,000     </span></p>
                <p><span>2 </span> <span>&#x20b9;10,000     </span></p>
                <p><span>1 </span> <span>&#x20b9;5000       </span></p>
            </div>
        );
    }
}

export default Price;
